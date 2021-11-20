import { FaArrowLeft } from "react-icons/fa";
import { ControlOne, ControlTwo } from "./radios";
import { Link } from "react-router-dom";
import "../css/delivery.css";
function Delivery() {
  const Active = (e) => {
    let day = document.querySelectorAll(".days .day");
    day.forEach((day) => {
      day.classList.remove("active");
    });

    e.target.classList.add("active");

    document.querySelector(".set-time").textContent =
      "set time ." + e.target.textContent;
  };

  return (
    <div className="delivery pt-3 min-vh-100">
      <div className="row mb-3">
        {" "}
        <div className="col-1">
          <Link to="/" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-3" />
          </Link>
        </div>
        <div className="col">
          {" "}
          <h3 className="page-title text-center">delivery time</h3>
        </div>
      </div>
      <ControlOne />
      <div className="days p-3 text-capitalize">
        <div className="row flex-nowrap text-center">
          <div className="col day active" onClick={Active} role="button">
            21 November <br /> today
          </div>
          <div className="col mb-3 day" onClick={Active} role="button">
            22 November <br /> tomorrow
          </div>
          <div className="col day" onClick={Active} role="button">
            23 November <br /> tuesday
          </div>
          <div className="col day" onClick={Active} role="button">
            24 November <br /> wednesday
          </div>
          <div className="col day" onClick={Active} role="button">
            25 November <br /> thursday
          </div>
          <div className="col day" onClick={Active} role="button">
            26 November <br /> friday
          </div>
          <div className="col day" onClick={Active} role="button">
            27 November <br /> friday
          </div>
          <div className="col day" onClick={Active} role="button">
            28 November <br /> saturday
          </div>
        </div>
      </div>
      <ControlTwo />
      <div className="deliver-btn">
        <button
          type="submit"
          className="set-time px-5 py-2 rounded-3 border-dark w-100"
        >
          set time . today 9:00 PM - 10:00 PM
        </button>
      </div>
    </div>
  );
}

export default Delivery;
