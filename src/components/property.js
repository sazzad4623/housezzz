import React from "react";

export default function Property() {
  return (
    <div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5524090066037!2d-71.10245469994108!3d42.47980730490846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3748250c43a43%3A0xe1b9879a5e9b6657!2sWinter%20Street%20Public%20Parking%20Lot!5e0!3m2!1sen!2sbd!4v1577299251173!5m2!1sen!2sbd"
          height={500}
          style={{ border: 0 }}
          allowFullScreen
        />
        <div className="icon-list">
          <div className="icon icon-1">1</div>
          <div className="icon icon-2">2</div>
          <div className="icon icon-3">3</div>
          <div className="icon icon-4">4</div>
          <div className="icon icon-5">5</div>
        </div>
      </div>
      {/* Map Section End */}
      {/* Property Section Begin */}
      <section className="property-section spad">
        <div className="container">
          <div className="row">
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
            <div className="col-lg-9">
              <h4 className="property-title">Property</h4>
              <div className="property-list">
                <div className="single-property-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="property-pic">
                        <img src="img/properties/property-1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="property-text">
                        <div className="s-text">For Sale</div>
                        <h5 className="r-title">Villa 9721 Glen Creek</h5>
                        <div className="room-price">
                          <span>Start From:</span>
                          <h5>$3.000.000</h5>
                        </div>
                        <div className="properties-location">
                          <i className="icon_pin" /> 9721 Glen Creek Ave.
                          Ballston Spa, NY
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
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
                <div className="single-property-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="property-pic">
                        <img src="img/properties/property-2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="property-text">
                        <div className="s-text">For Sale</div>
                        <h5 className="r-title">Villa 9721 Glen Creek</h5>
                        <div className="room-price">
                          <span>Start From:</span>
                          <h5>$3.000.000</h5>
                        </div>
                        <div className="properties-location">
                          <i className="icon_pin" /> 9721 Glen Creek Ave.
                          Ballston Spa, NY
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
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
                <div className="single-property-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="property-pic">
                        <img src="img/properties/property-3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="property-text">
                        <div className="s-text">For Sale</div>
                        <h5 className="r-title">Villa 9721 Glen Creek</h5>
                        <div className="room-price">
                          <span>Start From:</span>
                          <h5>$3.000.000</h5>
                        </div>
                        <div className="properties-location">
                          <i className="icon_pin" /> 9721 Glen Creek Ave.
                          Ballston Spa, NY
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
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
                <div className="single-property-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="property-pic">
                        <img src="img/properties/property-4.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="property-text">
                        <div className="s-text">For Sale</div>
                        <h5 className="r-title">Villa 9721 Glen Creek</h5>
                        <div className="room-price">
                          <span>Start From:</span>
                          <h5>$3.000.000</h5>
                        </div>
                        <div className="properties-location">
                          <i className="icon_pin" /> 9721 Glen Creek Ave.
                          Ballston Spa, NY
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
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
              </div>
              <div className="property-pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Property Section End */}
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
