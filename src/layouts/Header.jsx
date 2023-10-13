import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <Container
        style={{
          overflowX: "unset",
        }}
      >
        <div className={styles.headerContent}>
          <h1 className={styles.logo} onClick={handleLogoClick}>
            Store Online
          </h1>

          {/* desktop menu */}
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

          <div className={styles.headerRightContent}>
            <CartIconButton />

            {/* hamburger menu */}
            <div className={styles.hamburgerMenu}>
              <AiOutlineMenu
                className={styles.hamburgerMenuIcon}
                onClick={handleMobileMenuClick}
              />

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.nav className={styles.mobileNav}>
                    <ul className={styles.list}>
                      {ROUTES.map((route, index) => (
                        <li key={index} className={styles.item}>
                          <Link
                            to={route.path}
                            className={styles.link}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {route.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.nav>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
