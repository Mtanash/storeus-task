import { Link } from "react-router-dom";
import CartIconButton from "../components/CartIconButton";
import Container from "../components/UI/Container";
import styles from "./Header.module.css";

const ROUTES = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/products",
    label: "Products",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <h1 className={styles.logo}>Store Online</h1>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              {ROUTES.map((route, index) => (
                <li key={index} className={styles.item}>
                  <Link to={route.path} className={styles.link}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <CartIconButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
