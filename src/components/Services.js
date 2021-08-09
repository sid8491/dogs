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
      items: 3,
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
                  Just like you, we consider our pets family and would do
                  anything for them. In fact, a shared love for dogs is what
                  propelled our founders, to launch a center, which provided all
                  services at a single place. We know how hard it is to leave
                  your pet in another’s care. That’s why we built Working Dogs
                  Club on a foundation of trust and honesty, above all else.
                  This begins with our team. We carefully vet each of our team
                  members with thorough background checks, require at least one
                  year of prior pet care experience, and complete a thorough
                  training process along with bi-annual continuing education.
                  Your furry friend will always get his or her own dedicated
                  specialist, as we believe consistency is crucial to a pet’s
                  well being. We’re a team of pet lovers dedicated to providing
                  reliable, convenient and easily accessible pet care services.
                </p>
                <p>
                  <strong>Services provided by Working Dogs Club</strong>
                </p>
                {/* <!-- ul custom--> */}
                <ul className="custom pl-0">
                  <li>Pet Spa & Grooming</li>
                  <li>Training (Basic & Advance Obedience)</li>
                  <li>Boarding & Day Care</li>
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
                      <i className="flaticon-pet-shelter"></i>
                    </div>
                    {/* <!-- service content --> */}
                    <div className="service-content">
                      <h6>PET GROOMING SERVICES</h6>
                      <p>
                        We strive to make sure your pet is comfortable and happy
                        while grooming process, we want your pet to enjoy the
                        grooming process as much as they can and look forward to
                        its’ next visit
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
                      <i className="flaticon-people-1"></i>
                    </div>
                    {/* <!-- service content --> */}
                    <div className="service-content">
                      <h6>PET BOARDING & DAY CARE</h6>
                      <p>
                        Leave your worries aside. You and your pet will fall in
                        love with our facilities. We have highly trained staff
                        to take care of your little pet, we take care of your
                        pet, while you’re away
                      </p>
                      <a className="btn btn-primary" href="/services">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
                {/* </div> */}

                {/* <!-- service 6 --> */}
                <div className="col-md-12">
                  <div className="serviceBox">
                    {/* <!-- service icon --> */}
                    <div className="service-icon">
                      <i className="flaticon-dog-training-3"></i>
                    </div>
                    {/* <!-- service content --> */}
                    <div className="service-content">
                      <h6>PET TRAINING</h6>
                      <p>
                        We are having years of experience in professional level
                        Dog training, best in class, capable to train your PET
                        from basic training to advance obedience to make him
                        well trained
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
              <h3 className="text-center">Pet Spa & Grooming</h3>
            </p>
            <p>
              We know your dog is a part of your family and you want him/her to
              look clean, comfortable and smell nice. At Working Dogs Club,
              Sonipat, we strive to make sure your pet is comfortable and happy,
              we want your pet to enjoy the grooming process as much as they can
              and look forward to its’ next visit.
            </p>
            <p>
              A puppy’s first grooming session should be a relaxing and pleasant
              experience. This session is mainly to familiarize your puppy with
              the basics of the grooming process. It helps to create a positive
              grooming experience for your dog which will result in a pet that
              absolutely adores grooming in the future.
            </p>
            <p>
              <strong>Pet Spa & Grooming Services Includes:</strong>
              <ul className="custom pl-0 col-6">
                <li>Nail Trimming</li>
                <li>Ear Cleaning</li>
                <li>Pet Bathing</li>
                <li>Normal Bath</li>
                <li>Herbal Bath</li>
                <li>Anti Tick Bath</li>
                <li>Skin & Hair Bathing</li>
                <li>Hair Cutting</li>
                <li>Summer Hair Cut</li>
                <li>Hygience Hair Cut</li>
                <li>Facial Hair Cut</li>
              </ul>
            </p>
          </div>
        </div>
        <br />
        <div className="container bg-light-custom block-padding border-irregular1 dog-bg1">
          <div className="container block-padding pt-0">
            <p>
              <h3 className="text-center">
                Training (Basic & Advance Obedience)
              </h3>
            </p>
            <p>
              Whether you are looking for basic dog sitting lessons or advance
              obedience classes, Working Dogs Club Gurgaon has it all. We train
              your dog using various learning options because we understand that
              everyone dog has different learning needs and a one size fits all
              approach to dog training is not to the best interest of the dog
              owning.
            </p>
            <p>
              To give you peace of mind that you are in the hands of competent
              dog trainers, at Working Dogs Club, Gurgaon, we will only allow
              the best dog trainers to train and guide you and your dog.
            </p>
            <strong>Dog training lessons provided at Working Dogs Club</strong>
            <ul className="custom pl-0">
              <li>Dog Obedience Classes</li>
              <li>Puppy Training Classes</li>
              <li>Dog Behaviour Handling</li>
              <li>Dog Agility Classes</li>
              <li>Dog Security Training</li>
            </ul>

            <p>
              Based on several factors, such as age, breed, previous experiences
              and current behavior, trainers at Working Dogs Club, will be able
              to suggest the appropriate form and duration of training for your
              pet.
            </p>
            <p>
              Our trainers communicate openly and frequently with your pets to
              establish a rapport with them and create a conducive environment
              for learning. Your pet will also get an opportunity to socialize
              and mingle with other dogs. We train pets with consistency,
              patience, and positive reinforcement.
            </p>
          </div>
        </div>
        <br />
        <div className="container bg-light-custom block-padding border-irregular1 dog-bg2">
          <div className="container block-padding pt-0">
            <h3 className="text-center">Boarding & Day Care</h3>
            <p>
              When you need to go on any of your vacations, or maybe a short
              holiday on a long weekend, or have to attend any wedding of a
              relative or friends. Working Dogs Club comes to your rescue, we
              take care of your pet as one of our own. Leave your worries aside.
              You and your pet will fall in love with our facilities. We have
              highly trained staff to take care of your little pet. You can see
              their resting area, play area and also get to know the staff who
              will take care of them while you’re away.
            </p>
            <p>
              Working Dogs Club premises are cleaned every few hours to maintain
              hygiene, it’s completely safe, friendly for pets as well as lots
              of fun activities for Pets to do, while they are at Buddying Pets,
              we make your pets stay very enjoyable, with us. We understand that
              your pet may be anxious without you. Our pet-friendly staff
              actively socializes and put him/her at ease. The feeding time and
              diet are administered as per your instructions. Playtime, exercise
              time and feeding time are supervised for engagement.
            </p>
            <strong>
              Benefits of Day Care & Boarding With Working Dogs Club:
            </strong>
            <ul className="custom pl-0">
              <li>24-hour team of dog lovers</li>
              <li>Ready availability of Vet for care as required</li>
              <li>Regular Updates of Your Pet</li>
              <li>Pampering under specialized packages</li>
            </ul>
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
              <strong>
                While we’re good with smoke signals, there are simpler ways for
                us to get in touch.
              </strong>
              <p></p>
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
