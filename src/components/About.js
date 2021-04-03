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
                <a href="index.html">Home</a>
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
                Aliquam erat volutpat In id fermentum augue, ut pellentesque
                leo. Maecenas at arcu risus. Donec commodo sodales ex,
                scelerisque laoreet nibh hendrerit id. In aliquet magna nec
                lobortis maximus. Etiam rhoncus leo a dolor placerat, nec
                elementum ipsum convall.
              </p>
              <p>
                <strong>
                  Etiam rhoncus leo a dolor placerat, nec elementum ipsum
                  convall Maecenas at arcu risus scelerisque laoree.
                </strong>
              </p>
            </div>
            {/* <!-- /col-lg --> */}
          </div>
          {/* <!-- /row --> */}
          <div class="row mt-5">
            <div class="col-lg-7">
              <h4>We help to Improve their life quality</h4>
              <p>
                Aliquam erat volutpat In id fermentum augue, ut pellentesque
                leo. Maecenas at arcu risus. Donec commodo sodales ex,
                scelerisque laoreet nibh hendrerit id. In aliquet magna nec
                lobortis maximus. Etiam rhoncus leo a dolor placerat, nec
                elementum ipsum convall.
              </p>
              <p>
                Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall
                Maecenas at arcu risus scelerisque laoree.
              </p>
              <ul class="custom pl-0">
                <li>Ipuset phas ellus ac sodales Lorem ipsum dolor Phas ell</li>
                <li>Aliquam erat volut pat phas ellu</li>
                <li>
                  Orci eget, viverra elit liquam erat volut pat phas ellus ac
                </li>
                <li>Ipuset phas ellus ac sodales Lorem ipsum dolor Phas ell</li>
                <li>Aliquam erat volut pat phas ellu</li>
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
                    aria-expanded="false"
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
                        Aliquam erat volutpat In id fermentum augue, ut
                        pellentesque leo. Maecenas at arcu risus. Donec commodo
                        sodales ex, scelerisque laoreet nibh hendrerit id. In
                        aliquet magna nec lobortis maximus. Etiam rhoncus leo a
                        dolor placerat, nec elementum ipsum convall.
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
                    aria-expanded="false"
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
                        Aliquam erat volutpat In id fermentum augue, ut
                        pellentesque leo. Maecenas at arcu risus. Donec commodo
                        sodales ex, scelerisque laoreet nibh hendrerit id. In
                        aliquet magna nec lobortis maximus. Etiam rhoncus leo a
                        dolor placerat, nec elementum ipsum convall.
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
                    aria-expanded="false"
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
                        Aliquam erat volutpat In id fermentum augue, ut
                        pellentesque leo. Maecenas at arcu risus. Donec commodo
                        sodales ex, scelerisque laoreet nibh hendrerit id. In
                        aliquet magna nec lobortis maximus. Etiam rhoncus leo a
                        dolor placerat, nec elementum ipsum convall.
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
        <div id="call-to-action">
          <div class="container block-padding">
            <div class="col-lg-6 offset-lg-6 bg-primary text-light card text-center">
              <h4>Subscribe to our newsletter</h4>
              <p>
                Ultricies a,interdum donec eget metus auguen u Fusce mollis
                imperdiet interdum donec eget metus auguen unc vel lorem.
              </p>
              {/* <!-- Form --> */}
              <div id="mc_embed_signup">
                {/* <!-- your form address in the line bellow --> */}
                <form
                  action="//yourlist.us12.list-manage.com/subscribe/post?u=04e646927a196552aaee78a7b&id=111"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  novalidate
                >
                  <div id="mc_embed_signup_scroll">
                    <div class="mc-field-group">
                      <div class="input-group">
                        <input
                          class="form-control input-lg required email"
                          type="email"
                          value=""
                          name="EMAIL"
                          placeholder="Your email here"
                          id="mce-EMAIL"
                        />
                        <span class="input-group-btn">
                          <button
                            class="btn btn-primary"
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                          >
                            Subscribe
                          </button>
                        </span>
                      </div>
                      {/* <!-- Subscription results --> */}
                      <div id="mce-responses" class="mailchimp">
                        <div
                          class="alert alert-danger response"
                          id="mce-error-response"
                        ></div>
                        <div
                          class="alert alert-success response"
                          id="mce-success-response"
                        ></div>
                      </div>
                    </div>
                    {/* <!-- /mc-fiel-group --> */}
                  </div>
                  {/* <!-- /mc_embed_signup_scroll --> */}
                </form>
                {/* <!-- /form ends --> */}
              </div>
              {/* <!-- /mc_embed_signup --> */}
            </div>
            {/* <!-- /col-md-12 --> */}
          </div>
          {/* <!--/row --> */}
        </div>
        {/* <!--/call-to-action --> */}
        <div class="container bottom-block-padding">
          <div class="bg-light-custom card">
            <div class="row">
              <div class="col-xl-6">
                <h4>Caring for your pets since 2001</h4>
                <p>
                  Aliquam erat volutpat In id fermentum augue, ut pellentesque
                  leo. Maecenas at arcu risus. Donec commodo sodales ex,
                  scelerisque laoreet nibh hendrerit id. In aliquet magna nec
                  lobortis maximus. Etiam rhoncus leo a dolor placerat, nec
                  elementum ipsum convall.
                </p>
                <p>
                  Etiam rhoncus leo a dolor placerat, nec elementum ipsum
                  convall Maecenas at arcu risus scelerisque laoree.
                </p>
                <ul class="custom pl-0">
                  <li>
                    Orci eget, viverra elit liquam erat volut pat phas ellus ac
                  </li>
                  <li>
                    Ipuset phas ellus ac sodales Lorem ipsum dolor Phas ell
                  </li>
                  <li>Aliquam erat volut pat phas ellu</li>
                </ul>
                {/* <!-- /ul --> */}
              </div>
              {/* <!-- /col-md --> */}
              <div class="col-xl-6">
                {/* <!-- embed video --> */}
                <div class="embed-responsive embed-responsive-4by3">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/oVCtgAzQ99A"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              {/* <!-- /col-md --> */}
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
