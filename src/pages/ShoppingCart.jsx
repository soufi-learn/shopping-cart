import { Col, Container, Row } from "react-bootstrap";
import CartItem from "../components/CartItem";
import styles from "../css/shoppingCart.module.css";
import ShoppingSideBar from "../components/ShoppingSideBar";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const state = useSelector((store) => store.cart);

  return (
    <>
      {!state.selectedItems.length ? (
        <div className={styles.emptyBoxContainer}>
          <h4>Shopping Cart is Empty!</h4>
        </div>
      ) : (
        <Container>
          <Row>
            <Col xs={9}>
              <div className={styles.cartContainer}>
                {state.selectedItems.map((item) => {
                  return <CartItem key={item.id} product={item} />;
                })}
              </div>
            </Col>

            <Col xs={3}>
              <ShoppingSideBar state={state} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ShoppingCart;
