import React from "react";

export default function Propertydet() {
  return (
    <div>
      <section
        className="pd-hero-section set-bg"
        data-setbg="img/properties/product-content-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="pd-hero-text">
                <p className="room-location">
                  <i className="icon_pin" /> 9721 Glen Creek Ave. Ballston Spa,
                  NY
                </p>
                <h2>Villa 9721 Glen Creek</h2>
                <div className="room-price">
                  <span>Start Form:</span>
                  <p>$3.000.000</p>
                </div>
                <ul className="room-features">
                  <li>
                    <i className="fa fa-arrows" />
                    <p>5201 sqft</p>
                  </li>
                  <li>
                    <i className="fa fa-bed" />
                    <p>8 Bed Room</p>
                  </li>
                  <li>
                    <i className="fa fa-bath" />
                    <p>7 Baths Bed</p>
                  </li>
                  <li>
                    <i className="fa fa-car" />
                    <p>1 Garage</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Property Details Hero Section Begin */}
      {/* Property Details Section Begin */}
      <section className="property-details-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="pd-details-text">
                <div className="pd-details-social">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-send" />
                  </a>
                  <a href="#">
                    <i className="fa fa-star" />
                  </a>
                  <a href="#">
                    <i className="fa fa-print" />
                  </a>
                  <a href="#">
                    <i className="fa fa-cloud-download" />
                  </a>
                </div>
                <div className="property-more-pic">
                  <div className="product-pic-zoom">
                    <img
                      className="product-big-img"
                      src="img/properties/property-details-b1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-thumbs">
                    <div className="product-thumbs-track ps-slider owl-carousel">
                      <div
                        className="pt"
                        data-imgbigurl="img/properties/property-details-b2.jpg"
                      >
                        <img src="img/properties/thumb-1.jpg" alt="" />
                      </div>
                      <div
                        className="pt active"
                        data-imgbigurl="img/properties/property-details-b1.jpg"
                      >
                        <img src="img/properties/thumb-2.jpg" alt="" />
                      </div>
                      <div
                        className="pt"
                        data-imgbigurl="img/properties/property-details-b3.jpg"
                      >
                        <img src="img/properties/thumb-3.jpg" alt="" />
                      </div>
                      <div
                        className="pt"
                        data-imgbigurl="img/properties/property-details-b4.jpg"
                      >
                        <img src="img/properties/thumb-4.jpg" alt="" />
                      </div>
                      <div
                        className="pt"
                        data-imgbigurl="img/properties/property-details-b5.jpg"
                      >
                        <img src="img/properties/thumb-5.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pd-desc">
                  <h4>Description</h4>
                  <p>
                    Learn how to improve your playing quality and even overall
                    understanding of online gaming and how you perform while
                    playing online. Gaming online is a huge business nowadays
                    and that means that there are millions of people worldwide
                    at online game sites all the time. Many are people just like
                    you and me that like to play online and have fun doing it.
                    Some of these people enjoy it so much, that they often do
                    not even care about improving their skill and raising their
                    chances of winning.
                  </p>
                </div>
                <div className="pd-details-tab">
                  <div className="tab-item">
                    <ul className="nav" role="tablist">
                      <li>
                        <a
                          className="active"
                          data-toggle="tab"
                          href="#tab-1"
                          role="tab"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab-2" role="tab">
                          Description
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#tab-3" role="tab">
                          Amenities
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-item-content">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade-in active"
                        id="tab-1"
                        role="tabpanel"
                      >
                        <div className="property-more-table">
                          <table className="left-table">
                            <tbody>
                              <tr>
                                <td className="pt-name">Price</td>
                                <td className="p-value">$ 138,000</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Property Type</td>
                                <td className="p-value">Villa</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Year Built</td>
                                <td className="p-value">2016</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Bathrooms</td>
                                <td className="p-value">3</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Rooms</td>
                                <td className="p-value">12</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Parking lots</td>
                                <td className="p-value">3</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Lot area</td>
                                <td className="p-value">200 spft</td>
                              </tr>
                            </tbody>
                          </table>
                          <table className="right-table">
                            <tbody>
                              <tr>
                                <td className="pt-name">Agent</td>
                                <td className="p-value">Adam Smith</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Reference</td>
                                <td className="p-value">#2019</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Contract type</td>
                                <td className="p-value">Sale</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Beds</td>
                                <td className="p-value">4</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Garages</td>
                                <td className="p-value">2</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Home area</td>
                                <td className="p-value">1200 sqft</td>
                              </tr>
                              <tr>
                                <td className="pt-name">Gara Size</td>
                                <td className="p-value">200 sqft</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-2" role="tabpanel">
                        <div className="pd-table-desc">
                          <p>
                            Learn how to improve your playing quality and even
                            overall understanding of online gaming and how you
                            perform while playing online. Gaming online is a
                            huge business nowadays and that means that there are
                            millions of people worldwide at online game sites
                            all the time. Many are people just like you and me
                            that like to play online and have fun doing it. Some
                            of these people enjoy it so much, that they often do
                            not even care about improving their skill and
                            raising their chances of winning.
                          </p>
                          <p>
                            Learn how to improve your playing quality and even
                            overall understanding of online gaming and how you
                            perform while playing online. Gaming online is a
                            huge business nowadays and that means that there are
                            millions of people worldwide at online game sites
                            all the time. Many are people just like you and me
                            that like to play online and have fun doing it. Some
                            of these people enjoy it so much, that they often do
                            not even care about improving their skill and
                            raising their chances of winning.
                          </p>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab-3" role="tabpanel">
                        <div className="pd-table-amenities">
                          <p>
                            Learn how to improve your playing quality and even
                            overall understanding of online gaming and how you
                            perform while playing online. Gaming online is a
                            huge business nowadays and that means that there are
                            millions of people worldwide at online game sites
                            all the time. Many are people just like you and me
                            that like to play online and have fun doing it. Some
                            of these people enjoy it so much, that they often do
                            not even care about improving their skill and
                            raising their chances of winning.
                          </p>
                          <p>
                            Learn how to improve your playing quality and even
                            overall understanding of online gaming and how you
                            perform while playing online. Gaming online is a
                            huge business nowadays and that means that there are
                            millions of people worldwide at online game sites
                            all the time. Many are people just like you and me
                            that like to play online and have fun doing it. Some
                            of these people enjoy it so much, that they often do
                            not even care about improving their skill and
                            raising their chances of winning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-map">
                  <h4>Map</h4>
                  <div className="map-inside">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5524090066037!2d-71.10245469994108!3d42.47980730490846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3748250c43a43%3A0xe1b9879a5e9b6657!2sWinter%20Street%20Public%20Parking%20Lot!5e0!3m2!1sen!2sbd!4v1577299251173!5m2!1sen!2sbd"
                      height={320}
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                    <div className="icon">
                      <i className="fa fa-home" />
                    </div>
                  </div>
                </div>
                <div className="property-contactus">
                  <h4>Contact Us</h4>
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="agent-desc">
                        <img src="img/properties/agent-contact.jpg" alt="" />
                        <div className="agent-title">
                          <h5>Adam Smith</h5>
                          <span>Saler Marketing</span>
                        </div>
                        <div className="agent-social">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                          <a href="#">
                            <i className="fa fa-envelope" />
                          </a>
                        </div>
                        <p>
                          In today’s net-savvy world it has become common for
                          any business to have a website which they use mostly
                          for advertising their products and services.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                      <form action="#" className="agent-contact-form">
                        <input type="text" placeholder="Name*" />
                        <input type="text" placeholder="Email" />
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
            <div className="col-lg-3">
              <div className="property-sidebar">
                <h4>Search Property</h4>
                <form action="#" className="sidebar-search">
                  <div className="sidebar-btn">
                    <div className="bt-item">
                      <input
                        type="radio"
                        name="s-type"
                        id="st-buy"
                        defaultChecked
                      />
                      <label htmlFor="st-buy">Buy</label>
                    </div>
                    <div className="bt-item">
                      <input type="radio" name="s-type" id="st-rent" />
                      <label htmlFor="st-rent">Rent</label>
                    </div>
                  </div>
                  <select>
                    <option value>Locations</option>
                  </select>
                  <select>
                    <option value>Status</option>
                  </select>
                  <select>
                    <option value>No of Bedroom</option>
                  </select>
                  <select>
                    <option value>No of Bathrooms</option>
                  </select>
                  <select>
                    <option value>No of Guest</option>
                  </select>
                  <div className="room-size-range">
                    <div className="price-text">
                      <label htmlFor="roomsizeRangeP">Size:</label>
                      <input type="text" id="roomsizeRangeP" readOnly />
                    </div>
                    <div id="roomsize-range-P" className="slider" />
                  </div>
                  <div className="price-range-wrap">
                    <div className="price-text">
                      <label htmlFor="priceRangeP">Price:</label>
                      <input type="text" id="priceRangeP" readOnly />
                    </div>
                    <div id="price-range-P" className="slider" />
                  </div>
                  <button type="submit" className="search-btn">
                    Search Property
                  </button>
                </form>
                <div className="best-agents">
                  <h4>Best Agents</h4>
                  <a href="#" className="ba-item">
                    <div className="ba-pic">
                      <img src="img/properties/best-agent-1.jpg" alt="" />
                    </div>
                    <div className="ba-text">
                      <h5>Lester Bradley</h5>
                      <span>Company Agents</span>
                      <p className="property-items">6 property </p>
                    </div>
                  </a>
                  <a href="#" className="ba-item">
                    <div className="ba-pic">
                      <img src="img/properties/best-agent-2.jpg" alt="" />
                    </div>
                    <div className="ba-text">
                      <h5>Janie Blair</h5>
                      <span>Company Agents</span>
                      <p className="property-items">6 property </p>
                    </div>
                  </a>
                  <a href="#" className="ba-item">
                    <div className="ba-pic">
                      <img src="img/properties/best-agent-3.jpg" alt="" />
                    </div>
                    <div className="ba-text">
                      <h5>Sophia Cole</h5>
                      <span>Marketing &amp; Ceo</span>
                      <p className="property-items">6 property </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Property Details Section End */}
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
