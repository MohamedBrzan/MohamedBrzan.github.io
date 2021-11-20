import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import CityRtl from "./city-rtl";
import "../css/status-rtl.css";
function StatusRtl() {
  return (
    <div className="status-rtl vh-100 px-3">
      <div className="row mb-3 mt-3 bg-white p-2">
        <div className="col">
          {" "}
          <div className=" text-center title">طريقة الإستلام</div>
        </div>{" "}
        <div className="col-1 text-start">
          <Link to="/home-rtl/menu-rtl" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-3" />
          </Link>
        </div>
      </div>
      <p className=" bg-white p-3">
        <b>يمكن العثور على رمز الطلب في رسائل SMS ، بعد تقديم الطلب.</b>
      </p>
      <CityRtl />
      <button
        type="button"
        className="text-uppercase border-1 border-dark btn p-show"
      >
        <b>ابحث عن الطلب</b>
      </button>
    </div>
  );
}

export default StatusRtl;
