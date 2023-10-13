import getFilteredProducts from "../api/queries/getFilteredProducts";
import ProductsList from "../components/ProductsList";
import Container from "../components/UI/Container";
import useRequest from "../hooks/useRequest";

const Products = () => {
  const {
    data: products,
    error,
    isFetching,
  } = useRequest(getFilteredProducts({}));

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <Container>
      <ProductsList products={products} loading={isFetching} />
    </Container>
  );
};

export default Products;
