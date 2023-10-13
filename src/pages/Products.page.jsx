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

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    <Container>
      <ProductsList products={products} />
    </Container>
  );
};

export default Products;
