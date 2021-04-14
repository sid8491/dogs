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

function OurServices() {
  return (
    <div>
      {/* <!-- Section services  --> */}
      <section id="services" className="dog-bg2">
        <div className="container">
          <div className="section-heading text-center">
            {/* <h2>Our Services</h2> */}
          </div>
          {/* <!-- /Section-heading  --> */}
          <div className="container block-padding pt-0">
            <div className="row">
              <div className="col-xl-6">
                <h4>So you want to own a personal or family protection dog?</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer volutpat venenatis metus. Duis urna sem, efficitur sit
                  amet neque ac, suscipit accumsan libero. Ut in ultricies
                  lorem. Nam ac ipsum velit. Aenean id nunc lectus. Sed
                  hendrerit viverra arcu, eget congue est pellentesque vitae.
                  Vestibulum eu orci ante. Nulla neque tellus, imperdiet vitae
                  finibus vitae, egestas id dui.
                </p>
                <p>
                  <strong>
                    Here is a small checklist that you should read to see if you
                    are ready to own one of these extraordinary animals.
                  </strong>
                </p>
                {/* <!-- ul custom --> */}
                <ul className="custom pl-0">
                  <li>Do you have enough space for daily exercise?</li>
                  <li>Do you have at least 1 Hour a day to exercise?</li>
                  <li>
                    We feed our dogs raw meat, fruit (no grapes),vegetables,
                    eggs, oils. Can you provide 2 daily meals of the same
                    nutritional value?
                  </li>
                  <li>
                    We advise that dogs be sent back to us for a week, once to
                    twice a year to refresh the things they have learnt and to
                    add any further training necessary or required by the
                    client. Can you commit to this?
                  </li>
                  <li>
                    Do you have a kennel made ready or an area in the house that
                    can be used as the dogs area?
                  </li>
                  <li>
                    Can you offer 10-15 years of your life to these daily
                    routines?
                  </li>
                </ul>
              </div>
              {/* <!-- /col-xl --> */}
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
            <div>
              <p>
                <strong>
                  Now that you understand the responsibilities of owning a
                  protection dog, the next question is how much will one cost?
                </strong>
              </p>
              <p>
                We have posted some of our personal protection dogs available
                for sale in India, only. However we believe that a personal
                protection dog should not be chosen from a picture on a website.
                We need to find out what exactly your needs are, from your dog.
                After a discussion with you on the phone, we would then decide
                what dog would best meet your needs and send you all the
                information about that dog along with the cost. The delivered
                price anywhere in India for a fully trained personal protection
                dog ranges between 8 and 15 Lacs depending on the dogs training
                pedigree and location it has to travel to. That is only INR
                1,820 per day cost. A very small price to pay for your and your
                family's safety. And remember, unlike a bodyguard, your dog
                provides security 24 hours a day, 365 days a year. No vacations,
                no holidays, and no eavesdropping, just non-stop love and
                loyalty.
              </p>
            </div>
            {/* <!-- /row  --> */}
          </div>
          {/* <!-- /container  --> */}
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
                        The dogs that we train are fun loving, obedient and playful in nature
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
                        The dog will spend time with childresn, ignore other dogs/cats, and visit zoo
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
                        We train the pets to obey a variety of commands to make the pet helpful
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
                      Our dogs are trained rigorously to be fearsome defender of your family's lives
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
        {/* <!-- /container  --> */}
      </section>
      {/* <!-- / Section Ends  --> */}
    </div>
  );
}

export default OurServices;
