import { Link } from "react-router-dom";
import { CheckoutForm } from "./forms";
import { FaArrowLeft } from "react-icons/fa";
import "../css/checkout.css";

function Checkout() {
  return (
    <div className="checkout vh-100 p-3">
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
          <h3 className="page-title text-center title">checkout</h3>
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
        <h4> contact information</h4>
        <p className="text-capitalize">
          we’ll use it to get back to you for order updates
        </p>
      </div>
      <br />
      <div className="row align-items-center bg-white py-3">
        {" "}
        <CheckoutForm />
      </div>
      <br />
    </div>
  );
}

export default Checkout;
