import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>About Us</h2>
                <div className="breadcrumb-option">
                  <Link to="/">
                    {" "}
                    <a>
                      <i className="fa fa-home" /> Home
                    </a>
                  </Link>
                  <span>About Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>About Us</span>
                <h2>
                  Hello! Welcome to Azenta<span>.</span>
                </h2>
                <p>
                  There is no better advertisement campaign that is low cost and
                  also successful at the same time. Great business ideas when
                  utilized effectively can save lots of money. This is not only
                  easy for those who work full-time as an advertiser, but also
                  for those who work from home. Advertising from home is also a
                  low cost option, which involves making and distributing
                  fliers.
                </p>
              </div>
              <div className="video-text set-bg" data-setbg="img/video-bg.jpg">
                <a
                  href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-play" />
                </a>
                <h4>Find The Perfect</h4>
                <h2>Real Estate Agent Near You</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-text">
                    <h4>Our Story</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-text">
                    <h4>Our Vision</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Testimonial Section Begin */}
      <section
        className="testimonial-section set-bg spad"
        data-setbg="img/testimonial-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="testimonial-slider owl-carousel">
                <div className="ts-item">
                  <p>
                    Create a list with all possible keywords that fit to your
                    product, service or business field. The more the better. So
                    you will get also a lot of keywords which you mus pay for
                    only the minimal commandment of 5 cents
                  </p>
                  <div className="ti-author">
                    <h5>John Smith</h5>
                    <span>CEO deercreative</span>
                  </div>
                </div>
                <div className="ts-item">
                  <p>
                    Create a list with all possible keywords that fit to your
                    product, service or business field. The more the better. So
                    you will get also a lot of keywords which you mus pay for
                    only the minimal commandment of 5 cents
                  </p>
                  <div className="ti-author">
                    <h5>John Smith</h5>
                    <span>CEO deercreative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section End */}
      {/* Agent Section Begin */}
      <section className="agent-section about-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>We Are To Help You</span>
                <h2>Our Agents</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="agent-carousel owl-carousel">
              <div className="col-lg-3">
                <div className="single-agent">
                  <div className="sa-pic">
                    <img src="img/agent/agent-1.jpg" alt="" />
                    <div className="hover-social">
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className="instagram">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook" />
                      </a>
                    </div>
                  </div>
                  <h5>
                    Matthew Robbins <span>Founder &amp; Ceo</span>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-agent">
                  <div className="sa-pic">
                    <img src="img/agent/agent-2.jpg" alt="" />
                    <div className="hover-social">
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className="instagram">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook" />
                      </a>
                    </div>
                  </div>
                  <h5>
                    Tillie Burns <span>Marketing Manager</span>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-agent">
                  <div className="sa-pic">
                    <img src="img/agent/agent-3.jpg" alt="" />
                    <div className="hover-social">
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className="instagram">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook" />
                      </a>
                    </div>
                  </div>
                  <h5>
                    Derrick Lawson <span>Company Agents</span>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-agent">
                  <div className="sa-pic">
                    <img src="img/agent/agent-4.jpg" alt="" />
                    <div className="hover-social">
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className="instagram">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook" />
                      </a>
                    </div>
                  </div>
                  <h5>
                    Clifford Colon <span>Saler Manager</span>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-agent">
                  <div className="sa-pic">
                    <img src="img/agent/agent-5.jpg" alt="" />
                    <div className="hover-social">
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className="instagram">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook" />
                      </a>
                    </div>
                  </div>
                  <h5>
                    Clifford Colon <span>Saler Manager</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Agent Section End */}
      {/* Partner Carousel Section Begin */}
      <div className="partner-section">
        <div className="container">
          <div className="partner-carousel owl-carousel">
            <a href="#" className="partner-logo">
              <div className="partner-logo-tablecell">
                <img src="img/partner/partner-1.png" alt="" />
              </div>
            </a>
            <a href="#" className="partner-logo">
              <div className="partner-logo-tablecell">
                <img src="img/partner/partner-2.png" alt="" />
              </div>
            </a>
            <a href="#" className="partner-logo">
              <div className="partner-logo-tablecell">
                <img src="img/partner/partner-3.png" alt="" />
              </div>
            </a>
            <a href="#" className="partner-logo">
              <div className="partner-logo-tablecell">
                <img src="img/partner/partner-4.png" alt="" />
              </div>
            </a>
            <a href="#" className="partner-logo">
              <div className="partner-logo-tablecell">
                <img src="img/partner/partner-5.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
