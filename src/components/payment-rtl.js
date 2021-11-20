import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaCcVisa, FaCcMastercard, FaCcAmazonPay } from "react-icons/fa";
import "../css/payment-rtl.css";
function PaymentRtl() {
  const active = (e) => {
    let Div = document.querySelectorAll(".home-info div");
    Div.forEach((div) => {
      div.classList.remove("active");
    });

    e.target.classList.add("active");
  };

  return (
    <div className="payment-rtl vh-100 p-3">
      <div className="row mb-3 bg-white p-2">
        {" "}
        <div className="col">
          {" "}
          <h3 className="page-title text-center title">الدفع</h3>
        </div>{" "}
        <div className="col-1">
          <Link to="/home-rtl/delivery-address-rtl" className="text-dark">
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
        <MdPayment className="icon d-block m-auto" />
        <h5 className="text-capitalize">طرق الدفع</h5>
        <p className="text-capitalize">اختر طريقة الدفع المفضلة لديك</p>
        <div>
          <div className="row align-items-center border-success safe">
            <div className="col-1 text-start">
              {" "}
              <i
                role="presentation"
                aria-hidden="true"
                className="ltr-1nqo8ee e1i5aqxk0 fs-1 text-success"
              >
                <svg width="1em" height="1em" viewBox="0 0 49 57">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.464"
                    d="M11.29 26.957V5.45a2.66 2.66 0 012.65-2.67h0a2.66 2.66 0 012.65 2.67v18.34m5.302 0V5.45a2.66 2.66 0 012.65-2.67h0a2.66 2.66 0 012.65 2.67v15.657m3.067 27.496V62m-3.067-41.43V8.382a2.66 2.66 0 012.65-2.67h0a2.66 2.66 0 012.651 2.67v14.027M16.591 23.79V3.67A2.66 2.66 0 0119.241 1h0a2.66 2.66 0 012.65 2.67v20.12m1.56 11.961s-.728-7.748-12.161-7.748L7.652 24.76l-1.316-5.261c-.53-2.156-2.734-3.433-4.85-2.81L1 16.802l1.622 8.234c.096.51.268 1.004.51 1.463l3.524 6.78a5.17 5.17 0 001.257 1.557l4.401 3.595a2.95 2.95 0 011.055 2.263v21.19m28.906-14.786l-4.666 3.76-4.666-3.76a15.406 15.406 0 01-5.725-11.999V24.34l.625.242a12.689 12.689 0 009.281-.049l.485-.193.755.284a12.687 12.687 0 009.293-.143L48 24.34v10.758a15.41 15.41 0 01-5.725 12zm-9.302-9.66l2.185 2.202 7.886-7.945"
                  ></path>
                </svg>
              </i>
            </div>
            <div className="col text-success">
              {" "}
              لأسباب تتعلق بالنظافة ، تعتبر المدفوعات الإلكترونية أكثر أمانًا من
              النقد الفواتير.
            </div>
          </div>
        </div>
      </div>

      <div className="text-capitalize d-flex text-center home-info justify-content-center">
        <div
          className="bg-white mx-1 p-3 text-warning position-relative active"
          role="button"
          onClick={active}
        >
          <FaCcVisa className="fs-1" /> <br />
          فيزا
        </div>
        <div
          className="bg-white text-warning mx-1 p-3 position-relative"
          role="button"
          onClick={active}
        >
          {" "}
          <FaCcMastercard className="fs-1" /> <br />
          ماستر كارد
        </div>
        <div
          className="bg-white text-warning mx-1 p-3 position-relative"
          role="button"
          onClick={active}
        >
          {" "}
          <FaCcAmazonPay className="fs-1" /> <br />
          أمازون باى
        </div>
      </div>
      <Link
        to="/home-rtl/payment-rtl"
        className="form-btn py-2 px-5 text-center border-warning mt-5 d-block m-auto w-50 text-capitalize rounded border border-dark"
      >
        {" "}
        <b>التالى</b>
      </Link>
    </div>
  );
}

export default PaymentRtl;
