import React from "react";

function EthicalBreeding() {
  return (
    <div>
      {/*  <!-- Jumbotron --> */}
      <div class="jumbotron jumbotron-fluid overlay">
        <div class="jumbo-heading">
          {/* <!-- section-heading --> */}
          <div class="section-heading" data-aos="zoom-in">
            <h1>Ethical Breeding</h1>
          </div>
          {/* <!-- /section-heading --> */}
          {/* <!-- Breadcrumbs --> */}
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Ethical Breeding
              </li>
            </ol>
          </nav>
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
                <h3>Breeding</h3>
                <p>
                  Breeding dogs has been a passion for people through many
                  centuries. It is combination of art, science, 100% devotion.
                  If done correctly, it will produce best bond between human and
                  the dog. It is challenging yet exciting.
                  <br />
                  The main purpose of breeding is to imrove the breed and
                  quality of the pet, not just increase its numbers.
                </p>
                <p>
                  We at Working Dog Club promotes{" "}
                  <strong>Ethical Breeding</strong>.
                </p>
                {/* <!-- ul custom--> */}
                <p>
                  We have extensive knowledge of the breed of dog we represent
                  and have years of experience with it. We consider the breed's
                  conformation, temperament, and history, and ensures that our
                  animals exhibit the desired physical and behavioural
                  characteristics. We endeavour to breed litters that will
                  flourish in their chosen careers, whether they are displaying,
                  hunting, working, or as pets. We take pride in our reputation
                  as a knowledgeable and useful resource for pet owners. We
                  carefully arrange our litters and provide medical attention to
                  both the parents and the puppies. We give puppies the proper
                  socialisation so they can succeed in the show ring, in
                  service, or as a family companion. We ensure that the housing
                  for their breeding dogs and puppies is clean, comfortable, and
                  safe as part of this.
                </p>
              </div>
              {/* <!-- /col-xl--> */}
              <div className="col-xl-6">
                <img
                  src="assets/img/breed.jpg"
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

          <div class="row mt-5">
            <div class="col-lg-12">
              <h4>We follow below guidelines for the breeding:</h4>

              <ul class="custom pl-0">
                <li>We follows the parent club’s Code of Ethics</li>
                <li>
                  We provides complete, accurate health records for the puppies
                </li>
                <li>
                  We provide results from genetic medical testing of the parents
                </li>
                <li>
                  We offer a written guarantee against genetic health problems
                </li>
                <li>We provide buyers with a four generation pedigree</li>
                <li>
                  We retain puppies until they are a minimum of nine weeks of
                  age
                </li>
                <li>
                  We encourage potential buyers to visit their home prior to the
                  pickup day
                </li>
                <li>
                  We ensures our puppies are exposed to other animals, new
                  people, children and noises
                </li>
                <li>
                  We provides puppies with a specific elimination area away from
                  the sleeping area
                </li>
                <li>
                  We encourages buyers to participate in puppy socialization
                  and/or basic obedience classes
                </li>
              </ul>
              {/* <!-- /ul --> */}
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

export default EthicalBreeding;
