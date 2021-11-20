import { Link } from "react-router-dom";
function Nav() {
  const target = (e) => {
    document.querySelectorAll(".home .nav-bar ul li a").forEach((a) => {
      a.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <ul className="ul my-nav list-unstyled text-center fs-5">
      <li>
        <Link to="/" className="active pb-1" onClick={target}>
          menu
        </Link>
      </li>
      <li className="ms-2">
        <Link to="search" className="pb-1" onClick={target}>
          search
        </Link>
      </li>
      <li className="ms-2 pb-1">
        <Link to="branches" className="pb-1" onClick={target}>
          branches
        </Link>
      </li>
      <li className="ms-2 pb-1">
        <Link to="order-status" className="pb-1" onClick={target}>
          order status
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
