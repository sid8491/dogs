import React from "react";

function About() {
  return (
    <div>
      {/* <!-- Section About Us  --> */}
      <section id="about" className="dog-bg1">
        <div className="container">
          <div className="section-heading text-center">
            <h2>About Us</h2>
          </div>
          {/* <!-- /Section-heading  --> */}
        </div>
        {/* <!-- /container  --> */}
        <div className="container block-padding pt-0">
          <div className="row">
            <div className="col-lg-6">
              <h3>Dr. Harinder Yant & Mr. Sonu Khatri</h3>
              {/* <p><strong>NAME OF OWNER</strong></p> */}
              <p>
                Dr. Harinder Yant is a radiologist (MBBS + MD) and Mr. Sonu
                Khatri is a sports personality. Both of them were very fond of
                dogs from the childhood. Opening this venture was their
                childhood dream and now that they have enough money from the
                savings & earnings, they have converted their love and care
                towards the dog into a profession, hence "Working Dog Club" is
                founded.
              </p>
              {/* <h6>Bullet points:</h6>
              <ul className="custom pl-0">
                <li>Lorem ipsum dolor</li>
                <li>consectetur adipiscing elit</li>
                <li>Nulla neque tellus</li>
                <li>Imac ipsum velit. Aenean id nunc lectus.</li>
                <li>Aenean id nunc lectus</li>
              </ul> */}
            </div>
            {/* <!-- image  --> */}
            <div className="col-lg-6">
              <img
                src="assets/img/about-us.png"
                alt=""
                className="img-fluid border-irregular1"
                data-aos="zoom-in"
                width="800"
                height="800"
              />
            </div>
          </div>
          {/* <!-- /row  --> */}
        </div>
        {/* <!-- /container  --> */}
        <div className="bg-light-custom block-padding">
          <div className="container">
            <div id="counter" className="row">
              {/* <!-- Counter  --> */}
              <div className="col-xl-3 col-md-6">
                <div className="counter">
                  <i className="counter-icon fa fa-users"></i>
                  {/* <!-- insert your final value on data-count=  --> */}
                  <div className="counter-value" data-count="10">
                    0
                  </div>
                  <h3 className="title">Happy Clients</h3>
                </div>
                {/* <!-- /counter  --> */}
              </div>
              {/* <!-- /col-lg  --> */}
              {/* <!-- Counter  --> */}
              <div className="col-xl-3 col-md-6">
                <div className="counter">
                  <i className="counter-icon flaticon-dog-in-front-of-a-man"></i>
                  {/* <!-- insert your final value on data-count=  --> */}
                  <div className="counter-value" data-count="6">
                    0
                  </div>
                  <h3 className="title">Professionals</h3>
                </div>
                {/* <!-- /counter  --> */}
              </div>
              {/* <!-- /col-lg  --> */}
              {/* <!-- Counter  --> */}
              <div className="col-xl-3 col-md-6">
                <div className="counter">
                  <i className="counter-icon flaticon-dog-2"></i>
                  {/* <!-- insert your final value on data-count=  --> */}
                  <div className="counter-value" data-count="30">
                    0
                  </div>
                  <h3 className="title">Adopted Pets</h3>
                </div>
                {/* <!-- /counter  --> */}
              </div>
              {/* <!-- /col-lg  --> */}
              {/* <!-- Counter  --> */}
              <div className="col-xl-3 col-md-6">
                <div className="counter">
                  <i className="counter-icon flaticon-prize-badge-with-paw-print"></i>
                  {/* <!-- insert your final value on data-count=  --> */}
                  <div className="counter-value" data-count="4">
                    0
                  </div>
                  <h3 className="title">Prizes</h3>
                </div>
                {/* <!-- /counter  --> */}
              </div>
              {/* <!-- /col-lg  --> */}
            </div>
            {/* <!-- /row  --> */}
          </div>
          {/* <!-- /container  --> */}
        </div>
        {/* <!-- /block-padding  --> */}

        {/* <!-- /container  --> */}
      </section>
      {/* <!-- / Section Ends  --> */}
    </div>
  );
}

export default About;
