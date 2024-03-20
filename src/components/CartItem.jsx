import { FiTrash2 } from "react-icons/fi";
import { shortenTitle } from "../helper/helper";
import { TiMinus, TiPlus } from "react-icons/ti";
import styles from "../css/shoppingCart.module.css";
import { decrease, increase, removeItem } from "../feature/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const { image, title, quantity, price } = product;
  const dispatch = useDispatch();

  return (
    <div className={styles.cartItem}>
      <img src={image} alt={title} className={styles.cartImage} />
      <p className={styles.cartTitle}>{shortenTitle(title)}</p>
      <p className={styles.cartPrice}>${price}</p>
      <div className={styles.cartButtonsWrapper}>
        {quantity === 1 && (
          <button
            onClick={() => dispatch(removeItem(product))}
            className={`${styles.cartButton} ${styles.removeButton}`}
          >
            <FiTrash2 />
          </button>
        )}

        {quantity > 1 && (
          <button
            onClick={() => dispatch(decrease(product))}
            className={styles.cartButton}
          >
            <TiMinus />
          </button>
        )}

        <span className={styles.quantity}>{quantity}</span>

        <button
          onClick={() => dispatch(increase(product))}
          className={styles.cartButton}
        >
          <TiPlus />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
