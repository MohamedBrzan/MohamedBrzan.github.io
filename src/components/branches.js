import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/branches.css";
function Branches() {
  return (
    <div className="branches vh-100">
      <div className="row pb-3 pt-3 ">
        {" "}
        <div className="col-1">
          <Link to="/" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-3" />
          </Link>
        </div>
        <div className="col">
          {" "}
          <h3 className="page-title text-center">branches</h3>
        </div>
      </div>
      <p className="tab-info">
        <b>Hawally</b>
      </p>
      <p className="text-secondary">
        {" "}
        Hawaaly, Al Muthana Street, Darea Complex, Opposite Muhallab mall
      </p>
    </div>
  );
}

export default Branches;
