import React from "react";

function Contact() {
  return (
    <div>
      {/*  <!-- Jumbotron --> */}
      <div class="jumbotron jumbotron-fluid overlay">
        <div class="jumbo-heading">
          {/* <!-- section-heading --> */}
          <div class="section-heading" data-aos="zoom-in">
            <h1>Contact Us</h1>
          </div>
          {/* <!-- /section-heading --> */}
          {/* <!-- Breadcrumbs --> */}
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
        {/* <!-- /jumbo-heading --> */}
      </div>
      {/* <!-- /jumbotron --> */}
      {/* <!-- ==== Page Content ==== --> */}
      <div class="page pb-0">
        <div class="container">
          <div class="row">
            {/* <!-- contact-info--> */}
            <div class="contact-info col-lg-5">
              <h4>Send us a message!</h4>
              {/* <!-- Form Starts --> */}
              <div id="contact_form">
                <div class="form-group">
                  <div class="row">
                    <div class="col-md-6">
                      <label>
                        Name<span class="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        class="form-control input-field"
                        required=""
                      />
                    </div>
                    <div class="col-md-6">
                      <label>
                        Email Adress <span class="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        class="form-control input-field"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        class="form-control input-field"
                      />
                    </div>
                    <div class="col-md-12">
                      <label>
                        Message<span class="required">*</span>
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        class="textarea-field form-control"
                        rows="3"
                        required=""
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit_btn"
                    value="Submit"
                    class="btn btn-primary"
                  >
                    Send message
                  </button>
                </div>
                {/* <!-- /form-group--> */}
                {/* <!-- Contact results --> */}
                <div id="contact_results"></div>
              </div>
              {/* <!-- /contact)form--> */}
            </div>
            {/* <!-- /contact-info--> */}
            <div class="col-lg-6 offset-lg-1 h-50 card bg-secondary res-margin ">
              <div class="contact-info text-light ">
                {/* <!-- contact-info--> */}
                <div class="text-light">
                  <h5>Information </h5>
                  <p>
                    Mei te apeirian omittantur reformidans, duo in appetere
                    interesset concludaturque. Est eruditi erroribus liberavisse
                    in.
                  </p>
                  {/* <!-- contact icons--> */}
                  <ul class="list-unstyled mt-5 list-contact">
                    <li class="h7">
                      <i class="fa fa-envelope margin-icon"></i>
                      <a href="mailto:dogs@dogsite.com">dogs@dogsite.com</a>
                    </li>
                    <li class="h7">
                      <i class="fa fa-phone margin-icon"></i>9255555513, 0130 2981622
                    </li>
                    <li class="h7">
                      <i class="fa fa-map-marker margin-icon"></i>Sector-65,
                      Gurgaon
                    </li>
                  </ul>
                  {/* <!-- /list--> */}
                </div>
                {/* <!-- /text-light --> */}
              </div>
              {/* <!-- /contact-info--> */}
            </div>
            {/* <!-- /col-lg--> */}
          </div>
          {/* <!-- /row--> */}
        </div>
        {/* <!-- /container --> */}
        {/* <!-- map--> */}
        {/* <div id="map-canvas" class="mt-5" data-aos="fade-down"></div> */}
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13962.00838009714!2d77.0687012!3d28.9724891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba086fb3c026624e!2sFIMS%20Hospital!5e0!3m2!1sen!2sin!4v1618473071370!5m2!1sen!2sin"
                width="100%"
                height="600"
                // style="border:0;"
                className="mt-5 border-irregular1"
                allowfullscreen=""
                loading="lazy"
                data-aos="fade-down"
                title="map"
              ></iframe>
      </div>
      {/* <!-- /page --> */}
    </div>
  );
}

export default Contact;
