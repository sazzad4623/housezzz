import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer-section set-bg" data-setbg="img/footer-bg.jpg">
        <div className="container">
          <div className="footer-text">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <div className="logo">
                    <a href="#">
                      <img src="img/footer-logo.png" alt="" />
                    </a>
                  </div>
                  <p>
                    Subscribe our newsletter gor get notification about new
                    updates.
                  </p>
                  <form action="#" className="newslatter-form">
                    <input type="text" placeholder="Enter your email..." />
                    <button type="submit">
                      <i className="fa fa-location-arrow" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="footer-widget">
                  <h4>Property City</h4>
                  <ul>
                    <li>
                      <i className="fa fa-caret-right" />{" "}
                      <a href="#">Florida</a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />{" "}
                      <a href="#">New York</a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />{" "}
                      <a href="#">Washington</a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />{" "}
                      <a href="#">Los Angeles</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fa fa-caret-right" />{" "}
                      <a href="#">St Louis</a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />{" "}
                      <a href="#">Jacksonville</a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />{" "}
                      <a href="#">San Jose</a>
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />{" "}
                      <a href="#">San Diego</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <h4>Social</h4>
                  <ul className="social">
                    <li>
                      <i className="ti-facebook" /> <a href="#">Facebook</a>
                    </li>
                    <li>
                      <i className="ti-instagram" /> <a href="#">Instagram</a>
                    </li>
                    <li>
                      <i className="ti-twitter-alt" /> <a href="#">Twitter</a>
                    </li>
                    <li>
                      <i className="ti-google" /> <a href="#">Google+</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-widget">
                  <h4>Contact Us</h4>
                  <ul className="contact-option">
                    <li>
                      <i className="fa fa-map-marker" /> 16 Creek Ave. Farming,
                      NY
                    </li>
                    <li>
                      <i className="fa fa-phone" /> (+88) 666 121 4321
                    </li>
                    <li>
                      <i className="fa fa-envelope" /> info.colorlib@gmail.com
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> Mon - Sat, 08 AM - 06 PM
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-text">
            <p />
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="ti-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
            <p />
          </div>
        </div>
      </footer>
    </div>
  );
}
