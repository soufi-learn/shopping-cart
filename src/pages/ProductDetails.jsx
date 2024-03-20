import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../css/productDetauls.module.css";
import { DNA } from "react-loader-spinner";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../feature/products/productsSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((store) =>
    store.products.products.find((item) => item.id === +id)
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.productDetailsContainer}>
      {!product ? (
        <div className={styles.detailsLoaderBox}>
          <DNA
            visible={true}
            height="110"
            width="110"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div className={styles.productWrapper}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.productImage}
          />
          <div>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productCategory}>{product.category}</p>
            <div className={styles.productMoreInfo}>
              <span className={styles.productPrice}>
                {" "}
                <IoMdPricetag />
                {`$${product.price}`}
              </span>
              <Link to="/products" className={styles.backToShopButton}>
                <FaArrowLeft className="me-2" />
                <span>Back To Shop</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return item;
};

export default ProductDetails;
