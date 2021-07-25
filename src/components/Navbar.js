import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav id="main-nav" className="navbar-expand-xl fixed-top">
        <div className="row">
          {/* <!-- Start Top Bar --> */}
          <div className="container-fluid top-bar">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* <!-- Start Contact Info --> */}
                  <ul className="contact-details float-left">
                    <li>
                      <i className="fa fa-map-marker"></i>Opp FIMS HOSPITAL
                      Delhi Bhalgarh Road Sonipat
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>
                      <a href="mailto:email@site.com">dogs@dogsite.com</a>
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>9255555513, 0130 2981622
                    </li>
                  </ul>
                  {/* <!-- End Contact Info --> */}
                  {/* <!-- Start Social Links --> */}
                  <ul className="social-list float-right list-inline">
                    <li className="list-inline-item">
                      <a title="Facebook" href="/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a title="Twitter" href="/" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a title="Instagram" href="/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                  {/* <!-- /End Social Links --> */}
                </div>
                {/* <!-- col-md-12 --> */}
              </div>
              {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
          </div>
          {/* <!-- End Top bar --> */}
          {/* <!-- Navbar Starts --> */}
          <div className="navbar container-fluid">
            <div className="container-fluid ">
              {/* <!-- logo --> */}
              <a className="navbar-brand" href="/">
                {/* <i className="flaticon-dog-20"></i> */}
                <span>
                  <img
                    src="Royal logo-03.png"
                    height="100"
                    width="200"
                    alt="logo"
                  ></img>
                </span>
              </a>
              {/* <!-- Navbartoggler --> */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggle-icon">
                  <i className="fas fa-bars"></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  {/* <!-- menu item --> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/food">
                      Food, Toys & Accessories
                    </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/healthcare">
                      Healthcare
                    </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/courses">
                      K9 Security
                    </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      id="others-dropdown"
                      data-toggle="dropdown"
                      // aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Other pages
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="others-dropdown"
                    >
                      <a className="dropdown-item" href="/">
                        Training and Behaviour
                      </a>
                      <a className="dropdown-item" href="/">
                        Sniffeer and Service Dogs
                      </a>
                      <a className="dropdown-item" href="/">
                        Dog Training Courses
                      </a>
                      <a className="dropdown-item" href="/">
                        Dogs for Films
                      </a>
                    </div>
                  </li> */}
                </ul>
                {/* <!--/ul --> */}
              </div>
              {/* <!--collapse --> */}
            </div>
            {/* <!-- /container --> */}
          </div>
          {/* <!-- /navbar --> */}
        </div>
        {/* <!--/row --> */}
      </nav>
      {/* <!-- /nav --> */}
    </div>
  );
}

export default Navbar;
