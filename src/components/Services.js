import React from "react";
import OwlCarousel from "react-owl-carousel";

const options = {
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left'></i>",
    "<i class='fa fa-chevron-right'></i>",
  ],
  dots: true,
  margin: 10,
  loop: false,
  autoplay: false,
  navRewind: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

function Services() {
  return (
    <div>
      {/* {/* <!-- Jumbotron --> */}
      <div className="jumbotron jumbotron-fluid overlay">
        <div className="jumbo-heading">
          {/* <!-- section-heading --> */}
          <div className="section-heading" data-aos="zoom-in">
            <h1>Our Services</h1>
          </div>
          {/* <!-- /section-heading --> */}
          {/* <!-- Breadcrumbs --> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Services
              </li>
            </ol>
          </nav>
          {/* <!-- /nav --> */}
        </div>
        {/* <!-- /jumbo-heading --> */}
      </div>
      {/* <!-- /jumbotron --> */}
      {/* <!-- ==== Page Content ==== --> */}
      <div className="page">
        <div className="container">
          <div className="container block-padding pt-0">
            <div className="row">
              <div className="col-xl-6">
                <h3>The best for your pet!</h3>
                <p>
                  We, at Working Dogs, take pride in knowing that we offer the
                  best in trained security patrol dogs and handlers in India.
                  Our dogs are trained rigorously along with one handler. They
                  are trained in intruder scent determination from upto a mile
                  away and will alert the security guard of the direction of the
                  intruder. All of our K9’s have undergone extensive training in
                  real world scenarios & situations to ensure they subdue any
                  threat they might come across. Along with this, they are more
                  than capable of dealing with crowd control and intruders with
                  weapons and even against gun fire. Rest assured, our K9 and
                  handler will secure your property or business, efficiently and
                  tirelessly. Cost of our fully trained K9 Handler and K9 start
                  from INR 45,000 per month.
                </p>
                <p>
                  <strong>Benefits of a Security Dog & Handler</strong>
                </p>
                {/* <!-- ul custom--> */}
                <ul className="custom pl-0">
                  <li>Can sense intruders over a mile away</li>
                  <li>Capable of holding off upto 15 attackers </li>
                  <li>
                    Trained to fight through gun fire and other deterrents{" "}
                  </li>
                  <li>As effective and efficient as 5 security guards</li>
                </ul>
              </div>
              {/* <!-- /col-xl--> */}
              <div className="col-xl-6">
                <img
                  src="assets/img/services2.png"
                  alt=""
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  className="img-fluid border-irregular1 border-double"
                />
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}

          {/* new service carasoul */}
          <div className="bg-light-custom block-padding border-irregular1">
            <div className="container owl-carousel owl-theme owl-loaded owl-drag">
              <OwlCarousel {...options}>
                {/* <div class="item"> */}
                {/* <!-- service 1  --> */}
                <div className="col-md-12">
                  <div className="serviceBox">
                    {/* <!-- service icon --> */}
                    <div className="service-icon">
                      <i className="flaticon-people-1"></i>
                    </div>
                    {/* <!-- service content --> */}
                    <div className="service-content">
                      <h6>Fun Activities</h6>
                      <p>
                        The dogs that we train are fun loving, obedient and
                        playful in nature
                      </p>
                      <a className="btn btn-primary" href="/services">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
                {/* </div> */}
                {/* <!-- service 2  --> */}
                <div className="col-md-12">
                  <div className="serviceBox">
                    {/* <!-- service icon --> */}
                    <div className="service-icon">
                      <i className="flaticon-pet-shelter"></i>
                    </div>
                    {/* <!-- service content --> */}
                    <div className="service-content">
                      <h6>Socialization</h6>
                      <p>
                        The dog will spend time with childresn, ignore other
                        dogs/cats, and visit zoo
                      </p>
                      <a className="btn btn-primary" href="/services">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
                {/* </div> */}
                {/* <!-- service 4 --> */}
                <div className="col-md-12">
                  <div className="serviceBox">
                    {/* <!-- service icon --> */}
                    <div className="service-icon">
                      <i className="flaticon-dog-with-first-aid-kit-bag"></i>
                    </div>
                    {/* <!-- service content --> */}
                    <div className="service-content">
                      <h6>Obedience</h6>
                      <p>
                        We train the pets to obey a variety of commands to make
                        the pet helpful
                      </p>
                      <a className="btn btn-primary" href="/services">
                        read more
                      </a>
                    </div>
                  </div>
                </div>

                {/* <!-- service 6 --> */}
                <div className="col-md-12">
                  <div className="serviceBox">
                    {/* <!-- service icon --> */}
                    <div className="service-icon">
                      <i className="flaticon-dog-training-3"></i>
                    </div>
                    {/* <!-- service content --> */}
                    <div className="service-content">
                      <h6>Training</h6>
                      <p>
                        Our dogs are trained rigorously to be fearsome defender
                        of your family's lives
                      </p>
                      <a className="btn btn-primary" href="/services">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          {/* end new service carasoul */}
        </div>
        <br />
        <div className="container bg-light-custom block-padding border-irregular1 dog-bg3">
          <div className="container block-padding pt-0">
            <p>
              <h3 className="text-center">Sichehreit K9 Mobile Patrol</h3>
            </p>
            <p>
              The core of our business is providing K9 support units and dog
              handler response units to our clients in India. We have
              experienced staff which have undergone extensive training with
              their K9 partners to ensure high quality services to our clients.
              Our K9 response handlers are ready for dispatch 24 hours a day. We
              operate for both residential and commercial clients.{" "}
            </p>
            <p>
              <h3 className="text-center">Event Security</h3>
            </p>
            <p>
              Sicherheit Security have years of experience in planning and
              management in event security We can support & provide the
              following:
              <ul className="custom pl-0">
                <li>Door Supervisors</li>
                <li>High Profile Personnel Security</li>
                <li>Access Control</li>
                <li>Crowd Control & Monitoring</li>
                <li>K9 drug and bomb detection</li>
              </ul>
            </p>
            <p>
              Our courses follow the NASDU (National association of security dog
              users) training coursework and practical assessments. We equip our
              students with the skills, knowledge and understanding to enable
              not only the safe handling of a working dog, but also how to
              extract the most benefit out of using a security or service K9.
            </p>
          </div>
        </div>
        {/* <!--/ container --> */}
        <div className="container bottom-block-padding">
          <div className="row">
            <div className="col-lg-5">
              {/* <!-- Image --> */}
              <img
                src="assets/img/services3.png"
                alt=""
                data-aos="fade-down"
                className="img-fluid"
              />
            </div>
            {/* <!--/ col-lg --> */}
            <div className="col-lg-7">
              <h4>Contact us today!</h4>
              <p>
                {" "}
                Maecenas at arcu risus. Donec commodo sodales, scelerisque
                laoreet nibh hendrerit id. In aliquet magna nec lobortis
                maximus. Etiam rhoncus leo a dolor placerat, nec elementum ipsum
                convall.
              </p>
              <p>
                <strong>
                  Etiam rhoncus leo a dolor placerat, nec elementum ipsum
                  convall Maecenas at arcu risus scelerisque laoree.
                </strong>
              </p>
              <a className="btn btn-primary" href="/contact">
                {" "}
                Contact us
              </a>
            </div>
            {/* <!--/col-lg  --> */}
          </div>
          {/* <!--/row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /page--> */}
    </div>
  );
}

export default Services;
