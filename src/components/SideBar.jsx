import { FaListUl } from "react-icons/fa";
import styles from "../css/sidebar.module.css";
import { capitalizeFirstLetter, createQueryObject } from "../helper/helper";
import { useEffect, useState } from "react";

const SideBar = ({ products, setQuery, query }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const AllCategories = products.reduce(
      (acc, product) => {
        if (product.category && !acc.includes(product.category)) {
          acc.push(product.category);
        }
        return acc;
      },
      ["all"]
    );
    setCategories(AllCategories);
  }, [products]);

  const categoryHandler = (e) => {
    const { tagName } = e.target;

    if (tagName !== "LI") {
      return false;
    } else {
      const category = e.target.dataset.category;

      setQuery((query) => createQueryObject(query, { category }));
    }
  };

  return (
    <>
      {!!products.length ? (
        <div className={styles.categoryWrapper}>
          <h4 className={styles.categoryTitle}>
            <FaListUl className={styles.listIcon} />
            Categories
          </h4>

          <ul onClick={categoryHandler} className={styles.categoryList}>
            {categories.map((category) => {
              return (
                <li
                  key={category}
                  className={`${styles.categoryItem} ${
                    category.toLowerCase() === query.category
                      ? styles.selected
                      : null
                  }`}
                  data-category={category.toLowerCase()}
                >
                  {capitalizeFirstLetter(category)}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className={styles.loadingBox}>
          <div className={styles.skeletonTitle}></div>
          <div className={styles.skeletonButton}></div>
          <div className={styles.skeletonButton}></div>
          <div className={styles.skeletonButton}></div>
          <div className={styles.skeletonButton}></div>
        </div>
      )}
    </>
  );
};

export default SideBar;
