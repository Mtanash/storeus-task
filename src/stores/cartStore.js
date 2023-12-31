import { create } from "zustand";
import subscribeToCart from "../middleware/cartListener";

const useCartStore = create((set) => ({
  // items will be {product, quantity}
  items: localStorage.getItem("cart-items")
    ? JSON.parse(localStorage.getItem("cart-items"))
    : [],
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
  removeProductFromCart: (product) =>
    set((state) => ({
      items: state.items.filter((i) => i.product.id !== product.id),
    })),
  clearCart: () => set({ items: [] }),
  getCartTotal: () =>
    useCartStore
      .getState()
      .items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ),
  getCartCount: () =>
    useCartStore
      .getState()
      .items.reduce((total, item) => total + item.quantity, 0),
}));
export default useCartStore;

subscribeToCart(useCartStore);
