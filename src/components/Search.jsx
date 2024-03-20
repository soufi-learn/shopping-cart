import styles from "../css/search.module.css";
import { ImSearch } from "react-icons/im";
import { Col, Container, Row } from "react-bootstrap";
import { createQueryObject } from "../helper/helper";

const Search = ({ setQuery, search, setSearch }) => {
  const searchHandler = (e) => {
    e.preventDefault();
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <Container fluid className="px-4">
      <Row className="justify-content-center justify-content-lg-start">
        <Col md={9} lg={6} xl={3}>
          <div className={styles.searchFormContainer}>
            <form className={styles.searchForm} onSubmit={searchHandler}>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className={`form-control ${styles.searchInput}`}
                placeholder="Search..."
              />

              <button type="submit" className="btn btn-primary">
                <ImSearch />
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
