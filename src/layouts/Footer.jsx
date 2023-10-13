import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Store Online &copy; {new Date().getFullYear()}</p>

      <p className={styles.createdBy}>
        Created by
        <a
          href="https://www.linkedin.com/in/mohamed-tanash/"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Mohamed Tanash
        </a>
      </p>
    </footer>
  );
};

export default Footer;
