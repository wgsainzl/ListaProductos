import { useState, useEffect } from "react";
import logo from "./Images/Farmacia.png";
import "./CSS/Styles.css";
import ProductList from "./ProductList";

function App() {
  return (
    <>
      <div className="DivTop">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="navbar">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="DivButton">
          <a href="tel:+628646444222" className="phone-btn">
            +62 864 6444 2222
          </a>
        </div>
      </div>

      <ProductList />
    </>
  );
}

export default App;
