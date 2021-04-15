import React from "react";
// import OwlCarousel from "react-owl-carousel";

// const options = {
//   nav: true,
//   navText: [
//     "<i class='fa fa-chevron-left'></i>",
//     "<i class='fa fa-chevron-right'></i>",
//   ],
//   dots: true,
//   margin: 10,
//   loop: false,
//   autoplay: false,
//   navRewind: true,
//   responsiveClass: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     400: {
//       items: 1,
//     },
//     600: {
//       items: 2,
//     },
//     700: {
//       items: 3,
//     },
//     1000: {
//       items: 4,
//     },
//   },
// };

function Courses() {
  return (
    <div>
      {/* {/* <!-- Jumbotron --> */}
      <div className="jumbotron jumbotron-fluid overlay">
        <div className="jumbo-heading">
          {/* <!-- section-heading --> */}
          <div className="section-heading" data-aos="zoom-in">
            <h1>Training Courses</h1>
          </div>
          {/* <!-- /section-heading --> */}
          {/* <!-- Breadcrumbs --> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Courses
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
            <div className="row paws-house-bg1">
              <div className="col-xl-6">
                <h3>Dog training courses in India</h3>
                <p>
                  we provided accredited and practically applied dog training
                  courses. We offer a number of courses for various
                  specialization and basic training of your canine. After
                  completion of each course, a certification of completion is
                  awarded for the training from the master trainer. The
                  certificate is valid internationally.
                </p>
                <p>
                  <strong>Following are some courses we offer :</strong>
                </p>
                {/* <!-- ul custom--> */}
                <ul className="custom pl-0">
                  <li>Introduction to Dog Training (Basic)</li>
                  <li>Advanced K9 training</li>
                  <li>Sports Courses (Schutzhund, KNPV & Mondio Ring)</li>
                  <li>Scent discrimination & Tracking course</li>
                  <li>Security K9 handler course</li>
                  <li>Family & Personal protection dog training course</li>
                  <li>Imprinting</li>
                </ul>
              </div>
              {/* <!-- /col-xl--> */}
              <div className="col-xl-6">
                <img
                  src="assets/img/services2.png"
                  alt=""
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  className="img-fluid border-irregular1 border-double mb-5"
                />
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /container --> */}

          <div className="container bg-light-custom block-padding border-irregular1 dog-bg3">
            <div className="container block-padding pt-0">
              <h3 className="text-center">
                Introduction to Dog Training (Basic)
              </h3>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="custom pl-0">
                    <li>Raising a puppy</li>
                    <li>Household obedience</li>
                    <li>Toilet training</li>
                    <li>Imprinting</li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="custom pl-0">
                    <li>Communicating with family members</li>
                    <li>Basic K9 behaviour</li>
                    <li>7 commands </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div className="container bg-light-custom block-padding border-irregular1">
            <div className="container block-padding pt-0">
              <h3 className="text-center">Advanced K9 training</h3>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="custom pl-0">
                    <li>Basic (Module I)</li>
                    <li>Modern day techniques of dog training</li>
                    <li>Advanced commands off leash</li>
                  </ul>
                  <strong>5 day course @ Rs.24,900/-</strong>
                </div>
                <div className="col-xl-6">
                  <ul className="custom pl-0"></ul>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="container bg-light-custom block-padding border-irregular1 dog-bg1">
            <div className="container block-padding pt-0">
              <h3 className="text-center">
                Sports Courses (Schutzhund, KNPV & Mondio Ring)
              </h3>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="custom pl-0">
                    <li>
                      Learn to train any dog for the above sports competitions
                    </li>
                  </ul>
                  <strong>
                    Each course duration is 15 days @ Rs.89,000 each.
                  </strong>
                </div>
                <div className="col-xl-6">
                  <ul className="custom pl-0"></ul>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="container bg-light-custom block-padding border-irregular1">
            <div className="container block-padding pt-0">
              <h3 className="text-center">
                Scent discrimination & Tracking course
              </h3>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="custom pl-0">
                    <li>Imprinting for tracking and scent work</li>
                    <li>Scent detection for Narcotics and other contraband </li>
                    <li>SAR (search and Rescue) Tracking</li>
                    <li>Live body search</li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="custom pl-0"></ul>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="container bg-light-custom block-padding border-irregular1 dog-bg2">
            <div className="container block-padding pt-0">
              <h3 className="text-center">Security K9 handler course</h3>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="custom pl-0">
                    <li>First Aid</li>
                    <li>Security Patrol</li>
                    <li>Search & detain criminal</li>
                    <li>Removing criminal from property</li>
                    <li>Learning behavioural signals from your K9</li>
                  </ul>
                  <strong>Proper upkeep of your security dog</strong>
                  <br />
                  <strong>3 day course @ Rs.39,500/-</strong>
                </div>
                <div className="col-xl-6">
                  <ul className="custom pl-0"></ul>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="container bg-light-custom block-padding border-irregular1">
            <div className="container block-padding pt-0">
              <h3 className="text-center">
                Family & Personal protection dog training course
              </h3>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="custom pl-0">
                    <li>Selecting and raising a puppy for protection work</li>
                    <li>Training a young dog into an elite protection dog. </li>
                    <li>On & Off leash training</li>
                    <li>Canine behaviour with family members and children</li>
                    <li>32 command list</li>
                  </ul>
                </div>
                <div className="col-xl-6">
                  <ul className="custom pl-0"></ul>
                </div>
              </div>
            </div>
          </div>
          <br />

          {/* end new service carasoul */}
        </div>
        {/* <!--/ container --> */}
        <div className="container bottom-block-padding">
          <div className="row">
            <div className="col-lg-5">
              {/* <!-- Image --> */}
              <img
                src="assets/img/about2.png"
                alt=""
                data-aos="fade-down"
                className="img-fluid rounded hover-opacity"
              />
            </div>
            {/* <!--/ col-lg --> */}
            <div className="col-lg-7">
              <h4>Contact us today!</h4>
              <p>
                <strong>
                  While we’re good with smoke signals, there are simpler ways
                  for us to get in touch.
                </strong>
              </p>
              <a className="btn btn-primary" href="/contact">
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

export default Courses;
