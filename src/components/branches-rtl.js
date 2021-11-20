import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/branches-rtl.css";
function BranchesRtl() {
  return (
    <div className="branches-rtl vh-100">
      <div className="row pb-3 pt-3 ">
        {" "}
        <div className="col">
          {" "}
          <h3 className="page-title text-center">الفروع</h3>
        </div>{" "}
        <div className="col-1">
          <Link to="/home-rtl/menu-rtl" className="text-dark">
            {" "}
            <FaArrowLeft className="fs-3" />
          </Link>
        </div>
      </div>
      <p className="tab-info">
        <b>حوالى</b>
      </p>
      <p className="text-secondary">
        {" "}
        حولي شارع المثنى مجمع دارا مقابل المهلب مول
      </p>
    </div>
  );
}

export default BranchesRtl;
