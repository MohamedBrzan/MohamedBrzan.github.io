import { Link } from "react-router-dom";
function NavRtl() {
  const target = (e) => {
    document.querySelectorAll(".home .nav-bar ul li a").forEach((a) => {
      a.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <ul className="ul-rtl list-unstyled text-center fs-5">
      <li>
        <Link to="/home-rtl/menu-rtl" className="active pb-1" onClick={target}>
          القائمة
        </Link>
      </li>
      <li className="me-3">
        <Link to="/home-rtl/search-rtl" className="pb-1" onClick={target}>
          البحث
        </Link>
      </li>
      <li className="me-3 pb-1">
        <Link to="/home-rtl/branches-rtl" className="pb-1" onClick={target}>
          الفروع
        </Link>
      </li>
      <li className="me-3 pb-1">
        <Link to="/home-rtl/order-status-rtl" className="pb-1" onClick={target}>
          حالة الطلب
        </Link>
      </li>
    </ul>
  );
}

export default NavRtl;
