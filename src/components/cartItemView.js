import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";

// local imports
import {
  increment,
  decrement,
  clearCart,
  remove,
  getCartTotal,
} from "../reduxToolkit/feature/cartSlice";
function CartItemListView(props) {
  const dispatch = useDispatch();
  const { totalAmount, items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  function getTotalAmount(x, y) {
    return x * y;
  }

  return (
    <>
      {items.filter((element) => element.amount > 0).length > 0 ? (
        <>
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-medium text-body-secondary">Cart Total</h1>
            <div className="container text-center">
              <div className="row justify-content-center">
                <div className="col-lg-6 p-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5 className="card-title">Total Amount</h5>
                    <h5 className="card-title">$ {totalAmount}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Container className="d-flex justify-content-center">
            <div className="cart-item-wrapper shadow-lg bg-white rounded">
              {items
                .filter((element) => element.amount > 0)
                .map((item, index) => {
                  return (
                    <Row className="justify-content-center">
                      <Col className="col-md">
                        <div className="card p-3" style={{ border: 0 }}>
                          <div className="card-horizontal justify-content-center">
                            <div class="col-md-4">
                              <img
                                className="img-fluid"
                                src={item.img}
                                alt="Card image cap"
                              />
                            </div>
                            <div
                              className="col-md-6 "
                              style={{ border: "1px solid #80808047" }}
                            >
                              <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                  <h3 className="product-title">{item.name}</h3>
                                  <div class="icon-div">
                                    <i
                                      role="button"
                                      onClick={() => dispatch(remove(item.id))}
                                      className="bi fs-4 bi-x-square-fill"
                                    ></i>
                                  </div>
                                </div>
                                <div className="d-flex">
                                  <p className="product-price-label">Price:</p>
                                  <span className="product-price-value">
                                    $ {item.price}
                                  </span>
                                </div>

                                <div className="quantity-price-container mt-4">
                                  <div
                                    className="d-flex align-items-center"
                                    style={{
                                      width: "35%",
                                      justifyContent: "space-evenly",
                                    }}
                                  >
                                    <i
                                      onClick={() =>
                                        dispatch(decrement(item.id))
                                      }
                                      role="button"
                                      className="bi bi-dash-lg icon"
                                    />
                                    <text className="fw-medium">
                                      {" "}
                                      {item.amount}
                                    </text>
                                    <i
                                      role="button"
                                      className="bi bi-plus icon"
                                      onClick={() =>
                                        dispatch(increment(item.id))
                                      }
                                    />
                                  </div>
                                  <div className="price-quant">
                                    <h4 className="fw-medium">
                                      ${" "}
                                      {getTotalAmount(item.amount, item.price)}
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              <div className="d-flex flex-row justify-content-center">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="btn btn-outline-danger btn-lg my-2"
                >
                  Clear cart
                </button>
              </div>
            </div>
          </Container>
        </>
      ) : (
        <section className="py-5 text-center container d-flex justify-content-center flex-column">
          <h2>Your cart is empty</h2>
          <h4 className="text-body-secondary">Start shopping</h4>
        </section>
      )}
    </>
  );
}

export default CartItemListView;
