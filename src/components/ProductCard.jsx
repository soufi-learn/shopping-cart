import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { TiMinus, TiPlus } from "react-icons/ti";
import { productQuantity, shortenTitle } from "../helper/helper";
import styles from "../css/products.module.css";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  increase,
  removeItem,
  decrease,
} from "../feature/cart/cartSlice";

const ProductCard = ({ product }) => {
  const { id, title, image, price } = product;

  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const quantity = productQuantity(state.selectedItems, id);

  return (
    <Col sm={6} md={4} xl={3}>
      <div className={styles.productItem}>
        <img src={image} alt={title} className={styles.productImg} />
        <h3 className={styles.productTitle}>{shortenTitle(title)}</h3>
        <p className={styles.productPrice}>${price}</p>
        <div className={styles.actionButtonsBox}>
          <Link to={`/products/${id}`} className={styles.detailsBtn}>
            <TbListDetails />
          </Link>
          <div className={styles.controlsButtonsBox}>
            {quantity === 1 && (
              <button
                className={styles.cardButton}
                onClick={() => dispatch(removeItem(product))}
              >
                <MdDeleteOutline />
              </button>
            )}
            {quantity > 1 && (
              <button
                className={styles.cardButton}
                onClick={() => dispatch(decrease(product))}
              >
                <TiMinus />
              </button>
            )}

            {!!quantity && (
              <span className={styles.quantityText}> {quantity}</span>
            )}

            {quantity === 0 ? (
              <button
                className={styles.cardButton}
                onClick={() => dispatch(addItem(product))}
              >
                <TbShoppingBagCheck />
              </button>
            ) : (
              <button
                className={styles.cardButton}
                onClick={() => dispatch(increase(product))}
              >
                <TiPlus />
              </button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
