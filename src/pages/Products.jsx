import { useEffect, useState } from "react";
import { fetchProducts } from "../feature/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import SkeletonLoader from "../components/SkeletonLoader";
import styles from "../css/products.module.css";
import Search from "../components/Search";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";

import {
  filterCategories,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setFilteredItems(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterCategories(finalProducts, query.category);
    setSearch(query.search || "");
    setFilteredItems(finalProducts);
  }, [query]);

  return (
    <>
      <Search setQuery={setQuery} search={search} setSearch={setSearch} />

      <div className={styles.productsContainer}>
        <Container fluid>
          <Row>
            <Col lg={9} xl={10} className="order-2 order-lg-1">
              {loading && <SkeletonLoader />}
              {!filteredItems.length && !loading && !error && (
                <h4 className="ms-3 text-danger">No Result!</h4>
              )}
              {error && <p className="ms-3 text-secondary">{error}</p>}
              <section className={styles.productsWrapper}>
                <Container fluid>
                  <Row>
                    {filteredItems.map((product) => {
                      return <ProductCard key={product.id} product={product} />;
                    })}
                  </Row>
                </Container>
              </section>
            </Col>

            {/* Categories List */}
            <Col
              xs={12}
              md={6}
              lg={3}
              xl={2}
              className="ps-lg-0 mx-auto my-4 order-1 order-lg-2 mt-lg-0"
            >
              {!error && (
                <SideBar
                  products={products}
                  setQuery={setQuery}
                  query={query}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Products;
