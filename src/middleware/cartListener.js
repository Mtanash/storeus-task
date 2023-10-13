const subscribeToCart = (cartStore) => {
  const cartSubscriber = cartStore.subscribe((state) => {
    const items = state.items;

    // save cart items to local storage
    localStorage.setItem("cart-items", JSON.stringify(items));
  });

  return cartSubscriber;
};

export default subscribeToCart;
