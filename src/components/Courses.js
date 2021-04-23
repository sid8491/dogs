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
            <h1>K9 Security Officers</h1>
          </div>
          {/* <!-- /section-heading --> */}
          {/* <!-- Breadcrumbs --> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                K9 Security Officers
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
                <h3>K9 Security Officers</h3>
                <p>
                  Buddy Pet’s K9 security officers are trained for security and
                  screening, including search and detection of intruders,
                  explosive materials and narcotics. The significant
                  contribution of K9 security to the maintenance of public
                  safety no longer needs to be proven. They are important and
                  highly trained members of our security and detection teams.
                </p>
                <p>
                  <strong>
                    A K9, cannot be bribed or lured, neither it can betray you,
                    if you are looking for 100% security of your premises, look
                    for a K9 security officer.
                  </strong>
                </p>
                {/* <!-- ul custom--> */}
                <p>
                  Our K9 detection team includes specially trained German
                  Shepherds, and Belgian Malinoisef. These search dogs, both
                  peaceful and proactive, are ideal for security, they help in
                  securing your office compound, factory units as well as
                  warehouses, arenas, shopping centres, nightclubs and any
                  locations where narcotics or explosives are a concern.
                </p>
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
