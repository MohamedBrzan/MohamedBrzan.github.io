import { Link } from "react-router-dom";
import { CheckoutFormRtl } from "./forms";
import "../css/checkout-rtl.css";
import { FaArrowLeft } from "react-icons/fa";

function CheckoutRtl() {
  return (
    <div className="checkout-rtl vh-100 p-3">
      <div className="row mb-3 bg-white p-2">
        {" "}
        <div className="col">
          {" "}
          <h3 className="page-title text-center title">إتمام الطلب</h3>
        </div>{" "}
        <div className="col-1">
          <Link to="/home-rtl/menu-rtl" className="text-dark">
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
      <div className="info text-capitalize bg-white px-3 py-2">
        {" "}
        <h4> معلومات الإتصال</h4>
        <p className="text-capitalize">
          سوف نستخدم تلك المعلومات لنوافيك بإحداثيات الطلب
        </p>
      </div>
      <br />
      <div className="row align-items-center bg-white py-3">
        {" "}
        <CheckoutFormRtl />
      </div>
      <br />
    </div>
  );
}

export default CheckoutRtl;
