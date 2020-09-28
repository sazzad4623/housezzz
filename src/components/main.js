import React from "react";

export default function Main() {
  return (
    <div>
      {/* Header End */}
      {/* Hero Section Begin */}
      <section className="hero-section">
        <div className="hero-items owl-carousel">
          <div
            className="single-hero-item set-bg"
            data-setbg="img/hero/hero-1.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="hero-text">
                    <p className="room-location">
                      <i className="icon_pin" /> 9721 Glen Creek Ave. Ballston
                      Spa, NY
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
          </div>
          <div
            className="single-hero-item set-bg"
            data-setbg="img/hero/hero-2.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="hero-text">
                    <p className="room-location">
                      <i className="icon_pin" /> 9721 Glen Creek Ave. Ballston
                      Spa, NY
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
          </div>
          <div
            className="single-hero-item set-bg"
            data-setbg="img/hero/hero-3.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="hero-text">
                    <p className="room-location">
                      <i className="icon_pin" /> 9721 Glen Creek Ave. Ballston
                      Spa, NY
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
          </div>
        </div>
        <div className="thumbnail-pic">
          <div className="thumbs owl-carousel">
            <div className="item">
              <img src="img/hero/dot-1.jpg" alt="" />
            </div>
            <div className="item">
              <img src="img/hero/dot-2.jpg" alt="" />
            </div>
            <div className="item">
              <img src="img/hero/dot-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Search Form Section Begin */}
      <div className="search-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="search-form-text">
                <div className="search-text">
                  <i className="fa fa-search" />
                  Find Your Home
                </div>
                <div className="home-text">
                  <i className="fa fa-home" />
                  House For Sell
                </div>
              </div>
              <form action="#" className="filter-form">
                <div className="first-row">
                  <select>
                    <option value>Villa &amp; Pool</option>
                  </select>
                  <select>
                    <option value>Title</option>
                  </select>
                  <select>
                    <option value>Ani City</option>
                  </select>
                  <select>
                    <option value>Any Bithrooms</option>
                  </select>
                </div>
                <div className="second-row">
                  <select>
                    <option value>Any Bedrooms</option>
                  </select>
                  <div className="price-range-wrap">
                    <div className="price-text">
                      <label htmlFor="priceRange">Price:</label>
                      <input type="text" id="priceRange" readOnly />
                    </div>
                    <div id="price-range" className="slider" />
                  </div>
                  <div className="room-size-range">
                    <div className="price-text">
                      <label htmlFor="roomsizeRange">Size:</label>
                      <input type="text" id="roomsizeRange" readOnly />
                    </div>
                    <div id="roomsize-range" className="slider" />
                  </div>
                  <button type="button" className="search-btn">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Search Form Section End */}
      {/* How It Works Section Begin */}
      <section className="howit-works spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Find Your Dream House</span>
                <h2>How It Work</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-howit-works">
                <img src="img/howit-works/howit-works-1.png" alt="" />
                <h4>Search &amp; Find Apertment</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-howit-works">
                <img src="img/howit-works/howit-works-2.png" alt="" />
                <h4>Find Your Room</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-howit-works">
                <img src="img/howit-works/howit-works-3.png" alt="" />
                <h4>Talk To Agent</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section End */}
      {/* Feature Section Begin */}
      <section className="feature-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Listing From Our Agents</span>
                <h2>Featured Properties</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="feature-carousel owl-carousel">
              <div className="col-lg-4">
                <div className="feature-item">
                  <div
                    className="fi-pic set-bg"
                    data-setbg="img/feature/feature-1.jpg"
                  >
                    <div className="pic-tag">
                      <div className="f-text">feauture</div>
                      <div className="s-text">For Sale</div>
                    </div>
                    <div className="feature-author">
                      <div className="fa-pic">
                        <img src="img/feature/f-author-1.jpg" alt="" />
                      </div>
                      <div className="fa-text">
                        <span>Rena Simmons</span>
                      </div>
                    </div>
                  </div>
                  <div className="fi-text">
                    <div className="inside-text">
                      <h4>French Riviera Villa</h4>
                      <ul>
                        <li>
                          <i className="fa fa-map-marker" /> 180 York Road,
                          London, UK
                        </li>
                        <li>
                          <i className="fa fa-tag" /> Villa
                        </li>
                      </ul>
                      <h5 className="price">
                        $5900<span>/month</span>
                      </h5>
                    </div>
                    <ul className="room-features">
                      <li>
                        <i className="fa fa-arrows" />
                        <p>780 sqft</p>
                      </li>
                      <li>
                        <i className="fa fa-bed" />
                        <p>4</p>
                      </li>
                      <li>
                        <i className="fa fa-bath" />
                        <p>3</p>
                      </li>
                      <li>
                        <i className="fa fa-car" />
                        <p>2</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-item">
                  <div
                    className="fi-pic set-bg"
                    data-setbg="img/feature/feature-2.jpg"
                  >
                    <div className="pic-tag">
                      <div className="f-text">feauture</div>
                      <div className="s-text">For Sale</div>
                    </div>
                    <div className="feature-author">
                      <div className="fa-pic">
                        <img src="img/feature/f-author-2.jpg" alt="" />
                      </div>
                      <div className="fa-text">
                        <span>Rena Johnston</span>
                      </div>
                    </div>
                  </div>
                  <div className="fi-text">
                    <div className="inside-text">
                      <h4>French Riviera Villa</h4>
                      <ul>
                        <li>
                          <i className="fa fa-map-marker" /> 180 York Road,
                          London, UK
                        </li>
                        <li>
                          <i className="fa fa-tag" /> Villa
                        </li>
                      </ul>
                      <h5 className="price">
                        $5900<span>/month</span>
                      </h5>
                    </div>
                    <ul className="room-features">
                      <li>
                        <i className="fa fa-arrows" />
                        <p>780 sqft</p>
                      </li>
                      <li>
                        <i className="fa fa-bed" />
                        <p>4</p>
                      </li>
                      <li>
                        <i className="fa fa-bath" />
                        <p>3</p>
                      </li>
                      <li>
                        <i className="fa fa-car" />
                        <p>2</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-item">
                  <div
                    className="fi-pic set-bg"
                    data-setbg="img/feature/feature-3.jpg"
                  >
                    <div className="pic-tag">
                      <div className="f-text">feauture</div>
                      <div className="s-text">For Sale</div>
                    </div>
                    <div className="feature-author">
                      <div className="fa-pic">
                        <img src="img/feature/f-author-3.jpg" alt="" />
                      </div>
                      <div className="fa-text">
                        <span>Jonathan Walters</span>
                      </div>
                    </div>
                  </div>
                  <div className="fi-text">
                    <div className="inside-text">
                      <h4>French Riviera Villa</h4>
                      <ul>
                        <li>
                          <i className="fa fa-map-marker" /> 180 York Road,
                          London, UK
                        </li>
                        <li>
                          <i className="fa fa-tag" /> Villa
                        </li>
                      </ul>
                      <h5 className="price">
                        $5900<span>/month</span>
                      </h5>
                    </div>
                    <ul className="room-features">
                      <li>
                        <i className="fa fa-arrows" />
                        <p>780 sqft</p>
                      </li>
                      <li>
                        <i className="fa fa-bed" />
                        <p>4</p>
                      </li>
                      <li>
                        <i className="fa fa-bath" />
                        <p>3</p>
                      </li>
                      <li>
                        <i className="fa fa-car" />
                        <p>2</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-item">
                  <div
                    className="fi-pic set-bg"
                    data-setbg="img/feature/feature-4.jpg"
                  >
                    <div className="pic-tag">
                      <div className="f-text">feauture</div>
                      <div className="s-text">For Sale</div>
                    </div>
                    <div className="feature-author">
                      <div className="fa-pic">
                        <img src="img/feature/f-author-3.jpg" alt="" />
                      </div>
                      <div className="fa-text">
                        <span>Jonathan Walters</span>
                      </div>
                    </div>
                  </div>
                  <div className="fi-text">
                    <div className="inside-text">
                      <h4>French Riviera Villa</h4>
                      <ul>
                        <li>
                          <i className="fa fa-map-marker" /> 180 York Road,
                          London, UK
                        </li>
                        <li>
                          <i className="fa fa-tag" /> Villa
                        </li>
                      </ul>
                      <h5 className="price">
                        $5900<span>/month</span>
                      </h5>
                    </div>
                    <ul className="room-features">
                      <li>
                        <i className="fa fa-arrows" />
                        <p>780 sqft</p>
                      </li>
                      <li>
                        <i className="fa fa-bed" />
                        <p>4</p>
                      </li>
                      <li>
                        <i className="fa fa-bath" />
                        <p>3</p>
                      </li>
                      <li>
                        <i className="fa fa-car" />
                        <p>2</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="feature-item">
                  <div
                    className="fi-pic set-bg"
                    data-setbg="img/feature/feature-5.jpg"
                  >
                    <div className="pic-tag">
                      <div className="f-text">feauture</div>
                      <div className="s-text">For Sale</div>
                    </div>
                    <div className="feature-author">
                      <div className="fa-pic">
                        <img src="img/feature/f-author-3.jpg" alt="" />
                      </div>
                      <div className="fa-text">
                        <span>Jonathan Walters</span>
                      </div>
                    </div>
                  </div>
                  <div className="fi-text">
                    <div className="inside-text">
                      <h4>French Riviera Villa</h4>
                      <ul>
                        <li>
                          <i className="fa fa-map-marker" /> 180 York Road,
                          London, UK
                        </li>
                        <li>
                          <i className="fa fa-tag" /> Villa
                        </li>
                      </ul>
                      <h5 className="price">
                        $5900<span>/month</span>
                      </h5>
                    </div>
                    <ul className="room-features">
                      <li>
                        <i className="fa fa-arrows" />
                        <p>780 sqft</p>
                      </li>
                      <li>
                        <i className="fa fa-bed" />
                        <p>4</p>
                      </li>
                      <li>
                        <i className="fa fa-bath" />
                        <p>3</p>
                      </li>
                      <li>
                        <i className="fa fa-car" />
                        <p>2</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section End */}
      {/* Video Section Begin */}
      <div className="video-section set-bg" data-setbg="img/video-bg.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-text">
                <a
                  href="https://www.youtube.com/watch?v=EzKkl64rRbM"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-play" />
                </a>
                <h4>Find The Perfect</h4>
                <h2>Real Estate Agent Near You</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section End */}
      {/* Top Properties Section Begin */}
      <div className="top-properties-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="properties-title">
                <div className="section-title">
                  <span>Top Property For You</span>
                  <h2>Top Properties</h2>
                </div>
                <a href="#" className="top-property-all">
                  View All Property
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="top-properties-carousel owl-carousel">
            <div className="single-top-properties">
              <div className="row">
                <div className="col-lg-6">
                  <div className="stp-pic">
                    <img src="img/properties/properties-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="stp-text">
                    <div className="s-text">For Sale</div>
                    <h2>Villa 9721 Glen Creek</h2>
                    <div className="room-price">
                      <span>Start From:</span>
                      <h4>$3.000.000</h4>
                    </div>
                    <div className="properties-location">
                      <i className="icon_pin" /> 9721 Glen Creek Ave. Ballston
                      Spa, NY
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
            <div className="single-top-properties">
              <div className="row">
                <div className="col-lg-6">
                  <div className="stp-pic">
                    <img src="img/properties/properties-2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="stp-text">
                    <div className="s-text">For Sale</div>
                    <h2>Villa 9721 Glen Creek</h2>
                    <div className="room-price">
                      <span>Start From:</span>
                      <h4>$3.000.000</h4>
                    </div>
                    <div className="properties-location">
                      <i className="icon_pin" /> 9721 Glen Creek Ave. Ballston
                      Spa, NY
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
        </div>
      </div>
      {/* Top Properties Section End */}
      {/* Agent Section Begin */}
      <section className="agent-section spad">
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
      {/* Latest Blog Section Begin */}
      <section className="blog-section latest-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Blog &amp; Events</span>
                <h2>News Latest</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-blog-item">
                <div className="sb-pic">
                  <img src="img/blog/latest-1.jpg" alt="" />
                </div>
                <div className="sb-text">
                  <ul>
                    <li>
                      <i className="fa fa-user" /> Adam Smith
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> 18th Jan, 2019
                    </li>
                  </ul>
                  <h4>
                    <a href="#">Enhance Your Brand Potential With Giant.</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-blog-item">
                <div className="sb-pic">
                  <img src="img/blog/latest-2.jpg" alt="" />
                </div>
                <div className="sb-text">
                  <ul>
                    <li>
                      <i className="fa fa-user" /> Adam Smith
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> 18th Jan, 2019
                    </li>
                  </ul>
                  <h4>
                    <a href="#">Illustration In Marketing Materials</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-blog-item">
                <div className="sb-pic">
                  <img src="img/blog/latest-3.jpg" alt="" />
                </div>
                <div className="sb-text">
                  <ul>
                    <li>
                      <i className="fa fa-user" /> Adam Smith
                    </li>
                    <li>
                      <i className="fa fa-clock-o" /> 18th Jan, 2019
                    </li>
                  </ul>
                  <h4>
                    <a href="#">Branding Do You Know Who You Are</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blog Section End */}
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
      {/* Partner Carousel Section End */}
      {/* Footer Section Begin */}
    </div>
  );
}
