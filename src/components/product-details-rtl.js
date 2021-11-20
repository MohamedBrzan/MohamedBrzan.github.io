import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instruction } from "./code";
import { BsPlusCircle } from "react-icons/bs";
import { FiMinusCircle } from "react-icons/fi";
import sweet from "../images/sweet/sweet-8.jpg";
import "../css/product-details-rtl.css";
function ProductDetailsRtl() {
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

  return (
    <div className="product-details-rtl min-vh-100">
      <img src={sweet} alt="bread-img" className="w-100" />
      <p className="text-capitalize bg-white p-3">
        {" "}
        <p>
          <b>كيتو توست باللوز</b>
        </p>
        <p className="text-capitalize">
          توست كيتو ، الوزن الإجمالي التقريبي 400 جرام - مصنوع من جوز الهند
          والجبن (العناصر الغذائية لكل قطعة: الكربوهيدرات: 1 جرام ، الدهون: 16
          جرام ، البروتين: 7 جرام ، السعرات الحرارية: 178)
        </p>
      </p>
      <div className="row p-3 bg-white">
        <div className="col text-start">السعر</div>
        <div className="col text-end">3.75 د.ك</div>
      </div>
      <Instruction />
      <div className="pieces text-center fs-4 text-warning bg-white p-2">
        <span className="ms-3" role="button" onClick={Plus}>
          <BsPlusCircle />
        </span>

        <span className="text-dark">{x}</span>
        <span className="me-3" role="button" onClick={Minus}>
          <FiMinusCircle />
        </span>
      </div>
      <Link
        to="/home-rtl/menu-rtl"
        className="text-uppercase border-1 border-dark btn p-show p-2 w-100"
      >
        إضافة الطلب . 3.75 د.ك
      </Link>
    </div>
  );
}

export default ProductDetailsRtl;
