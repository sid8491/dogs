import React from "react";

function Gallery() {
  return (
    <div style={{backgroundColor: "#f4f4f4"}}>
      {/*  {/* <!-- Jumbotron --> */}
      <div class="jumbotron jumbotron-fluid overlay">
        <div class="jumbo-heading">
          {/* <!-- section-heading --> */}
          <div class="section-heading" data-aos="zoom-in">
            <h1>Gallery</h1>
          </div>
          {/* <!-- /section-heading --> */}
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Gallery
              </li>
            </ol>
          </nav>
        </div>
        {/* <!-- /jumbo-heading --> */}
      </div>
      {/* <!-- /jumbotron --> */}
      {/* <!-- ==== Page Content ==== --> */}
      {/* <div class="page pb-0"> */}

      {/* <!-- Gallery --> */}
      <div className="row m-3">
        {/* Image 1 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (1).jpg"
              alt=""
              height="450px"
              width="450px"
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
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (2).jpg"
              alt=""
              height="450px"
              width="450px"
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
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (3).jpg"
              alt=""
              height="450px"
              width="450px"
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
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (4).jpg"
              alt=""
              height="450px"
              width="450px"
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
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (5).jpg"
              alt=""
              height="450px"
              width="450px"
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
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (6).jpg"
              alt=""
              height="450px"
              width="450px"
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
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (7).jpg"
              alt=""
              height="450px"
              width="450px"
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
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (8).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (8).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 9 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (9).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (9).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 10 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (10).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (10).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 11 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (11).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (11).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 12 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (12).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (12).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 13 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (13).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (13).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 14 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (14).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (14).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 15 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (15).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (15).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 16 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (16).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (16).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 17 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (17).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (17).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 18 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (18).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (18).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 19 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (19).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (19).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 20 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (20).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (20).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 21 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (21).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (21).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 22 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (22).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (22).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 23 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (23).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (23).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 24 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (24).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (24).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 25 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (25).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (25).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 26 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (26).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (26).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 27 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (27).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (27).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 28 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (28).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (28).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 29 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (29).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (29).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 30 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (30).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (30).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 31 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (31).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (31).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 32 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (32).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (32).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 33 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (33).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (33).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 34 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (34).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (34).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 35 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (35).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (35).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 36 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (36).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (36).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 37 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (37).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (37).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 38 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (38).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (38).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 39 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (39).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (39).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 40 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (40).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (40).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 41 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (41).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (41).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 42 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (42).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (42).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 43 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (43).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (43).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 44 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (44).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (44).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 45 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (45).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (45).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 46 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (46).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (46).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 47 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (47).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (47).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 48 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (48).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (48).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 49 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (49).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (49).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 50 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (50).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (50).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 51 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (51).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (51).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 52 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (52).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (52).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 53 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (53).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (53).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 54 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (54).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (54).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 55 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (55).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (55).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 56 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 mt-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular1"
              src="assets/img/gallery/gallery (56).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (56).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
        {/* Image 57 */}
        <div className="dogscats col-lg-3 col-sm-6 col-md-6 my-3">
          <div className="gallery-thumb">
            <img
              className="img-fluid border-irregular2"
              src="assets/img/gallery/gallery (57).jpg"
              alt=""
              height="450px"
              width="450px"
            />
            <a
              href="assets/img/gallery/gallery (57).jpg"
              title="You can add caption to pictures."
            >
              <span className="overlay-mask"></span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- /gallery-isotope--> */}
      {/* </div> */}
      {/* <!-- /page --> */}
    </div>
  );
}

export default Gallery;
