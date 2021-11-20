import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import HomeImg from "../images/home/pizza.jpg";
import OffCanvas from "./offcanvas";
import OffCanvasRtl from "./offcanvas-rtl";
import Menu from "../components/menu";
import MenuRtl from "../components/menu-rtl";
import Delivery from "../components/delivery";
import DeliveryRtl from "../components/delivery-rtl";
import Search from "../components/search";
import SearchRtl from "../components/search-rtl";
import SearchCity from "../components/search-city";
import Branches from "../components/branches";
import BranchesRtl from "../components/branches-rtl";
import Status from "./area";
import StatusRtl from "../components/area-rtl";
import ProductDetails from "../components/product-details";
import ProductDetailsRtl from "../components/product-details-rtl";
import ReviewOrder from "./review-order";
import ReviewOrderRtl from "./review-order-rtl";
import Checkout from "./checkout";
import CheckoutRtl from "./checkout-rtl";
import DeliveryAddress from "./delivery-address";
import DeliveryAddressRtl from "./delivery-address-rtl";
import Payment from "../components/payment";
import PaymentRtl from "../components/payment-rtl";
import Tabs from "./tabs";
import TabsRtl from "./tabs-rtl";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./nav";
import NavRtl from "./nav-rtl";
import "../css/home.css";

function Home() {
  return (
    <Router>
      <div className="home position-relative text-capitalize" id="top">
        <OffCanvas />
        <Routes>
          <Route path="/home-rtl/:id" element={<OffCanvasRtl />} />
        </Routes>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 information bg-white">
              <Routes>
                <Route exact path="/" element={<Menu />} />
                <Route path="order-mode" element={<Tabs />} />
                <Route path="/home-rtl/tabs-rtl" element={<TabsRtl />} />
                <Route path="delivery-time" element={<Delivery />} />
                <Route path="search" element={<Search />} />
                <Route path="home-rtl/search-rtl" element={<SearchRtl />} />
                <Route
                  path="/review-order/checkout/delivery-Address/search-city"
                  element={<SearchCity />}
                />
                <Route
                  path="/review-order/checkout/delivery-Address/payment"
                  element={<Payment />}
                />
                <Route path="home-rtl/payment-rtl" element={<PaymentRtl />} />
                <Route path="branches" element={<Branches />} />
                <Route path="home-rtl/branches-rtl" element={<BranchesRtl />} />
                <Route path="order-status" element={<Status />} />
                <Route
                  path="home-rtl/order-status-rtl"
                  element={<StatusRtl />}
                />
                <Route path="product-details" element={<ProductDetails />} />
                <Route
                  path="home-rtl/product-details-rtl"
                  element={<ProductDetailsRtl />}
                />
                <Route path="review-order" element={<ReviewOrder />} />
                <Route
                  path="home-rtl/review-order-rtl"
                  element={<ReviewOrderRtl />}
                />
                <Route path="review-order/checkout" element={<Checkout />} />
                <Route path="home-rtl/checkout-rtl" element={<CheckoutRtl />} />
                <Route
                  path="review-order/checkout/delivery-address"
                  element={<DeliveryAddress />}
                />
                <Route
                  path="home-rtl/delivery-address-rtl"
                  element={<DeliveryAddressRtl />}
                />
                <Route exact path="/home-rtl/menu-rtl" element={<MenuRtl />} />
                <Route path="home-rtl/delivery-rtl" element={<DeliveryRtl />} />
              </Routes>
            </div>
            <div className="col nav-bar pt-3 ">
              <Nav className="my-nav" />

              <Routes>
                <Route path="/home-rtl/:id" element={<NavRtl />} />
              </Routes>
            </div>
            <div className="col-lg-2 side-nav text-end position-sticky top-0">
              {" "}
              <ul className="list-unstyled">
                {" "}
                <li
                  className="menu-bar"
                  onClick={() => {
                    if (window.location.href.includes("home-rtl")) {
                      document
                        .querySelector(".canvas-rtl")
                        .classList.add("show");
                    } else {
                      document.querySelector(".canvas").classList.add("show");
                    }
                  }}
                  role="button"
                >
                  <GiHamburgerMenu className="fs-1" />
                </li>
                <li
                  className="fs-4 text-center ar bg-transparent"
                  onClick={() => {
                    if (window.location.href.includes("home-rtl")) {
                      document.querySelector(".home").style.direction = "rtl";
                      document.querySelector(".ul").style.display = "none";
                    }
                  }}
                >
                  <Link to="home-rtl/menu-rtl">العربية</Link>
                </li>{" "}
                <li
                  className="fs-4 text-center ar bg-transparent"
                  onClick={() => {
                    document.querySelector(".home").style.direction = "ltr";
                    window.location.reload();
                  }}
                >
                  <Link to="/">EN</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src={HomeImg} alt="home-img" className="home-img" />
    </Router>
  );
}

export default Home;
