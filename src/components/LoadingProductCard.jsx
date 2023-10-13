import styles from "./LoadingProductCard.module.css";

const LoadingProductCard = () => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.skeletonLoader}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonText}>
          {[...Array(3)].map((_, index) => (
            <div key={index} className={styles.skeletonTextLine}></div>
          ))}
        </div>

        <div className={styles.button}></div>
      </div>
    </div>
  );
};

export default LoadingProductCard;
