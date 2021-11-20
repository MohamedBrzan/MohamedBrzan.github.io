import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/area.css";
function Area() {
  return (
    <div className="area vh-100 px-3">
      <div className="row mb-3 mt-3 bg-white p-2">
        {" "}
        <div className="col-1">
          <Link to="/" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-3" />
          </Link>
        </div>
        <div className="col">
          {" "}
          <div className=" text-center title">order look up</div>
        </div>
      </div>
      <p className=" bg-white p-3">
        <b>order code can be found in SMS messages, after placing an order.</b>
      </p>
      <input
        type="search"
        className="form-control border-bottom mb-5"
        placeholder="order code"
      />
      <Link to="#" className="text-uppercase border-1 border-dark btn p-show d-block m-auto">
        <b>look up order</b>
      </Link>
    </div>
  );
}

export default Area;
