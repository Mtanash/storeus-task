import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getCartTotalItems, getCartTotalPrice } from "../helpers/cart";
import useCartStore from "../stores/cartStore";
import styles from "./CartIconButton.module.css";

const CartIconButton = () => {
  const [cartDropdownIsOpen, toggleCartDropdown] = useState(false);

  const { items, removeProductFromCart } = useCartStore((state) => ({
    items: state.items,
    removeProductFromCart: state.removeProductFromCart,
  }));

  const totalCartItems = useMemo(() => {
    return getCartTotalItems(items);
  }, [items]);

  const cartTotalPrice = useMemo(() => {
    return getCartTotalPrice(items);
  }, [items]);

  const cartIsEmpty = items.length === 0;

  const handleCartButtonClick = () => {
    toggleCartDropdown(!cartDropdownIsOpen);
  };

  return (
    <div className={styles.cartIconButtonContainer}>
      <button className={styles.cartButton} onClick={handleCartButtonClick}>
        <AiOutlineShoppingCart className={styles.cartButtonIcon} />
        {totalCartItems > 0 && (
          <span className={styles.cartButtonCounter}>{totalCartItems}</span>
        )}
      </button>

      <AnimatePresence>
        {cartDropdownIsOpen && (
          <motion.div
            key="cart-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className={styles.cartDropdown}
          >
            <div className={styles.cartDropdownHeader}>
              <h3 className={styles.cartDropdownTitle}>Shopping Cart</h3>
              <button
                className={styles.cartDropdownCloseButton}
                onClick={() => toggleCartDropdown(false)}
              >
                &times;
              </button>
            </div>

            <div className={styles.cartDropdownBody}>
              {cartIsEmpty ? (
                <div className={styles.cartDropdownEmpty}>
                  <h4 className={styles.cartDropdownEmptyTitle}>
                    Your cart is empty
                  </h4>
                  <p className={styles.cartDropdownEmptyText}>
                    You have no items in your shopping cart.
                  </p>
                </div>
              ) : (
                <div className={styles.cartDropdownItems}>
                  {items.map((item) => {
                    const { product, quantity } = item;
                    const { id, name, image, price } = product;
                    return (
                      <div className={styles.cartDropdownItem} key={id}>
                        <img
                          className={styles.cartDropdownItemImage}
                          src={image}
                          alt={name}
                        />
                        <div className={styles.cartDropdownItemDetails}>
                          <h4 className={styles.cartDropdownItemTitle}>
                            {name}
                          </h4>
                          <span className={styles.cartDropdownItemPrice}>
                            ${price.toFixed(2)}
                          </span>
                          <span className={styles.cartDropdownItemQuantity}>
                            Quantity: {quantity}
                          </span>
                        </div>

                        <button
                          className={styles.cartDropdownItemRemoveButton}
                          onClick={() => removeProductFromCart(product)}
                        >
                          &times;
                        </button>

                        <div className={styles.cartDropdownItemTotal}>
                          ${(price * quantity).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <div className={styles.cartDropdownFooter}>
              <button className={styles.cartDropdownCheckoutButton}>
                Checkout
              </button>

              <div className={styles.cartDropdownTotal}>
                <span className={styles.cartDropdownTotalText}>Total:</span>
                <span className={styles.cartDropdownTotalPrice}>
                  ${cartTotalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartIconButton;
