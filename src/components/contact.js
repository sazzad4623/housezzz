import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <section className="breadcrumb-section contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <h2>Contact Us</h2>
                <div className="breadcrumb-option">
                  <Link to="/">
                    <a>
                      <i className="fa fa-home" /> Home
                    </a>
                  </Link>
                  <span>Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section Begin */}
      {/* Contact Section Begin */}
      <section className="contact-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5524090066037!2d-71.10245469994108!3d42.47980730490846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3748250c43a43%3A0xe1b9879a5e9b6657!2sWinter%20Street%20Public%20Parking%20Lot!5e0!3m2!1sen!2sbd!4v1577299251173!5m2!1sen!2sbd"
                  height={700}
                  style={{ border: 0 }}
                  allowFullScreen
                />
                <div className="map-inside">
                  <i className="icon_pin" />
                  <div className="inside-widget">
                    <h4>New York</h4>
                    <ul>
                      <li>Phone: +12-345-6789</li>
                      <li>Add: 16 Creek Ave. Farmingdale, NY</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-7 offset-lg-1">
                  <div className="contact-text">
                    <div className="section-title">
                      <span>Contact</span>
                      <h2>Get In Touch</h2>
                    </div>
                    <form action="#" className="contact-form">
                      <input type="text" placeholder="Name" />
                      <input type="text" placeholder="Email" />
                      <input type="text" placeholder="Website" />
                      <textarea placeholder="Messages" defaultValue={""} />
                      <button type="submit" className="site-btn">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
      {/* Partner Carousel Section Begin */}
      <div className="partner-section contact-partner">
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

export default Contact;
