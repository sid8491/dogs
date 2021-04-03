import React from "react";

function Subscribe() {
  return (
    <div>
      {/* <!-- Section Call to action  --> */}
      <div id="call-to-action">
        <div className="container block-padding">
          <div className="col-lg-6 offset-lg-6 bg-primary text-light card text-center">
            <h4>Subscribe to our newsletter</h4>
            <p>
              Ultricies a,interdum donec eget metus auguen u Fusce mollis
              imperdiet interdum donec eget metus auguen unc vel lorem.
            </p>
            {/* <!-- Form  --> */}
            <div id="mc_embed_signup">
              {/* <!-- your form address in the line bellow  --> */}
              <form
                action="//yourlist.us12.list-manage.com/subscribe/post?u=04e646927a196552aaee78a7b&id=111"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <div className="input-group">
                      <input
                        className="form-control input-lg required email"
                        type="email"
                        value=""
                        name="EMAIL"
                        placeholder="Your email here"
                        id="mce-EMAIL"
                      />
                      <span className="input-group-btn">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          value="Subscribe"
                          name="subscribe"
                          id="mc-embedded-subscribe"
                        >
                          Subscribe
                        </button>
                      </span>
                    </div>
                    {/* <!-- Subscription results  --> */}
                    <div id="mce-responses" className="mailchimp">
                      <div
                        className="alert alert-danger response"
                        id="mce-error-response"
                      ></div>
                      <div
                        className="alert alert-success response"
                        id="mce-success-response"
                      ></div>
                    </div>
                  </div>
                  {/* <!-- /mc-fiel-group  --> */}
                </div>
                {/* <!-- /mc_embed_signup_scroll  --> */}
              </form>
              {/* <!-- /form ends  --> */}
            </div>
            {/* <!-- /mc_embed_signup  --> */}
          </div>
          {/* <!-- /col-md-12  --> */}
        </div>
        {/* <!--/row  --> */}
      </div>
      {/* <!--/call-to-action  --> */}
    </div>
  );
}

export default Subscribe;
