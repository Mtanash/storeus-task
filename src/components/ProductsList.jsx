import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import styles from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
  return (
    <div className={styles.productsList}>
      {products?.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
