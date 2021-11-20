import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import GoogleMaps from "./google-map";
import { FiChevronLeft } from "react-icons/fi";
import { DeliveryAddressFormRtl } from "./forms";
import "../css/delivery-address-rtl.css";

function DeliveryAddressRtl() {
  const active = (e) => {
    let Div = document.querySelectorAll(".home-info div");
    Div.forEach((div) => {
      div.classList.remove("active");
    });

    e.target.classList.add("active");
  };

  return (
    <div className="delivery-address-rtl p-3">
      <div className="row mb-3 bg-white p-2">
        {" "}
        <div className="col">
          {" "}
          <h3 className="page-title text-center title">عنوان التوصيل</h3>
        </div>{" "}
        <div className="col-1">
          <Link to="/home-rtl/checkout-rtl" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-3" />
          </Link>
        </div>
      </div>
      <div className="confirm d-flex">
        <div className="rounded mx-1"></div>
        <div className="rounded mx-1"></div>
        <div className="rounded mx-1"></div>
        <div className="rounded mx-1"></div>
      </div>
      <br />

      <div className="text-center py-5">
        <i className="fas fa-map-marked-alt icon d-block m-auto"></i>
      </div>

      <h5 className="text-capitalize">عنوان التوصيل</h5>
      <p className="text-capitalize">
        سيساعدك الموقع الدقيق في الوصول إليك بشكل أسرع
      </p>

      <div className="row align-items-center bg-white py-3">
        {" "}
        <GoogleMaps />
        <div className="border-bottom row p-2">
          <div className="col text-end">
            <b>المنطقة</b>
          </div>
          <div className="col text-start">
            <Link to="search-city" className="info-links">
              عبدالله السالم
              <FiChevronLeft />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-capitalize text-secondary size">
        اختر نوع الوحدة السكنية
      </p>
      <div className="text-capitalize d-flex text-center home-info justify-content-center">
        <div
          className="bg-white text-warning mx-1 p-3 position-relative active"
          role="button"
          onClick={active}
        ></div>
        <div
          className="bg-white text-warning mx-1 p-3 position-relative"
          role="button"
          onClick={active}
        ></div>
        <div
          className="bg-white text-warning mx-1 p-3 position-relative"
          role="button"
          onClick={active}
        ></div>
      </div>
      <div className="forms">
        <DeliveryAddressFormRtl />
      </div>
    </div>
  );
}

export default DeliveryAddressRtl;
