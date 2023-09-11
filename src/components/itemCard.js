import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//import { increment, decrement, update, basket } from "./functions";
import {
  decrement,
  increment,
  remove,
} from "../reduxToolkit/feature/cartSlice";

function ItemCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="card shadow-lg">
      <img
        className="bd-placeholder-img card-img-top"
        src={item.img}
        width="100%"
        height="225"
        aria-label="shirt image"
      />
      <div className="card-body">
        <h5>{item.name}</h5>
        <p className="card-text">{item.desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="fs-5 fw-semibold">${item.price}</small>
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="button"
              className="btn btn-md fw-medium"
              onClick={() => dispatch(decrement(item.id))}
            >
              -
            </button>
            <small className="fs-6 fw-medium text-body-secondary">
              {item.amount}
            </small>
            <button
              type="button"
              className="btn btn-md fw-medium"
              onClick={() => dispatch(increment(item.id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
