import React from "react";

function About() {
  return (
    <div>
      {/* <!-- Jumbotron --> */}
      <div class="jumbotron jumbotron-fluid overlay">
        <div class="jumbo-heading">
          {/* <!-- section-heading --> */}
          <div class="section-heading" data-aos="zoom-in">
            <h1>About Us</h1>
          </div>
          {/* <!-- /section-heading --> */}
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                About us
              </li>
            </ol>
          </nav>
        </div>
        {/* <!-- /jumbo-heading --> */}
      </div>
      {/* <!-- /jumbotron --> */}
      {/* <!-- ==== Page Content ==== --> */}
      <div class="page">
        <div class="container block-padding pt-0">
          <div class="row">
            <div class="col-lg-5">
              <img
                src="assets/img/about1.jpg"
                alt=""
                class="img-fluid border-irregular2"
                data-aos="zoom-in"
              />
            </div>
            {/* <!--/col-lg--> */}
            <div class="col-lg-7 res-margin">
              <h3>Your pet deserve the best</h3>
              <p>
                We specialise in personal & family protection dogs, estate &
                business guard dogs, security patrol dogs, schutzhund, KNPV and
                mondio ring sport.
              </p>
              <p>
                <strong>
                  We train and supply personal protection dogs in India and
                  worldwide. <br />
                  Family/personal protection dogs in India are a fairly new
                  concept.
                </strong>
              </p>
              <p>
                Sicherheit K9 produce highly trained family protection dogs that
                are sociable and balanced and yet more than capable of
                protecting YOU and YOUR FAMILY against any threat or multiple
                threats. Our dogs are taught to fight through attacks from
                weapons such as batons, knives and guns.
              </p>
              <p>
                Our dogs obey all commands 99.9% of the time due to our rigorous
                training programme made by our master trainer K N Mac.{" "}
              </p>
              <p>
                People are now only starting to see the great benefit of owning
                a personal or family protection dog. The serious threat of crime
                is at our doorstep. Not only will a fully trained dog protect
                your family and premises/ business but would willingly give
                their life to protect yours.
              </p>
            </div>
            {/* <!-- /col-lg --> */}
          </div>
          {/* <!-- /row --> */}
          <div class="row mt-5">
            <div class="col-lg-7">
              <h4>At Protection Dogs India we train and provide:</h4>

              <ul class="custom pl-0">
                <li>Executive Protection Dogs</li>
                <li>Personal & Family Protection Dogs</li>
                <li>Security Patrol Dogs</li>
                <li>IPO/Schutzhund Dogs</li>
                <li>KNPV/Dutch Royal Police Dogs</li>
                <li>Sniffer Dogs</li>
                <li>Security K9 Handlers</li>
                <li>Working Line Puppies</li>
              </ul>
              {/* <!-- /ul --> */}
            </div>
            {/* <!-- /col-lg--> */}
            <div class="col-lg-5 res-margin">
              <div id="accordion" class="accordion-cards">
                {/* <!-- card 1--> */}
                <div class="card">
                  <div
                    class="card-header"
                    id="headingOne"
                    role="tablist"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    // aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <h6 class="mb-0">Our philosophy</h6>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Just like you, we consider our pets family and would do
                        anything for them. In fact, a shared love for dogs is
                        what propelled our founders, to launch a center, which
                        provided all services at a single place. We know how
                        hard it is to leave your pet in another’s care. That’s
                        why we built Working Dogs Club on a foundation of trust and
                        honesty, above all else. This begins with our team. We
                        carefully vet each of our team members with thorough
                        background checks, require at least one year of prior
                        pet care experience, and complete a thorough training
                        process along with bi-annual continuing education.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- card 2--> */}
                <div class="card">
                  <div
                    class="card-header"
                    id="headingTwo"
                    role="tablist"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    // aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h6 class="mb-0">Why Choose us?</h6>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        Your furry friend will always get his or her own
                        dedicated specialist, as we believe consistency is
                        crucial to a pet’s well being. We are a team of animal
                        lovers dedicated to providing reliable, convenient and
                        easily accessible pet care services.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- card 3--> */}
                <div class="card">
                  <div
                    class="card-header"
                    id="headingThree"
                    role="tablist"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    // aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h6 class="mb-0">Top quality products</h6>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      <p>
                        We at working Dogs Clubs provide best in class products
                        for the care of your pets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /acordion --> */}
            </div>
            {/* <!-- /col-lg --> */}
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}

        {/* <!--/call-to-action --> */}
        <div class="container bottom-block-padding">
          <div class="bg-light-custom card">
            <div class="row">
              <div class="col-xl-6">
                <h4>Caring for your pets since 2001</h4>
                <p>
                  Executives may need protection from workplace violence,
                  corporate heads may need to travel to dangerous or unstable
                  environments. Politicians and MLA's have constant threat from
                  opposition. Home invasions and robberies are ever present. No
                  matter the situation, Sicherheit Security Ltd has the
                  solutions and experience to provide reliable protection for
                  our clients globally.
                </p>
                <p>
                  We are India's leading specialists in detection and scent
                  dogs. We specialise in detection dogs for the following
                </p>
                <ul class="custom pl-0">
                  <li>Explosives</li>
                  <li>Narcotics/illegal substances</li>
                  <li>Tobacco</li>
                  <li>Cash</li>
                  <li>Live body detection</li>
                  <li>Disaster search & rescue (SAR)</li>
                </ul>
                {/* <!-- /ul --> */}
              </div>
              {/* <!-- /col-md --> */}
              <div class="col-xl-6">
                {/* <!-- embed video --> */}
                <div class="embed-responsive embed-responsive-4by3">
                  <iframe
                    title="iframe"
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/oVCtgAzQ99A"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              {/* <!-- /col-md --> */}
              <div class="col-xl-12">
                <p>
                  Our training programmes select and produce dogs that have
                  undeniable ability at detection and tracking. This is why we
                  are second to none in the field. Most of our K9 detection dogs
                  are dual purpose dogs and can be used for both security patrol
                  and detection.
                </p>
              </div>
            </div>
            {/* <!-- /row --> */}
          </div>
          {/* <!-- /card --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
      {/* <!-- /page --> */}
    </div>
  );
}

export default About;
