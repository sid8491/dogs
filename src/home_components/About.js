import React from 'react'

function About() {
    return (
        <div>
            {/* <!-- Section About Us  --> */}
      <section id="about" className="dog-bg2">
        <div className="container">
          <div className="section-heading text-center">
            <h2>About Us</h2>
          </div>
          {/* <!-- /Section-heading  --> */}
        </div>
        {/* <!-- /container  --> */}
        <div className="container block-padding pt-0">
          <div className="row">
            <div className="col-lg-6">
              <h3>Caring for your pets</h3>
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
              <ul className="custom pl-0">
                <li>
                  Orci eget, viverra elit liquam erat volut pat phas ellus ac
                </li>
                <li>Ipuset phas ellus ac sodales Lorem ipsum dolor Phas ell</li>
                <li>Aliquam erat volut pat phas ellu</li>
              </ul>
              {/* <!-- /ul  --> */}
            </div>
            {/* <!-- image  --> */}
            <div className="col-lg-6">
              <img
                src="assets/img/about2.png"
                alt=""
                className="img-fluid border-irregular1"
                data-aos="zoom-in"
              />
            </div>
          </div>
          {/* <!-- /row  --> */}
        </div>
        {/* <!-- /container  --> */}
        <div className="bg-light-custom block-padding">
          <div className="container">
            <div id="counter" className="row">
              {/* <!-- Counter  --> */}
              <div className="col-xl-3 col-md-6">
                <div className="counter">
                  <i className="counter-icon fa fa-users"></i>
                  {/* <!-- insert your final value on data-count=  --> */}
                  <div className="counter-value" data-count="1500">
                    0
                  </div>
                  <h3 className="title">Happy Clients</h3>
                </div>
                {/* <!-- /counter  --> */}
              </div>
              {/* <!-- /col-lg  --> */}
              {/* <!-- Counter  --> */}
              <div className="col-xl-3 col-md-6">
                <div className="counter">
                  <i className="counter-icon flaticon-dog-in-front-of-a-man"></i>
                  {/* <!-- insert your final value on data-count=  --> */}
                  <div className="counter-value" data-count="14">
                    0
                  </div>
                  <h3 className="title">Professionals</h3>
                </div>
                {/* <!-- /counter  --> */}
              </div>
              {/* <!-- /col-lg  --> */}
              {/* <!-- Counter  --> */}
              <div className="col-xl-3 col-md-6">
                <div className="counter">
                  <i className="counter-icon flaticon-dog-2"></i>
                  {/* <!-- insert your final value on data-count=  --> */}
                  <div className="counter-value" data-count="900">
                    0
                  </div>
                  <h3 className="title">Adopted Pets</h3>
                </div>
                {/* <!-- /counter  --> */}
              </div>
              {/* <!-- /col-lg  --> */}
              {/* <!-- Counter  --> */}
              <div className="col-xl-3 col-md-6">
                <div className="counter">
                  <i className="counter-icon flaticon-prize-badge-with-paw-print"></i>
                  {/* <!-- insert your final value on data-count=  --> */}
                  <div className="counter-value" data-count="12">
                    0
                  </div>
                  <h3 className="title">Prizes</h3>
                </div>
                {/* <!-- /counter  --> */}
              </div>
              {/* <!-- /col-lg  --> */}
            </div>
            {/* <!-- /row  --> */}
          </div>
          {/* <!-- /container  --> */}
        </div>
        {/* <!-- /block-padding  --> */}
        <div className="container bottom-block-padding">
          <h3 className="text-center">What our clients say</h3>
          <div className="col-md-12">
            <div id="owl-testimonial" className="owl-carousel owl-theme">
              {/* <!-- testimonial  --> */}
              <div className="testimonial">
                <div className="content">
                  <p className="description">
                    Aliquam erat volutpat In id fermentum augue, ut pellentesque
                    leo. Maecenas at arcu risus. Donec commodo sodales ex,
                    scelerisque laoreet nibh hendrerit id. In aliquet magna nec
                    lobortis maximus. Etiam rhoncus leo a dolor placerat, nec
                    elementum ipsum convall.
                  </p>
                </div>
                {/* <!-- /content  --> */}
                <div className="testimonial-pic">
                  <img
                    src="assets/img/team/team1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                {/* <!-- /testimonial-pic  --> */}
                <div className="testimonial-review">
                  <h5 className="testimonial-title">Lucianna Smith</h5>
                  <span>Teacher</span>
                </div>
                {/* <!-- /testimonial-review  --> */}
              </div>
              {/* <!-- /testimonial  --> */}
              {/* <!-- testimonial  --> */}
              <div className="testimonial">
                <div className="content">
                  <p className="description">
                    Aliquam erat volutpat In id fermentum augue, ut pellentesque
                    leo. Maecenas at arcu risus. Donec commodo sodales ex,
                    scelerisque laoreet nibh hendrerit id. In aliquet magna nec
                    lobortis maximus. Etiam rhoncus leo a dolor placerat, nec
                    elementum ipsum convall.
                  </p>
                </div>
                {/* <!-- /content  --> */}
                <div className="testimonial-pic">
                  <img
                    src="assets/img/team/team2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                {/* <!-- /testimonial-pic  --> */}
                <div className="testimonial-review">
                  <h5 className="testimonial-title">John Sadana</h5>
                  <span>Doctor</span>
                </div>
                {/* <!-- /testimonial-review  --> */}
              </div>
              {/* <!-- /testimonial  --> */}
              {/* <!-- testimonial  --> */}
              <div className="testimonial">
                <div className="content">
                  <p className="description">
                    Aliquam erat volutpat In id fermentum augue, ut pellentesque
                    leo. Maecenas at arcu risus. Donec commodo sodales ex,
                    scelerisque laoreet nibh hendrerit id. In aliquet magna nec
                    lobortis maximus. Etiam rhoncus leo a dolor placerat, nec
                    elementum ipsum convall.
                  </p>
                </div>
                {/* <!-- /content  --> */}
                <div className="testimonial-pic">
                  <img
                    src="assets/img/team/team3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                {/* <!-- /testimonial-pic  --> */}
                <div className="testimonial-review">
                  <h5 className="testimonial-title">Jane Janeth</h5>
                  <span>Librarian</span>
                </div>
                {/* <!-- /testimonial-review  --> */}
              </div>
              {/* <!-- /testimonial  --> */}
            </div>
            {/* <!-- /owl-testimonial  --> */}
          </div>
          {/* <!-- /col-md-12  --> */}
        </div>
        {/* <!-- /container  --> */}
      </section>
      {/* <!-- / Section Ends  --> */}
        </div>
    )
}

export default About
