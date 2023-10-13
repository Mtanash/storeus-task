import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { getCartTotalItems, getCartTotalPrice } from "../helpers/cart";
import useCartStore from "../stores/cartStore";
import styles from "./CartIconButton.module.css";

const CartIconButton = () => {
  const cartDropDownRef = useRef(null);
  const [cartDropdownIsOpen, toggleCartDropdown] = useState(false);

  const { items, addToCart, removeFromCart } = useCartStore((state) => ({
    items: state.items,
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
  }));

  const totalCartItems = useMemo(() => {
    return getCartTotalItems(items);
  }, [items]);

  const cartTotalPrice = useMemo(() => {
    return getCartTotalPrice(items);
  }, [items]);

  const cartIsEmpty = items.length === 0;

  const handleCartButtonClick = () => {
    toggleCartDropdown((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        cartDropDownRef.current &&
        !cartDropDownRef.current.contains(e.target)
      ) {
        toggleCartDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCheckoutClick = () => {
    toggleCartDropdown(false);
    alert("Checkout");
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
            initial={{ opacity: 0, y: -600 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -600 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={styles.cartDropdown}
            ref={cartDropDownRef}
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

                        <div className={styles.cartActionButtons}>
                          <button
                            className={styles.cartActionButton}
                            onClick={() => addToCart(product)}
                          >
                            <AiOutlinePlusCircle
                              className={styles.cartActionButtonIcon}
                            />
                          </button>
                          <button
                            className={styles.cartActionButton}
                            onClick={() => removeFromCart(product)}
                          >
                            <AiOutlineMinusCircle
                              className={styles.cartActionButtonIcon}
                            />
                          </button>
                        </div>

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
              <button
                className={styles.cartDropdownCheckoutButton}
                onClick={handleCheckoutClick}
              >
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
