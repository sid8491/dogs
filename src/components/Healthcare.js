import React from "react";

function Healthcare() {
  return (
    <div>
      {/* {/* <!-- Jumbotron --> */}
      <div className="jumbotron jumbotron-fluid overlay">
        <div className="jumbo-heading">
          {/* <!-- section-heading --> */}
          <div className="section-heading" data-aos="zoom-in">
            <h1>Clinic & Healthcare</h1>
          </div>
          {/* <!-- /section-heading --> */}
          {/* <!-- Breadcrumbs --> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Clinic & Healthcare
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
                <h3>Clinic & Healthcare</h3>
                <p>
                  As human beings, your furry friend and loving pets also need
                  health check-ups from time to time, to make sure that
                  everything is all right with them. As they can not tell you
                  that they are not feeling well, so it becomes more important
                  to get them frequently visited to vet for check-ups. Frequent
                  vet visits, may significantly improve your dog’s health and
                  facilitate early diagnosis and treatment of issues which may
                  impact your dog’s health.
                </p>
                <p>
                  It is definitely not a good idea to skip the visit to the vet
                  as the dog’s age faster than humans. There may be health
                  concerns which may not be visible in one week, but if
                  aggravated, may become serious concerns in the next week. To
                  keep your pet healthy and happy, visit a vet regularly.
                </p>
                <p>
                  You may be a new pet owner or you may have shared a lot in
                  life with your canine pet. Vets at Working Dogs Club, Gurgoan are
                  your partner to keep your pet healthy and well. To enable them
                  to do this, they need to know your dog better and see him
                  regularly. Such visits will help them to recognize if
                  something is not normal and treat it immediately. Making
                  regular visits for check-ups will help build a relationship
                  between you, your dog and the vet, which will ensure a healthy
                  life for your pet.
                </p>
                <p>
                  <strong>Benefits of a regular vet visit</strong>
                </p>
                <p>
                  <ul className="custom pl-0">
                    <li>Detecting disease early on</li>
                    <li>
                      Vets at Working Dogs Club can put together a preventive health
                      plan for your dog which would include a plan for vaccines,
                      covering all essential requirements, making sure what
                      products are best for controlling fleas and intestinal
                      worms
                    </li>
                    <li>
                      Regular health check-up for dog’s weight and body
                      condition avoids dehydration
                    </li>
                    <li>
                      Diet planning to avoid obesity-related arthritis,
                      diabetes, and respiratory diseases
                    </li>
                    <li>
                      Helps discuss behavioral issues of your pet, like constant
                      barking, jumping on visitors etc. helps to diagnose the
                      causes
                    </li>
                    <li>
                      Senior pets can benefit immensely from regular vet
                      check-ups. Like humans, they may develop age-related
                      illnesses
                    </li>
                  </ul>
                </p>
                {/* <!-- ul custom--> */}
              </div>
              {/* <!-- /col-xl--> */}
              <div className="col-xl-6">
                <img
                  src="assets/img/healthcare1.jpg"
                  alt=""
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  className="img-fluid border-irregular1 border-double mb-5"
                />
                <img
                  src="assets/img/healthcare2.jpg"
                  alt=""
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  className="img-fluid border-irregular2 border-double mb-5"
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

export default Healthcare;
