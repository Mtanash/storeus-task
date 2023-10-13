import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./CartIconButton.module.css";

const CartIconButton = () => {
  return (
    <div className={styles.cartIconButtonContainer}>
      <button className={styles.cartButton}>
        <AiOutlineShoppingCart className={styles.cartButtonIcon} />
      </button>
    </div>
  );
};

export default CartIconButton;
