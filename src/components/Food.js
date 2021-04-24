import React from "react";

function Food() {
  return (
    <div>
      {/* {/* <!-- Jumbotron --> */}
      <div className="jumbotron jumbotron-fluid overlay">
        <div className="jumbo-heading">
          {/* <!-- section-heading --> */}
          <div className="section-heading" data-aos="zoom-in">
            <h1>Food, Toys & Accessories</h1>
          </div>
          {/* <!-- /section-heading --> */}
          {/* <!-- Breadcrumbs --> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Food, Toys & Accessories
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
                <h3>Food & Supplements</h3>
                <p>
                  At Working Dogs Club, we offer an array of dog food products,
                  specially formulated to meet your dog’s unique needs. Whether
                  you have a puppy, adult or senior dog, you want to avoid
                  grains or you prefer a natural dog food, we have something for
                  everyone and every dog.
                </p>
                <p>
                  <strong>Feed Your puppy properly</strong>
                </p>
                {/* <!-- ul custom--> */}
                <p>
                  This doesn’t just mean enough food, it entails a well-balanced
                  nutritional diet. You will notice that there are specifically
                  formulated dog food for puppies. The first year is the most
                  critical. Your puppy’s, teeth, muscles, bones, and even fur
                  will be growing rapidly. A puppy requires more daily calories
                  than a mature dog. Carefully read the product labels to ensure
                  your puppy digests the correct balance of fat and protein.
                </p>
                <p>
                  Also, stick to the recommended serving size and feeding
                  schedule. Don’t feed your puppy any table scraps, bones, or
                  big snacks between meals.
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

          <div className="container bg-light-custom block-padding border-irregular1 dog-bg3">
            <div className="container block-padding pt-0">
              <h3 className="text-center">Does my dog need vitamins?</h3>
              <div className="row">
                <div className="col-xl-12">
                  <p>
                    Most canine pets receive a balanced diet from the
                    commercially available dog food, as per their manufacturers.
                    Dogs who are fed a home-made diet may need supplements.
                    Supplements need to match the diet. Therefore, discuss with
                    the vet what you are giving your dog to eat and how
                    frequently, so that the appropriate supplements may be
                    advised. Or, none may be required.
                  </p>
                </div>
              </div>
              <br />
              <h3 className="text-center">
                Is there any side effect of giving vitamins to my pet?
              </h3>
              <div className="row">
                <div className="col-xl-12">
                  <p>
                    Only if the pet receives an excess proportion of a
                    particular vitamin or mineral, can it be harmful to the pet.
                    For instance, too much calcium can cause bone-related
                    problems, especially for big breeds. Too much vitamin A may
                    cause harm to blood vessels and cause dehydration leading to
                    joint pain. Over administration of vitamin D may cause the
                    dog to eat less, harm the bones and cause the body muscles
                    to atrophy.
                  </p>
                </div>
              </div>
              <br />
              <h3 className="text-center">
                Should I check with the vet before giving supplements?
              </h3>
              <div className="row">
                <div className="col-xl-12">
                  <p>
                    100% yes. There could be symptoms such as a dog with a weak
                    rear end, which may be misread for arthritis instead of it
                    really being a neurological problem. A poor coat may either
                    be due to skin infection or due to hormonal problems.
                    Ingredients of one supplement may counter-act with those in
                    other medicines. Your vet will be able to analyze whether
                    your pet needs a supplement or not.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="container block-padding pt-0">
            <div className="row paws-house-bg1">
              <div className="col-xl-6">
                <h3>Pet Accessories</h3>
                <p>
                  <strong>Collars and Leashes: </strong>
                </p>
                <p>
                  Collars; Leashes; Collar & Leash set; Harnesses; Chain and
                  choke collars; Retractable leashes; Nylon leashes; Leather
                  leashes; Muzzles; Pet tags
                </p>
                {/* <!-- ul custom--> */}
                <p>
                  <strong>Grooming products:</strong>
                </p>
                <p>
                  Cleaning solutions; Dental care; Ear care; Nail care; Pet hair
                  remover; Shampoos; Conditioners; Tick, Flea Control products;
                  Brushes and combs; De-shedding tools; Dry bath products;
                  Deodorants; Mouth fresheners; Powder; Soaps; Towels
                </p>
                <p>
                  <strong>Bowls:</strong>
                </p>
                <p>
                  Single Bowls; Combo bowls; Adjustable food bowl stands; Travel
                  bowls
                </p>
              </div>
              {/* <!-- /col-xl--> */}
              <div className="col-xl-6">
                <img
                  src="assets/img/accesories1.jpg"
                  alt=""
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  className="img-fluid border-irregular1 border-double mb-5"
                />
              </div>
            </div>
            {/* <!-- /row --> */}
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

export default Food;
