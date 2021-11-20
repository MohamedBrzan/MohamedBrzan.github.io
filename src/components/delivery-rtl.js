import * as React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { ControlOneRtl, ControlTwoRtl } from "./radios";
import { Link } from "react-router-dom";
import "../css/delivery-rtl.css";
function DeliveryRtl() {
  const Active = (e) => {
    let day = document.querySelectorAll(".days .day");
    day.forEach((day) => {
      day.classList.remove("active");
    });

    e.target.classList.add("active");

    document.querySelector(".set-time").textContent =
      "ضبط الوقت ." + e.target.textContent;
  };

  return (
    <div className="delivery-rtl pt-3 vh-100">
      <div className="row mb-3 mt-2">
        {" "}
        <div className="col">
          {" "}
          <h3 className="page-title text-center">وقت التوصيل</h3>
        </div>{" "}
        <div className="col-1 ">
          <Link to="/home-rtl/menu-rtl" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-4" />
          </Link>
        </div>
      </div>
      <ControlOneRtl />
      <div className="days p-3 text-capitalize">
        <div className="row flex-nowrap">
          <div
            className="col-2 text-center day active"
            onClick={Active}
            role="button"
          >
            21 نوفمبر <br /> اليوم
          </div>
          <div
            className="col-2 text-center mb-3 day"
            onClick={Active}
            role="button"
          >
            22 نوفمبر <br /> غداً
          </div>
          <div className="col-2 text-center day" onClick={Active} role="button">
            23 نوفمبر <br /> الثلاثاء
          </div>
          <div className="col-2 text-center day" onClick={Active} role="button">
            24 نوفمبر <br /> الأربعاء
          </div>
          <div className="col-2 text-center day" onClick={Active} role="button">
            25 نوفمبر <br /> الخميس
          </div>
          <div className="col-2 text-center day" onClick={Active} role="button">
            26 نوفمبر <br /> الجمعة
          </div>
          <div className="col-2 text-center day" onClick={Active} role="button">
            27 نوفمبر
            <br /> السبت
          </div>
          <div className="col-2 text-center day" onClick={Active} role="button">
            28 نوفمبر <br /> الأحد
          </div>
        </div>
      </div>
      <ControlTwoRtl />
      <div className="deliver-btn">
        <button
          type="submit"
          className="set-time px-5 py-2 rounded-3 border-dark w-100"
        >
          ضبط الوقت . 50 دقيقة
        </button>
      </div>
    </div>
  );
}

export default DeliveryRtl;
