import { Link } from "react-router-dom";
import { FaRegCopyright, FaWindowClose } from "react-icons/fa";
import "../css/offcanvas.css";
function OffCanvas() {
  const Close = () => {
    document.querySelector(".canvas").classList.remove("show");
  };
  return (
    <div className="canvas text-end text-capitalize close">
      <div className="p-2 bg-dark" onClick={Close} role="button">
        <FaWindowClose className="fs-1 close" onClick={Close} />
      </div>
      <div className="NavLinks">
        <div className="col row p-3 text-white title position-relative">
          <div className="d-inline-block text-center">
            <b>page links section</b>
          </div>{" "}
        </div>{" "}
        <div className="col pt-3">
          <div className="p-2 border-bottom">
            <Link to="/" className="active" onClick={Close}>
              menu
            </Link>
          </div>
          <div className="p-2 border-bottom">
            <Link to="/search" onClick={Close}>
              search
            </Link>
          </div>
          <div className="p-2 border-bottom">
            <Link to="/branches" onClick={Close}>
              branches
            </Link>
          </div>
          <div className="p-2 border-bottom">
            <Link to="/order-status" onClick={Close}>
              order status
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-section">
        <div className="col row p-3 text-white title">
          <div className="col text-center">
            <b>keto sections</b>
          </div>
        </div>
        <div className="m-3">
          <a
            href="#bread"
           className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            keto bread
          </a>
          <a
            href="#sandwich"
           className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            keto sandwich
          </a>
          <a
            href="#pizza"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            keto pizza
          </a>
          <br />
          <br />
          <a
            href="#wrap"
           className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            keto wrap
          </a>
          <a
            href="#sweet"
           className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            keto sweet
          </a>
          <a
            href="#cook"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            keto cook
          </a>{" "}
          <br />
          <br />
          <a
            href="#snack"
           className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            keto snack
          </a>
          <a
            href="#brown"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            keto brown
          </a>{" "}
          <br />
          <br />
          <a
            href="#hot"
           className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            hot drinks
          </a>
          <a
            href="#cold"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            cold drinks
          </a>
        </div>
        <div
          className="p-2 border-bottom border-top border-5 border-dark"
          onClick={Close}
        >
          {() => {
            if (window.location.href.includes("home-rtl")) {
              document.querySelector(".information").style.direction = "rtl";
              document.querySelectorAll(".ul").forEach((ul) => {
                ul.classList.add("hide");
              });
            }
          }}
          <Link to="home-rtl/menu-rtl">العربية</Link>
        </div>
        <div className="p-2 border-bottom border-5 border-dark" onClick={Close}>
          {() => {
            if (window.location.href.includes("home-rtl")) {
              document.querySelector(".information").style.direction = "ltr";
              window.location.reload();
            }
          }}

          <Link to="/">EN</Link>
        </div>
      </div>

      <div className="col row text-capitalize copyright p-0 mt-2 align-items-center text-center">
        {" "}
        <div>
          {" "}
          <FaRegCopyright /> powerd by{" "}
          <a
            href="https://www.google.com/"
            target="_blank"
            className="text-uppercase text-dark"
          >
            <b>ez shop</b>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
