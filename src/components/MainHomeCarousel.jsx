import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../assets/slider-img-1.jpg";
import sliderImg2 from "../assets/slider-img-2.jpg";
import styles from "./MainHomeCarousel.module.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const CAROUSEL_IMAGES = [
  {
    id: 1,
    src: sliderImg1,
    alt: "Shop Now",
    backgroundColor: "#e1dfe0",
  },
  {
    id: 2,
    src: sliderImg2,
    alt: "Shop Now",
    backgroundColor: "#f0d6c5",
  },
];

const MainHomeCarousel = () => {
  return (
    <div className={styles.mainHomeCarousel}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {CAROUSEL_IMAGES.map((image) => (
          <SwiperSlide key={image.id}>
            <div
              className={styles.imageContainer}
              style={{
                backgroundColor: image.backgroundColor,
              }}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainHomeCarousel;
