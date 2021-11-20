import { Link } from "react-router-dom";
import { FaRegCopyright, FaWindowClose } from "react-icons/fa";
import "../css/offcanvas-rtl.css";
function OffCanvasRtl() {
  const Close = () => {
    document.querySelector(".canvas-rtl").classList.remove("show");
  };
  return (
    <div className="canvas-rtl text-end text-capitalize">
      <div className="p-2 bg-dark" onClick={Close} role="button">
        <FaWindowClose className="fs-1 close" onClick={Close} />
      </div>
      <div className="NavLinks">
        <div className="col row p-3 text-white title position-relative">
          <div className="d-inline-block text-center">
            <b>عناصر الصفحة</b>
          </div>{" "}
        </div>{" "}
        <div className="col pt-3">
          <div className="p-2 border-bottom">
            <Link to="/home-rtl/menu-rtl" className="active" onClick={Close}>
              القائمة
            </Link>
          </div>
          <div className="p-2 border-bottom">
            <Link to="/home-rtl/search-rtl" onClick={Close}>
              البحث
            </Link>
          </div>
          <div className="p-2 border-bottom">
            <Link to="/home-rtl/branches-rtl" onClick={Close}>
              الفروع
            </Link>
          </div>
          <div className="p-2 border-bottom">
            <Link to="/home-rtl/order-status-rtl" onClick={Close}>
              حالة الطلب
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-section">
        <div className="col row p-3 text-white title">
          <div className="col text-center">
            <b>الأصناف</b>
          </div>
        </div>
        <div className="m-3">
          {" "}
          <a
            href="#bread"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            كيتو خبز
          </a>
          <a
            href="#sandwich"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            كيتو ساندوتش
          </a>
          <a
            href="#pizza"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            كيتو بيتزا
          </a>{" "}
          <br />
          <br />
          <a
            href="#wrap"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            كيتو راب
          </a>
          <a
            href="#sweet"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            كيتو حلويات
          </a>
          <a
            href="#cook"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            كيتو مطبوخ
          </a>{" "}
          <br />
          <br />
          <a
            href="#snack"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            كيتو مقرمشات
          </a>
          <a
            href="#brown"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            كيتو بدون سكر
          </a>{" "}
          <br />
          <br />
          <a
            href="#hot"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            كيتو مشروبات ساخنة
          </a>
          <a
            href="#cold"
            className="px-3 me-1 py-2 bg-dark rounded-pill text-warning d-inline-block"
            onClick={Close}
          >
            كيتو مشروبات باردة
          </a>
        </div>

        <div
          className="p-2 border-bottom border-top border-5 border-dark"
          onClick={Close}
        >
          {() => {
            if (window.location.href.includes("home-rtl")) {
              document.querySelectorAll(".ul").forEach((ul) => {
                ul.classList.add("hide");
              });
            }
          }}
          <Link to="/home-rtl/menu-rtl">العربية</Link>
        </div>
        <div className="p-2 border-bottom border-5 border-dark" onClick={Close}>
          {() => {
            window.location.reload();
          }}

          <Link to="/">EN</Link>
        </div>
      </div>

      <div className="col row text-capitalize mt-2 align-items-center text-center">
        {" "}
        <div>
          {" "}
          <FaRegCopyright /> مشغل بواسطة{" "}
          <a
            href="https://www.google.com/"
            target="_blank"
            className="text-uppercase text-dark"
          >
            <b>إى ذى شوب</b>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OffCanvasRtl;
