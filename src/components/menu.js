import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { FaChevronUp, FaRegCopyright } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import bread1 from "../images/bread/bread-1.jpg";
import bread2 from "../images/bread/bread-2.jpg";
import bread3 from "../images/bread/bread-3.jpg";
import bread4 from "../images/bread/bread-4.jpg";
import sandwich1 from "../images/sandwich/sandwich-1.jpg";
import sandwich2 from "../images/sandwich/sandwich-2.jpg";
import sandwich3 from "../images/sandwich/sandwich-3.jpg";
import sandwich4 from "../images/sandwich/sandwich-4.jpg";
import sandwich5 from "../images/sandwich/sandwich-5.jpg";
import pizza1 from "../images/pizza/pizza-1.jpg";
import pizza2 from "../images/pizza/pizza-2.jpg";
import pizza3 from "../images/pizza/pizza-3.jpg";
import pizza4 from "../images/pizza/pizza-4.jpg";
import pizza5 from "../images/pizza/pizza-5.jpg";
import wrap1 from "../images/wrap/wrap-1.jpg";
import wrap2 from "../images/wrap/wrap-2.jpg";
import wrap3 from "../images/wrap/wrap-3.jpg";
import wrap4 from "../images/wrap/wrap-4.jpg";
import sweet1 from "../images/sweet/sweet-1.jpg";
import sweet2 from "../images/sweet/sweet-2.jpg";
import sweet3 from "../images/sweet/sweet-3.jpg";
import sweet4 from "../images/sweet/sweet-4.jpg";
import sweet5 from "../images/sweet/sweet-5.jpg";
import sweet6 from "../images/sweet/sweet-6.jpg";
import sweet7 from "../images/sweet/sweet-7.jpg";
import sweet8 from "../images/sweet/sweet-8.jpg";
import sweet9 from "../images/sweet/sweet-9.jpg";
import sweet10 from "../images/sweet/sweet-10.jpg";
import snack1 from "../images/snack/snack-1.jpg";
import snack2 from "../images/snack/snack-2.jpg";
import snack3 from "../images/snack/snack-3.jpg";
import snack4 from "../images/snack/snack-4.jpg";
import snack5 from "../images/snack/snack-5.jpg";
import snack6 from "../images/snack/snack-6.jpg";
import brown1 from "../images/brown/brown-1.jpg";
import brown2 from "../images/brown/brown-2.jpg";
import brown3 from "../images/brown/brown-3.jpg";
import cook1 from "../images/cook/cook-1.jpg";
import cook2 from "../images/cook/cook-2.jpg";
import cook3 from "../images/cook/cook-3.jpg";
import cook4 from "../images/cook/cook-4.jpg";
import hot1 from "../images/hot/hot-1.jpg";
import hot2 from "../images/hot/hot-2.jpg";
import hot3 from "../images/hot/hot-3.jpg";
import cold1 from "../images/cold/cold-1.jpg";
import cold2 from "../images/cold/cold-2.jpg";
import cold3 from "../images/cold/cold-3.jpg";
import cold4 from "../images/cold/cold-4.jpg";
import "../css/menu.css";
function Menu() {
  const bread = [
    <img src={bread1} className="img img-fluid rounded-3" />,
    <img src={bread2} className="img img-fluid rounded-3" />,
    <img src={bread3} className="img img-fluid rounded-3" />,
    <img src={bread4} className="img img-fluid rounded-3" />,
  ];
  const sandwich = [
    <img src={sandwich1} className="img img-fluid rounded-3" />,
    <img src={sandwich2} className="img img-fluid rounded-3" />,
    <img src={sandwich3} className="img img-fluid rounded-3" />,
    <img src={sandwich4} className="img img-fluid rounded-3" />,
    <img src={sandwich5} className="img img-fluid rounded-3" />,
  ];
  const pizza = [
    <img src={pizza1} className="img img-fluid rounded-3" />,
    <img src={pizza2} className="img img-fluid rounded-3" />,
    <img src={pizza3} className="img img-fluid rounded-3" />,
    <img src={pizza4} className="img img-fluid rounded-3" />,
    <img src={pizza5} className="img img-fluid rounded-3" />,
  ];
  const wrap = [
    <img src={wrap1} className="img img-fluid rounded-3" />,
    <img src={wrap2} className="img img-fluid rounded-3" />,
    <img src={wrap3} className="img img-fluid rounded-3" />,
    <img src={wrap4} className="img img-fluid rounded-3" />,
  ];
  const sweet = [
    <img src={sweet1} className="img img-fluid rounded-3" />,
    <img src={sweet2} className="img img-fluid rounded-3" />,
    <img src={sweet3} className="img img-fluid rounded-3" />,
    <img src={sweet4} className="img img-fluid rounded-3" />,
    <img src={sweet5} className="img img-fluid rounded-3" />,
    <img src={sweet6} className="img img-fluid rounded-3" />,
    <img src={sweet7} className="img img-fluid rounded-3" />,
    <img src={sweet8} className="img img-fluid rounded-3" />,
    <img src={sweet9} className="img img-fluid rounded-3" />,
    <img src={sweet10} className="img img-fluid rounded-3" />,
  ];
  const snack = [
    <img src={snack1} className="img img-fluid rounded-3" />,
    <img src={snack2} className="img img-fluid rounded-3" />,
    <img src={snack3} className="img img-fluid rounded-3" />,
    <img src={snack4} className="img img-fluid rounded-3" />,
    <img src={snack5} className="img img-fluid rounded-3" />,
    <img src={snack6} className="img img-fluid rounded-3" />,
  ];
  const brown = [
    <img src={brown1} className="img img-fluid rounded-3" />,
    <img src={brown2} className="img img-fluid rounded-3" />,
    <img src={brown3} className="img img-fluid rounded-3" />,
  ];
  const cook = [
    <img src={cook1} className="img img-fluid rounded-3" />,
    <img src={cook2} className="img img-fluid rounded-3" />,
    <img src={cook3} className="img img-fluid rounded-3" />,
    <img src={cook4} className="img img-fluid rounded-3" />,
  ];
  const hot = [
    <img src={hot1} className="img img-fluid rounded-3" />,
    <img src={hot2} className="img img-fluid rounded-3" />,
    <img src={hot3} className="img img-fluid rounded-3" />,
  ];
  const cold = [
    <img src={cold1} className="img img-fluid rounded-3" />,
    <img src={cold2} className="img img-fluid rounded-3" />,
    <img src={cold3} className="img img-fluid rounded-3" />,
    <img src={cold4} className="img img-fluid rounded-3" />,
  ];
  const breadP = [
    <div className="col text-start">
      <h5>keto almond toast</h5>
      <p className="p-show">
        keto toast, approx.total wheight 400 gms- made of coconut and cheese
        (nutrients per piece: carb: 1g, fat: 16g, Protein:7g, Kcal:178)
      </p>
      <Link
        to="product-details"
        className="text-uppercase bg-transparent border-1 border-dark btn p-show"
      >
        kwd 3.750 <MdOutlineAddShoppingCart />
      </Link>
    </div>,
    <div className="col text-start">
      <h5>keto bread</h5>
      <p className="p-show">
        6 pieces of Keto bread, made of almond and sesame
      </p>
      <Link
        to="product-details"
        className="text-uppercase bg-transparent border-1 border-dark btn p-show"
      >
        kwd 2.000 <MdOutlineAddShoppingCart />
      </Link>
    </div>,
    <div className="col text-start">
      <h5>keto almond bread</h5>
      <p className="p-show">5 pieces of plain Almond Keto bread</p>
    </div>,
  ];

  return (
    <div className="menu position-relative text-capitalize">
      {" "}
      <div className="border-bottom row p-2">
        <div className="col text-start">
          <b>delivery</b>
        </div>
        <div className="col text-end">
          <Link to="order-mode" className="info-links">
            switch to car pickup <FiChevronRight />
          </Link>
        </div>
      </div>
      <div className="col border-bottom row p-2">
        <div className="col text-start">area</div>
        <div className="col text-end">
          <Link to="order-mode" className="info-links">
            abdullah al salem <FiChevronRight />
          </Link>
        </div>
      </div>
      <div className="col row pb-4 p-2">
        <div className="col text-start">scheduled time</div>
        <div className="col text-end">
          <Link to="delivery-time" className="info-links">
            today 8:00 aM - 9:00 aM <FiChevronRight />
          </Link>
        </div>
      </div>
      <div className="row p-2 bg-white">
        <input
          type="search"
          className="form-control search"
          placeholder="search"
        />
      </div>
      {/*********************************  Bread Section *********************/}
      <div className="row bg-row pt-2 m-0" id="bread">
        <div className="col row pb-3 p-2 text-secondary border-bottom position-sticky top-sticky bg-white">
          <div className="col text-start">
            <b>keto bread</b>
          </div>
        </div>
        {bread.map((img, index) => {
          return (
            <div className="row" key={index}>
              <div className="col row pb-3 p-2 border-bottom">
                {breadP[0]}
                <div className="col-md-3 img-order img-fluid"> {img}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/*********************************  Sandwich Section *********************/}
      <div className="row bg-row pt-2 m-0" id="sandwich">
        <div className="col row pb-3 p-2 text-secondary border-bottom position-sticky top-sticky bg-white">
          <div className="col text-start">
            <b>keto sandwich</b>
          </div>
          <div className="col text-end">
            <a href="#top" className="info-links">
              {" "}
              <FaChevronUp className="down-chevron fs-5" />
            </a>
          </div>
        </div>
        {sandwich.map((img, index) => {
          return (
            <div className="row" key={index}>
              <div className="col row pb-3 p-2 border-bottom">
                {breadP[1]}
                <div className="col-md-3 img-order"> {img}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/********************************* Pizza Section *********************/}
      <div className="row bg-row pt-2 m-0" id="pizza">
        <div className="col row pb-3 p-2 text-secondary border-bottom position-sticky top-sticky bg-white">
          <div className="col text-start">
            <b>keto pizza & fatayer</b>
          </div>
          <div className="col text-end">
            <a href="#top" className="info-links">
              {" "}
              <FaChevronUp className="down-chevron fs-5" />
            </a>
          </div>
        </div>
        {pizza.map((img, index) => {
          return (
            <div className="row" key={index}>
              <div className="col row pb-3 p-2 border-bottom">
                {breadP[2]}
                <div className="col-md-3 img-order"> {img}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/********************************* Wrap Section *********************/}
      <div className="row bg-row pt-2 m-0" id="wrap">
        <div className="col row pb-3 p-2 text-secondary border-bottom position-sticky top-sticky bg-white">
          <div className="col text-start">
            <b>keto wrap</b>
          </div>
          <div className="col text-end">
            <a href="#top" className="info-links">
              {" "}
              <FaChevronUp className="down-chevron fs-5" />
            </a>
          </div>
        </div>
        {wrap.map((img, index) => {
          return (
            <div className="row" key={index}>
              <div className="col row pb-3 p-2 border-bottom">
                {breadP[0]}
                <div className="col-md-3 img-order"> {img}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/********************************* sweet Section *********************/}
      <div className="row bg-row pt-2 m-0" id="sweet">
        <div className="col row pb-3 p-2 text-secondary border-bottom position-sticky top-sticky bg-white">
          <div className="col text-start">
            <b>keto sweet</b>
          </div>
          <div className="col text-end">
            <a href="#top" className="info-links">
              {" "}
              <FaChevronUp className="down-chevron fs-5" />
            </a>
          </div>
        </div>
        {sweet.map((img, index) => {
          return (
            <div className="row" key={index}>
              <div className="col row pb-3 p-2 border-bottom">
                {breadP[0]}
                <div className="col-md-3 img-order"> {img}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/********************************* Cook Section *********************/}
      <div className="row bg-row pt-2 m-0" id="cook">
        <div className="col row pb-3 p-2 text-secondary border-bottom position-sticky top-sticky bg-white">
          <div className="col text-start">
            <b>keto cook</b>
          </div>
          <div className="col text-end">
            <a href="#top" className="info-links">
              {" "}
              <FaChevronUp className="down-chevron fs-5" />
            </a>
          </div>
        </div>
        {cook.map((img, index) => {
          return (
            <div className="row" key={index}>
              <div className="col row pb-3 p-2 border-bottom">
                {breadP[0]}
                <div className="col-md-3 img-order"> {img}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/********************************* Snack Section *********************/}
      <div className="row bg-row pt-2 m-0" id="snack">
        <div className="col row pb-3 p-2 text-secondary border-bottom position-sticky top-sticky bg-white">
          <div className="col text-start">
            <b>keto snack</b>
          </div>
          <div className="col text-end">
            <a href="#top" className="info-links">
              {" "}
              <FaChevronUp className="down-chevron fs-5" />
            </a>
          </div>
        </div>
        {snack.map((img, index) => {
          return (
            <div className="row" key={index}>
              <div className="col row pb-3 p-2 border-bottom">
                {breadP[0]}
                <div className="col-md-3 img-order"> {img}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/********************************* Brown No Sugar Section *********************/}
      <div className="row bg-row pt-2 m-0" id="brown">
        <div className="col row pb-3 p-2 text-secondary border-bottom position-sticky top-sticky bg-white">
          <div className="col text-start">
            <b>keto brown no sugar</b>
          </div>
          <div className="col text-end">
            <a href="#top" className="info-links">
              {" "}
              <FaChevronUp className="down-chevron fs-5" />
            </a>
          </div>
        </div>
        {brown.map((img, index) => {
          return (
            <div className="row" key={index}>
              <div className="col row pb-3 p-2 border-bottom">
                {breadP[0]}
                <div className="col-md-3 img-order"> {img}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/********************************* Hot Drinks Section *********************/}
      <div className="row bg-row pt-2 m-0" id="hot">
        <div className="col row pb-3 p-2 text-secondary border-bottom position-sticky top-sticky bg-white">
          <div className="col text-start">
            <b>keto hot drinks</b>
          </div>
          <div className="col text-end">
            <a href="#top" className="info-links">
              {" "}
              <FaChevronUp className="down-chevron fs-5" />
            </a>
          </div>
        </div>
        {hot.map((img, index) => {
          return (
            <div className="row" key={index}>
              <div className="col row pb-3 p-2 border-bottom">
                {breadP[0]}
                <div className="col-md-3 img-order"> {img}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/********************************* cold Drinks Section *********************/}
      <div className="row bg-row pt-2 m-0" id="cold">
        <div className="col row pb-3 p-2 text-secondary border-bottom position-sticky top-sticky bg-white">
          <div className="col text-start">
            <b>keto cold drinks</b>
          </div>
          <div className="col text-end">
            <a href="#top" className="info-links">
              {" "}
              <FaChevronUp className="down-chevron fs-5" />
            </a>
          </div>
        </div>
        {cold.map((img, index) => {
          return (
            <div className="row" key={index}>
              <div className="col row pb-3 p-2 border-bottom">
                {breadP[0]}
                <div className="col-md-3 img-order"> {img}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col row text-capitalize copyright m-0 p-0 align-items-center text-center">
        {" "}
        <div>
          {" "}
          <FaRegCopyright /> powerd by{" "}
          <a
            href="https://www.google.com/"
            target="_blank"
            className="text-uppercase"
          >
            ez shop
          </a>
        </div>
      </div>{" "}
      <div className="col position-sticky bottom-0">
        {" "}
        <Link
          to="/review-order"
          className="p-2 buy-btn text-capitalize d-block text-center rounded border border-dark"
        >
          <b>review order</b> <span className="span">KWD 7.000</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
