import { Col, Container, Row } from "react-bootstrap";
import styles from "../css/skeletonLoader.module.css";

const SkeletonLoader = () => {
  return (
    <Container fluid>
      <Row>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
          return (
            <Col sm={6} md={4} xl={3} key={index}>
              <div className={styles.skeletonCard}>
                <div className={styles.skeletonImage}></div>
                <h4 className={styles.skeletonLine}></h4>
                <p className={styles.skeletonLine}></p>
                <button className={styles.skeletonButton}></button>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SkeletonLoader;
