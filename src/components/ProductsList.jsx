import PropTypes from "prop-types";
import LoadingProductCard from "./LoadingProductCard";
import ProductCard from "./ProductCard";
import styles from "./ProductsList.module.css";

const ProductsList = ({ products, loading }) => {
  return (
    <div className={styles.productsList}>
      {!loading &&
        products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}

      {loading &&
        [...Array(6)].map((_, index) => {
          return <LoadingProductCard key={index} />;
        })}
    </div>
  );
};

export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
};
