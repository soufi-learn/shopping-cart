import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import styles from "../css/layout.module.css";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const state = useSelector((store) => store.cart);
  return (
    <>
      <header>
        <Link to="/products">Soufi Shop</Link>
        <Link to="/shopping-cart" className={styles.checkoutButton}>
          {!!state.selectedItems.length && (
            <span className={styles.counterText}>
              {state.selectedItems.length}
            </span>
          )}
          <PiShoppingCartSimpleBold className={styles.cartIcon} />
        </Link>
      </header>
      {children}
      <footer>
        Developed With 💙 By{" "}
        <a href="https://instagram.com/SoufiLearn">SoufiLearn</a>
      </footer>
    </>
  );
};

export default Layout;
