import React from "react";

function Footer() {
  return (
    <div>
      {/* <!-- ==== footer ==== --> */}
      <footer class="text-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <a class="navbar-brand" href="/">
                <i class="flaticon-dog-20"></i>
                <span>Woof!</span>
              </a>
              <p class="mt-3">
                Cras enim wisi elit aenean, amet eros curabitur. Wisi ad eget
                ipsum metus sociis Cras enim wisi elit aenean.
              </p>
            </div>
            {/* <!--/ col-lg --> */}
            <div class="col-lg-3">
              <h6>
                <i class="fas fa-envelope margin-icon"></i>Contact Us
              </h6>
              <ul class="list-unstyled">
                <li>(123) 456-789</li>
                <li>
                  <a href="mailto:email@yoursite.com">email@yoursite.com</a>
                </li>
                <li>Pet Street 123 - New York </li>
              </ul>
              {/* <!--/ul --> */}
            </div>
            {/* <!--/ col-lg --> */}
            <div class="col-lg-3">
              <h6>
                <i class="far fa-clock margin-icon"></i>Working Hours
              </h6>
              <ul class="list-unstyled">
                <li>Open 9am - 10pm</li>
                <li>Holidays - Closed</li>
                <li>Weekends - Closed</li>
              </ul>
              {/* <!--/ul --> */}
            </div>
            {/* <!--/ col-lg --> */}
          </div>
          {/* <!--/ row--> */}
          <div class="row">
            <div class="credits col-sm-12">
              <p>
                Copyright 2018 / Designed by{" "}
                <a href="/">Ingrid Kuhn</a>
              </p>
            </div>
          </div>
          {/* <!--/ row --> */}
        </div>
        {/* <!--/ container --> */}
        {/* <!-- Go To Top Link --> */}
        <div class="page-scroll hidden-sm hidden-xs">
          <a href="#top" class="back-to-top">
            <i class="fa fa-angle-up"></i>
          </a>
        </div>
        {/* <!--/page-scroll--> */}
      </footer>
      {/* <!--/ footer--> */}
    </div>
  );
}

export default Footer;
