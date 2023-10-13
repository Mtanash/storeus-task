import PropTypes from "prop-types";
import { BiCartDownload } from "react-icons/bi";
import truncateString from "../helpers/truncateString";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, displayLabel = false }) => {
  const { name, price, image, label, description } = product;
  return (
    <div className={styles.productContainer}>
      {label && displayLabel && (
        <div className={styles.productLabel}>{label}</div>
      )}

      <div className={styles.productImageContainer}>
        <img src={image} alt={name} className={styles.productImage} />
      </div>

      <div className={styles.productInfo}>
        <div className={styles.nameAndPrice}>
          <h3 className={styles.productName}>{name}</h3>
          <p className={styles.productPrice}>${price}</p>
        </div>
        <p className={styles.productDescription}>
          {truncateString(description, 150)}
        </p>
      </div>

      <div className={styles.productActions}>
        <button className={styles.addToCardBtn}>
          <BiCartDownload className={styles.addToCardIcon} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    label: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
  displayLabel: PropTypes.bool,
};
