import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav id="main-nav" class="navbar-expand-xl fixed-top">
        <div class="row">
          {/* <!-- Start Top Bar --> */}
          <div class="container-fluid top-bar">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  {/* <!-- Start Contact Info --> */}
                  <ul class="contact-details float-left">
                    <li>
                      <i class="fa fa-map-marker"></i>Sector-65, Gurgaon
                    </li>
                    <li>
                      <i class="fa fa-envelope"></i>
                      <a href="mailto:email@site.com">dogs@dogsite.com</a>
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>+91 9876543210
                    </li>
                  </ul>
                  {/* <!-- End Contact Info --> */}
                  {/* <!-- Start Social Links --> */}
                  <ul class="social-list float-right list-inline">
                    <li class="list-inline-item">
                      <a title="Facebook" href="/" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a title="Twitter" href="/" target="_blank">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a title="Instagram" href="/" target="_blank">
                        <i class="fab fa-instagram"></i>
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
          <div class="navbar container-fluid">
            <div class="container ">
              {/* <!-- logo --> */}
              <a class="navbar-brand" href="index.html">
                <i class="flaticon-dog-20"></i>
                <span>Woof!</span>
              </a>
              {/* <!-- Navbartoggler --> */}
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggle-icon">
                  <i class="fas fa-bars"></i>
                </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  {/* <!-- menu item --> */}
                  <li class="nav-item active">
                        <Link class="nav-link" to="/">
                        Home
                        </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  <li class="nav-item">
                    <Link class="nav-link" to="/services">
                        Services
                    </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">
                        About
                    </Link>
                  </li>
                  {/* <!-- menu item --> */}
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/"
                      id="adopt-dropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Adopt
                    </a>
                    <div class="dropdown-menu" aria-labelledby="adopt-dropdown">
                      <a class="dropdown-item" href="adoption.html">
                        Adoption Gallery
                      </a>
                      <a class="dropdown-item" href="adoption-single.html">
                        Adoption Single Page
                      </a>
                    </div>
                  </li>
                  {/* <!-- menu item --> */}
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/"
                      id="gallery-dropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Gallery
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="gallery-dropdown"
                    >
                      <a class="dropdown-item" href="gallery.html">
                        Gallery Style 1
                      </a>
                      <a class="dropdown-item" href="gallery2.html">
                        Gallery Style 2
                      </a>
                    </div>
                  </li>
                  {/* <!-- menu item --> */}
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/"
                      id="contact-dropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Contact
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="contact-dropdown"
                    >
                      <a class="dropdown-item" href="contact.html">
                        Contact Style 1
                      </a>
                      <a class="dropdown-item" href="contact2.html">
                        Contact Style 2
                      </a>
                    </div>
                  </li>
                  {/* <!-- menu item --> */}
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/"
                      id="others-dropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Other pages
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="others-dropdown"
                    >
                      <a class="dropdown-item" href="team.html">
                        Our Team
                      </a>
                      <a class="dropdown-item" href="blog.html">
                        Blog Home
                      </a>
                      <a class="dropdown-item" href="blog-single.html">
                        Blog Single
                      </a>
                      <a class="dropdown-item" href="elements.html">
                        Elements Page
                      </a>
                      <a class="dropdown-item" href="404.html">
                        404 Page
                      </a>
                    </div>
                  </li>
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
