import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./main";
import Contact from "./contact";

export default function Navbar() {
  return (
    <div>
      <div id="preloder">
        <div className="loader" />
      </div>
      {/* Offcanvas Menu Section Begin */}
      <div className="offcanvas-menu-overlay" />
      <div className="canvas-open">
        <i className="icon_menu" />
      </div>
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="icon_close" />
        </div>
        <div className="language-bar">
          <div className="language-option">
            <img src="img/flag.png" alt="" />
            <span>English</span>
            <i className="fa fa-angle-down" />
            <div className="flag-dropdown">
              <ul>
                <li>
                  <a href="#">English</a>
                </li>
                <li>
                  <a href="#">Germany</a>
                </li>
                <li>
                  <a href="#">China</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="property-btn">
            <a href="#" className="property-sub">
              Submit Property
            </a>
          </div>
        </div>
        <nav className="main-menu">
          <ul>
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./property.html">Property</a>
            </li>
            <li>
              <a href="./about-us.html">Agets</a>
            </li>
            <li>
              <a href="./blog.html">News</a>
            </li>
            <li>
              <a href="./property-details.html">Pages</a>
            </li>
            <li>
              <Link to="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="nav-logo-right">
          <ul>
            <li>
              <i className="icon_phone" />
              <div className="info-text">
                <span>Phone:</span>
                <p>(+12) 345 6789</p>
              </div>
            </li>
            <li>
              <i className="icon_map" />
              <div className="info-text">
                <span>Address:</span>
                <p>
                  16 Creek Ave, <span>NY</span>
                </p>
              </div>
            </li>
            <li>
              <i className="icon_mail" />
              <div className="info-text">
                <span>Email:</span>
                <p>Info.cololib@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Offcanvas Menu Section End */}
      {/* Header Section Begin */}
      <header className="header-section">
        <div className="top-nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <nav className="main-menu">
                  <ul>
                    <li className="active">
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="./property.html">Property</a>
                    </li>
                    <li>
                      <a href="./about-us.html">Agets</a>
                    </li>
                    <li>
                      <a href="./blog.html">News</a>
                    </li>
                    <li>
                      <a href="./property-details.html">Pages</a>
                    </li>
                    <li>
                      <Link to="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-5">
                <div className="top-right">
                  <div className="language-option">
                    <img src="img/flag.png" alt="" />
                    <span>English</span>
                    <i className="fa fa-angle-down" />
                    <div className="flag-dropdown">
                      <ul>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Germany</a>
                        </li>
                        <li>
                          <a href="#">China</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a href="#" className="property-sub">
                    Submit Property
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-logo">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="nav-logo-right">
                  <ul>
                    <li>
                      <i className="icon_phone" />
                      <div className="info-text">
                        <span>Phone:</span>
                        <p>(+12) 345 6789</p>
                      </div>
                    </li>
                    <li>
                      <i className="icon_map" />
                      <div className="info-text">
                        <span>Address:</span>
                        <p>
                          16 Creek Ave, <span>NY</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <i className="icon_mail" />
                      <div className="info-text">
                        <span>Email:</span>
                        <p>Info.cololib@gmail.com</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
