import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import getFilteredProducts from "../api/queries/getFilteredProducts";
import useRequest from "../hooks/useRequest";
import styles from "./TopProductsCarousel.module.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import LoadingProductCard from "./LoadingProductCard";
import ProductCard from "./ProductCard";
import Container from "./UI/Container";

const TopProductsCarousel = () => {
  const {
    data: products,
    error,
    isFetching,
  } = useRequest(getFilteredProducts("label=Best Seller"));

  if (error) return <div>Error...</div>;

  return (
    <Container>
      <div className={styles.topProductsCarousel}>
        <h2 className={styles.topProductsCarouselTitle}>Top Products</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={true}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {!isFetching &&
            products?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  product={product}
                  displayLabel
                  style={{ margin: "0 auto" }}
                />
              </SwiperSlide>
            ))}

          {isFetching &&
            [...Array(3)].map((_, index) => (
              <SwiperSlide key={index}>
                <LoadingProductCard />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default TopProductsCarousel;
