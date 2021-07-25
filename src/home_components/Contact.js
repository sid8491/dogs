import React from "react";

function Contact() {
  return (
    <div>
      {/* <!-- Section Contact  --> */}
      <section id="contact" className="dog-bg2">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Contact Us</h2>
          </div>
          {/* <!-- /Section-heading  --> */}
        </div>
        {/* <!-- /container  --> */}
        <div className="container">
          <div className="row">
            {/* <!-- contact info  --> */}
            <div className="contact-info col-lg-5 card bg-light-custom">
              <h4>Send us a message!</h4>
              {/* <!-- Form Starts  --> */}
              <div id="contact_form">
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label>
                        Name<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control input-field"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <label>
                        Email Adress <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control input-field"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control input-field"
                      />
                    </div>
                    <div className="col-md-12">
                      <label>
                        Message<span className="required">*</span>
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="textarea-field form-control"
                        rows="3"
                        required=""
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit_btn"
                    value="Submit"
                    className="btn btn-primary"
                  >
                    Send message
                  </button>
                </div>
                {/* <!-- Contact results  --> */}
                <div id="contact_results"></div>
              </div>
            </div>
            <div className="col-lg-7">
              {/* <!-- map --> */}
              {/* <div id="map-canvas" className="mt-3 border-irregular1"></div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13962.00838009714!2d77.0687012!3d28.9724891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba086fb3c026624e!2sFIMS%20Hospital!5e0!3m2!1sen!2sin!4v1618473071370!5m2!1sen!2sin"
                width="100%"
                height="100%"
                // style="border:0;"
                className="mt-3 border-irregular2"
                allowfullscreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </div>
            {/* <!-- /col-lg --> */}
          </div>
          {/* <!-- /row --> */}
          <div className="row res-margin mt-5">
            <div className="col-lg-6 mt-5">
              <div className="contact-icon">
                {/* <!---icon --> */}
                <i className="fa fa-envelope top-icon"></i>
                {/* <!-- contact-icon info --> */}
                <div className="contact-icon-info">
                  <h5>Send us a Message</h5>
                  <p className="h7">
                    <a href="mailto:dogs@dogsite.com">dogs@dogsite.com</a>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- /contact-icon --> */}
            <div className="col-lg-6 mt-5">
              <div className="contact-icon">
                {/* <!---icon --> */}
                <i className="fa fa-map-marker top-icon"></i>
                {/* <!-- contact-icon info --> */}
                <div className="contact-icon-info">
                  <h5>Visit our Location</h5>
                  <p className="h7">
                    Opp FIMS HOSPITAL Delhi Bhalgarh Road Sonipat
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- /contact-icon --> */}
            <div className="col-lg-6 mt-5">
              <div className="contact-icon">
                {/* <!---icon --> */}
                <i className="fa fa-phone top-icon"></i>
                {/* <!-- contact-icon info --> */}
                <div className="contact-icon-info">
                  <h5>Call us today</h5>
                  <p className="h7">9255555513, 0130 2981622</p>
                </div>
              </div>
            </div>
            {/* <!-- /contact-icon --> */}
            <div className="col-lg-6 mt-5">
              <div className="contact-icon">
                {/* <!---icon --> */}
                <i className="fa fa-heart top-icon"></i>
                {/* <!-- contact-icon info --> */}
                <div className="contact-icon-info">
                  <h5>Follow us on Social Media</h5>
                  <ul className="social-media">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100070414099420">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/workingdogclub2020/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/channel/UCrrzGOVEBBifsxEs2nd8_UQ">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /contact-icon --> */}
          </div>
          {/* <!-- /row  --> */}
        </div>
        {/* <!-- /container  --> */}
      </section>
      {/* <!-- /Section ends  --> */}
    </div>
  );
}

export default Contact;
