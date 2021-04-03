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
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Services 1
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
                  Aliquam erat volutpat In id fermentum augue, ut pellentesque
                  leo. Maecenas at arcu risus. Donec commodo sodales ex,
                  scelerisque laoreet nibh hendrerit id. In aliquet magna nec
                  lobortis maximus. Etiam rhoncus leo a dolor placerat, nec
                  elementum ipsum convall.
                </p>
                <p>
                  <strong>
                    Etiam rhoncus leo a dolor placerat, nec elementum ipsum
                    convall Maecenas at arcu risus scelerisque laoree.
                  </strong>
                </p>
                {/* <!-- ul custom--> */}
                <ul className="custom pl-0">
                  <li>Aliquam erat volut pat.</li>
                  <li>
                    Ibu lum orci eget, viverra elit liquam erat volut pat phas
                    ellus ac.
                  </li>
                  <li>Aliquam erat volut pat phas ellu</li>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer dictum malesuada.
                      </p>
                      <a className="btn btn-primary" href="services-single.html">
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
                    <h6>Pet Hotel</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer dictum malesuada.
                    </p>
                    <a className="btn btn-primary" href="services-single.html">
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
                    <h6>Veterinary 24/7</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer dictum malesuada.
                    </p>
                    <a className="btn btn-primary" href="services-single.html">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer dictum malesuada.
                    </p>
                    <a className="btn btn-primary" href="services-single.html">
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
              <a className="btn btn-primary" href="contact.html">
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
