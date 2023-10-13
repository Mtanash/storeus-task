const getCartTotalItems = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

const getCartTotalPrice = (items) => {
  return items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
};

export { getCartTotalItems, getCartTotalPrice };
