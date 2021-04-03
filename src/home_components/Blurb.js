import React from "react";

function Blurb() {
  return (
    <div>
      {/* <!-- Section Blurb  --> */}
      <section id="blurb" className="bg-primary text-light">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/* <!-- image   --> */}
              <img
                src="assets/img/blurbimg.png"
                className="img-fluid blurb-img"
                alt=""
              />
            </div>
            <div className="col-xl-4" data-aos="fade-down">
              <h2 className="res-margin">Join our club</h2>
              <p className="featured-text">
                Maecenas at arcu risus. Donec commodo sodales ex, scelerisque
                laoreet nibh hendrerit id. In aliquet magna nec lobortis
                maximus. Etiam rhoncus leo a dolor placerat, nec elementum
                ipsum.
              </p>
              {/* <!-- button  --> */}
              <a href="/contact" className="btn btn-primary">
                contact us
              </a>
            </div>
            {/* <!-- /col-lg  --> */}
          </div>
          {/* <!-- /row  --> */}
        </div>
        {/* <!-- /container  --> */}
      </section>
      {/* <!-- SVG effect  --> */}
      <svg
        id="bigTriangleColor"
        className="d-none d-sm-block"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100"
        viewBox="0 0 100 102"
        preserveAspectRatio="none"
      >
        <path d="M0 0 L50 100 L100 0 Z" />
      </svg>
      {/* <!-- / Section Ends  --> */}
    </div>
  );
}

export default Blurb;
