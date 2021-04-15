import React from "react";
// import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

function Gallery() {
  return (
    <div>
      {/* {/* <!-- Section: Gallery --> */}
      <section id="gallery" className="dog-bg1 bg-light pb-0">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Our Gallery</h2>
          </div>
          {/* <!-- /Section-heading --> */}
        </div>
        {/* <!-- /container --> */}
        {/* <!-- centered Gallery navigation --> */}
        {/* <ul className="nav nav-pills cat center-nav">
            <li className="nav-item">
               <a className="nav-link active" href="/" data-toggle="tab" data-filter="*">All</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/" data-toggle="tab" data-filter=".dogscats">Dogs and Cats</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="/" data-toggle="tab" data-filter=".other">Other Pets</a>
            </li>
         </ul> */}
        {/* <!-- /ul --> */}
        {/* <!-- Gallery --> */}
        <div className="ml-1">
          <div className="row">
            {/* Image 1 */}
            <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery (1).jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery (1).jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 1 */}
            <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery (2).jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery (2).jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 1 */}
            <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery (3).jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery (3).jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 1 */}
            <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery (4).jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery (4).jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 1 */}
            <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery (5).jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery (5).jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 1 */}
            <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery (6).jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery (6).jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 1 */}
            <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery (7).jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery (7).jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 1 */}
            <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery (8).jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery (8).jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-center pb-3">
            <a href="/gallery" className="btn btn-primary btn-lg text-center">
              See more...
            </a>
          </div>
        </div>

        {/* <!-- /gallery-isotope--> */}
      </section>
      {/* <!-- / Section Ends --> */}
    </div>
  );
}

export default Gallery;
