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
              Providing Boarding & Day Care, Pet Spa & Grooming, Training (Basic and Advance Obedience), Vet Services and Toys, Accessories for your pets. You name it, we got it!
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
