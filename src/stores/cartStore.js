import { create } from "zustand";

const useCartStore = create((set) => ({
  // items will be {product, quantity}

  items: [],
  addToCart: (product) =>
    set((state) => {
      const item = state.items.find((i) => i.product.id === product.id);
      if (item) {
        item.quantity += 1;
        return { items: [...state.items] };
      }
      return { items: [...state.items, { product, quantity: 1 }] };
    }),
  removeFromCart: (product) =>
    set((state) => {
      const item = state.items.find((i) => i.product.id === product.id);
      if (item) {
        if (item.quantity === 1) {
          return {
            items: state.items.filter((i) => i.product.id !== product.id),
          };
        }
        item.quantity -= 1;
        return { items: [...state.items] };
      }
      return { items: [...state.items] };
    }),
  clearCart: () => set({ items: [] }),
  getCartTotal: () =>
    set((state) => {
      return state.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    }),

  getCartCount: () =>
    set((state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    }),
}));

export default useCartStore;
