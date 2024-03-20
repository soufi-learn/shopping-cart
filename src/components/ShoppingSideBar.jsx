import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import styles from "../css/shoppingSidebar.module.css";
import { checkout } from "../feature/cart/cartSlice";
import { useDispatch } from "react-redux";

const ShoppingSideBar = ({ state }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarItem}>
        <TbChecklist />
        <p>Total:</p>
        <span>${state.total}</span>
      </div>
      <div className={styles.sidebarItem}>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div className={styles.sidebarItem}>
        <BsPatchCheck />
        <p>status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button
        onClick={() => dispatch(checkout())}
        className={styles.checkoutButton}
      >
        Checkout
      </button>
    </div>
  );
};

export default ShoppingSideBar;
