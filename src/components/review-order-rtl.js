import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import "../css/review-order-rtl.css";
function ReviewOrderRtl() {
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
    Button.textContent = "إتمام الطلب";
    Button.classList.remove("disabled");
  } else {
    Button.innerHTML = `<b>أقل تكلفة للطلب 4 د.ك</b>`;
    Button.classList.add("disabled");
  }

  return (
    <div className="review-order-rtl min-vh-100 p-3">
      <div className="row mb-3 bg-white p-2">
        {" "}
        <div className="col">
          {" "}
          <h3 className="page-title text-center title">مراجعة الطلب</h3>
        </div>{" "}
        <div className="col-1">
          <Link to="/home-rtl/menu-rtl" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-3" />
          </Link>
        </div>
      </div>
      <p className="text-capitalize bg-white px-3 py-2">
        {" "}
        <p>
          <b>وقت التوصيل</b>
        </p>
        <p className="text-capitalize">25 نوفمبر 90:00 صباحا : 10:00 مساء</p>
      </p>
      <div className="p-2 bg-white">
        <p className="text-capitalize bg-white py-2">
          {" "}
          <b>الطلب</b>
        </p>
        <div className="row">
          <div className="col text-end">
            <p className="text-capitalize keto-color">
              <b>كيك كيتو بالفستق</b>
            </p>{" "}
            <div className="fs-4 text-warning">
              <span className="ms-3" role="button" onClick={Plus}>
                <BsPlusCircle />
              </span>
              <span className="text-dark">{x}</span>
              <span className="me-3" role="button" onClick={Minus}>
                <FiMinusCircle />
              </span>
            </div>
          </div>
          <div className="col text-start">
            <p>3.75 د.ك</p>{" "}
            <button
              type="button"
              className="text-capitalize border-1 border-dark btn"
            >
              <b>حذف</b>
            </button>
          </div>
        </div>
      </div>{" "}
      <br />
      <div className="row align-items-center bg-white py-3">
        <p className="text-capitalize">
          <b>كود الخصم</b>
        </p>{" "}
        <div className="col-md-10">
          {" "}
          <input className="form-control py-2" placeholder="أضف كود خصم" />
        </div>
        <div className="col-md-2 text-center mt-2">
          <button className="btn-warning border w-100 h-100 py-2 text-capitalize">
            {" "}
            إلغاء
          </button>
        </div>{" "}
      </div>
      <br />
      <div className="row align-items-center bg-white py-2 total">
        <div className="col text-end">
          {" "}
          <p className="text-capitalize text-secondary m-0 fs-5 py-3">
            المجموع الفرعي
          </p>{" "}
          <p className="text-capitalize text-secondary fs-5 py-3">التوصيل</p>
          <p className="text-capitalize mt-1 fs-4">
            <b>المجموع</b>
          </p>
        </div>
        <div className="col text-start mt-2 fs-5">
          <p className="text-uppercase text-secondary m-0 fs-5 py-3">
            3.000 د.ك
          </p>{" "}
          <p className="text-uppercase text-secondary py-3">.750 د.ك</p>
          <p className="text-uppercase mt-1 fs-4">
            <b>3.750 د.ك</b>
          </p>
        </div>
      </div>
      <Link
        to="/home-rtl/checkout-rtl"
        className="text-capitalize border-1 border-dark btn p-show disabled"
      >
        <b>أقل تكلفة للطلب 4 د.ك</b>
      </Link>
    </div>
  );
}

export default ReviewOrderRtl;
