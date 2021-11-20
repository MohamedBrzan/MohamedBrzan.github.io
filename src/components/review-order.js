import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Code } from "./code";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import "../css/review-order.css";
function ReviewOrder() {
  const [x, setX] = useState(1);

  const Plus = () => {
    setX(x + 1);
  };
  const Minus = () => {
    if (x <= 1) {
      return;
    } else {
      setX(x - 1);
    }
  };

  let Button = document.querySelector(".p-show");
  if (x >= 3) {
    Button.textContent = "Go To Checkout";
    Button.classList.remove("disabled");
  } else {
    Button.innerHTML = `<b>minimum order amount KWD 4</b>`;
    Button.classList.add("disabled");
  }

  return (
    <div className="review-order min-vh-100 p-3">
      <div className="row mb-3 bg-white p-2">
        {" "}
        <div className="col-1">
          <Link to="/" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-3" />
          </Link>
        </div>
        <div className="col">
          {" "}
          <h3 className="page-title text-center title">review order</h3>
        </div>
      </div>
      <p className="text-capitalize bg-white px-3 py-2">
        {" "}
        <p>
          <b>delivery time</b>
        </p>
        <p className="text-capitalize">25 NOV 9:00 PM - 10:00 PM</p>
      </p>
      <div className="p-2 bg-white">
        <p className="text-capitalize bg-white py-2">
          {" "}
          <b>order items</b>
        </p>
        <div className="row">
          <div className="col text-start">
            <p className="text-capitalize keto-color">
              <b>keto pistachio cake</b>
            </p>{" "}
            <div className="fs-4 text-warning">
              <span className="me-3" role="button" onClick={Minus}>
                <FiMinusCircle />
              </span>
              <span className="text-dark">{x}</span>
              <span className="ms-3" role="button" onClick={Plus}>
                <BsPlusCircle />
              </span>
            </div>
          </div>
          <div className="col text-end">
            <p>KWD 3.75</p>{" "}
            <button
              type="button"
              className="text-capitalize border-1 border-dark btn"
            >
              <b> remove</b>
            </button>
          </div>
        </div>
      </div>{" "}
      <br />
      <div className="row align-items-center bg-white py-3">
        <p className="text-capitalize">
          <b>promo code</b>
        </p>{" "}
        <div className="col-md-10">
          {" "}
          <Code />
        </div>{" "}
        <div className="col-md-2 text-center mt-2">
          <button className="btn btn-warning border cancel text-capitalize">
            {" "}
            cancel
          </button>
        </div>
      </div>
      <br />
      <div className="row align-items-center bg-white py-2 total">
        <div className="col text-start">
          {" "}
          <p className="text-capitalize text-secondary m-0">subtotal</p>{" "}
          <p className="text-capitalize text-secondary">delivery</p>
          <p className="text-capitalize mt-1">
            <b>total</b>
          </p>
        </div>
        <div className="col text-end mt-2">
          <p className="text-uppercase text-secondary m-0">kwd 3.000</p>{" "}
          <p className="text-uppercase text-secondary">kwd 0.750</p>
          <p className="text-uppercase mt-1">
            <b>kwd 3.750</b>
          </p>
        </div>
      </div>
      <Link
        to="checkout"
        className="text-capitalize border-1 border-dark btn p-show disabled"
      >
        <b>minimum order amount KWD 4</b>
      </Link>
    </div>
  );
}

export default ReviewOrder;
