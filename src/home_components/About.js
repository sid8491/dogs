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
              <h3>Some Heading</h3>
              <p><strong>NAME OF OWNER</strong></p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                volutpat venenatis metus. Duis urna sem, efficitur sit amet
                neque ac, suscipit accumsan libero. Ut in ultricies lorem. Nam
                ac ipsum velit. Aenean id nunc lectus. Sed hendrerit viverra
                arcu, eget congue est pellentesque vitae. Vestibulum eu orci
                ante. Nulla neque tellus, imperdiet vitae finibus vitae, egestas
                id dui.
              </p>
              {/* <p>
                Sicherheit K9 produce highly trained family protection dogs that
                are sociable and balanced and yet more than capable of
                protecting YOU and YOUR FAMILY against any threat or multiple
                threats. Our dogs are taught to fight through attacks from
                weapons such as batons, knives and guns.
              </p> */}
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                volutpat venenatis metus. Duis urna sem, efficitur sit amet
              </p>
              {/* <p>
                People are now only starting to see the great benefit of owning
                a personal or family protection dog. The serious threat of crime
                is at our doorstep. Not only will a fully trained dog protect
                your family and premises/ business but would willingly give
                their life to protect yours.
              </p> */}
              <h6>Bullet points:</h6>
              <ul className="custom pl-0">
                <li>Lorem ipsum dolor</li>
                <li>consectetur adipiscing elit</li>
                <li>Nulla neque tellus</li>
                <li>Imac ipsum velit. Aenean id nunc lectus.</li>
                <li>Aenean id nunc lectus</li>
              </ul>
              {/* <!-- /ul  --> */}
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
                  <div className="counter-value" data-count="1500">
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
                  <div className="counter-value" data-count="14">
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
                  <div className="counter-value" data-count="900">
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
                  <div className="counter-value" data-count="12">
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
