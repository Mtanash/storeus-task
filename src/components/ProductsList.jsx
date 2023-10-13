import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import getFilteredProducts from "../api/queries/getFilteredProducts";
import useRequest from "../hooks/useRequest";
import LoadingProductCard from "./LoadingProductCard";
import ProductCard from "./ProductCard";
import styles from "./ProductsList.module.css";

const OPTIONS = [
  { value: "New Arrival", label: "New Arrival" },
  { value: "Best Seller", label: "Best Seller" },
  { value: "On Sale", label: "On Sale" },
  { value: "Limited Stock", label: "Limited Stock" },
  { value: "", label: "All" },
];

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: products,
    error,
    isFetching,
    request,
  } = useRequest(getFilteredProducts(searchParams.toString()));

  const handleApplyFilter = (selectedOption) => {
    const filter = selectedOption.value;

    if (!filter) {
      setSearchParams({});
      request(getFilteredProducts());
      return;
    }

    setSearchParams({
      ...searchParams,
      label: filter,
    });

    request(getFilteredProducts(`label=${filter}`));
  };

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Products</h2>

        {/* filter */}
        <div className={styles.filter}>
          <label htmlFor="filter">Filter:</label>
          <Select
            className={styles.select}
            id="filter"
            options={OPTIONS}
            placeholder="Select filter"
            onChange={handleApplyFilter}
            defaultValue={OPTIONS.find(
              (option) => option.value === searchParams.get("label")
            )}
          />
        </div>
      </div>

      <div className={styles.productsList}>
        {!isFetching &&
          products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}

        {isFetching &&
          [...Array(6)].map((_, index) => {
            return <LoadingProductCard key={index} />;
          })}
      </div>
    </>
  );
};

export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
};
