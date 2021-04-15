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

function Behaviour() {
  return (
    <div>
      {/* {/* <!-- Jumbotron --> */}
      <div className="jumbotron jumbotron-fluid overlay">
        <div className="jumbo-heading">
          {/* <!-- section-heading --> */}
          <div className="section-heading" data-aos="zoom-in">
            <h1>Behaviour Training</h1>
          </div>
          {/* <!-- /section-heading --> */}
          {/* <!-- Breadcrumbs --> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Behaviour
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
                <h3>Training & Behaviour</h3>
                <p>
                  Our training methods are based on positive reinforcement
                  through out the puppy's and young dog's life. We start to add
                  slight pressure after the dog has reached maturity to polish
                  and sustain our training and commands.
                </p>
                <p>
                  <strong>
                    Having a trained dog isn’t the same as having a balanced
                    dog, but if your dog knows a few basic commands, it can be
                    very helpful when tackling problem behaviors — existing ones
                    or those that may develop in the future.
                  </strong>
                </p>
                {/* <!-- ul custom--> */}
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
              <p>
                <h3 className="text-center">Puppy Imprinting</h3>
              </p>
              <p>
                This starts at 6 weeks old and last one month. We Imprint the
                puppy for all the basic obedience commands.
              </p>
              <p>
                <h3 className="text-center">Show Training</h3>
              </p>
              <p>
                We train the dogs to win shows. Stacking and running are the
                basic commands taught
              </p>
              <p>
                <h3 className="text-center">Basic obedience Training</h3>
              </p>
              <p>
                We start this training with building communication with the dog.
                7 basic commands are taught. Sit, Stay, down, come, heel, no,
                kennel. For this training we first use positive reinforcement
                followed by the Modern day K9 training method. Time usually
                depends on the breed but between 1-2 Months.
              </p>
              <p>
                <h3 className="text-center">Advanced Obedience</h3>
              </p>
              <p>
                This consist of all the commands taught in the basic obedience
                along with off leash training. We can train the dog for any
                special commands required by the client. Time 2 months
              </p>
              ​
              <p>
                <h3 className="text-center">
                  Schutzhund/KNPV/MondioRing Dog sports
                </h3>
              </p>
              <p>
                Each sport has different levels. We only take on dogs that have
                the correct drive for sport and not all dogs do. If you with to
                have your dog trained and certified in any of the dog sports
                please contact us to discuss.
              </p>
              ​
              <p>
                <h3 className="text-center">
                  Personal, Family and Business Protection Training
                </h3>
              </p>
              <p>
                The training programme for our protection dogs is rigorous and
                not every dog can complete it. Like sports training we need to
                know the dog has the correct drives for the work ahead. The dog
                is trained to obey 15 commands at all times. Training takes
                10-15 months depending on the drive dog.
              </p>
              ​
              <p>
                <h3 className="text-center">Security and Guard Dog Training</h3>
              </p>
              <p>
                We train our guard and security dogs to the level of NASDU level
                2 which is the UK requirement for security dogs. The dogs are
                fully trained to search and hold a criminal. Attack on command,
                guard on command and advanced obedience.
              </p>
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

export default Behaviour;
