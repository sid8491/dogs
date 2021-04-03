import React from "react";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'

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
               <a className="nav-link active" href="#" data-toggle="tab" data-filter="*">All</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#" data-toggle="tab" data-filter=".dogscats">Dogs and Cats</a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#" data-toggle="tab" data-filter=".other">Other Pets</a>
            </li>
         </ul> */}
        {/* <!-- /ul --> */}
        {/* <!-- Gallery --> */}
        <div className="ml-1">
          <div className="row">
            {/* Image 1 */}
            <div className="dogscats col-lg-3 col-sm-6 col-md-6">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery1.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery1.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 2 */}
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery2.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery2.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 2 */}
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery2.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery2.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 2 */}
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery2.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery2.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 2 */}
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery2.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery2.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
            {/* Image 2 */}
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery2.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery2.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="gallery-isotope" className="mt-5">
          {/* <!-- Image 1 --> */}
          <div className="dogscats col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery1.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery1.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 2 --> */}
          <div className="other col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery2.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery2.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 3 --> */}
          <div className="other col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery3.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery3.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 4 --> */}
          <div className="dogscats col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery4.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery4.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 5 --> */}
          <div className="dogscats col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery5.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery5.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 6 --> */}
          <div className="dogscats col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery6.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery6.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 7 --> */}
          <div className="dogscats col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery7.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery7.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 8 --> */}
          <div className="other col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery8.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery8.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 9 --> */}
          <div className="other col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery9.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery9.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 10 --> */}
          <div className="dogscats col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery10.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery10.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 11 --> */}
          <div className="other col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery11.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery11.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Image 12 --> */}
          <div className="dogscats col-lg-3 col-sm-6 col-md-6">
            <div className="isotope-item">
              <div className="gallery-thumb">
                <img
                  className="img-fluid"
                  src="assets/img/gallery/gallery12.jpg"
                  alt=""
                />
                <a
                  href="assets/img/gallery/gallery12.jpg"
                  title="You can add caption to pictures."
                >
                  <span className="overlay-mask"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /gallery-isotope--> */}
      </section>
      {/* <!-- / Section Ends --> */}
    </div>
  );
}

export default Gallery;
