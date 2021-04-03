import React from "react";

function Contact() {
  return (
    <div>
      {/* <!-- Section Contact  --> */}
      <section id="contact" className="dog-bg3">
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
              <div id="map-canvas" className="mt-3 border-irregular1"></div>
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
                  <p className="h7">Sector-65, Gurgaon</p>
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
                  <p className="h7">+91 9876543210</p>
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
                      <a href="/">
                        <i className="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-pinterest"></i>
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
