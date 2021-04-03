import React from "react";

function Adopt() {
  return (
    <div>
      {/* <!-- Section Adopt  --> */}
      <section id="adopt" className="paws-house-bg1 bg-light">
        <div className="container ">
          <div className="section-heading text-center">
            <h2>Adopt a Pet</h2>
          </div>
          {/* <!-- /Section-heading  --> */}
          <div className="col-lg-10 offset-lg-1 text-center">
            <h3>Find a new furry Friend</h3>
            <p>
              Maecenas at arcu risus. Donec commodo sodales ex, scelerisque
              laoreet nibh hendrerit id. In aliquet magna nec lobortis maximus.
              Etiam rhoncus leo a dolor placerat, nec elementum ipsum convall.
            </p>
          </div>
          {/* <!-- First row: Adopt a pet  --> */}
          <div className="row mt-5">
            {/* <!-- Pet   --> */}
            <div className="adopt-card col-md-6 col-xl-3 res-margin">
              <div className="card bg-light-custom">
                <div className="thumbnail text-center">
                  {/* <!-- Image  --> */}
                  <img
                    src="assets/img/adoption/adoption1.jpg"
                    className="border-irregular1 img-fluid"
                    alt=""
                  />
                  {/* <!-- Name  --> */}
                  <div className="caption-adoption">
                    <h6 className="adoption-header">Fluffy</h6>
                    {/* <!-- List  --> */}
                    <ul className="list-unstyled">
                      <li>
                        <strong>Gender:</strong> Female
                      </li>
                      <li>
                        <strong>Neutered: </strong> Yes
                      </li>
                      <li>
                        <strong>Age:</strong> 2 years
                      </li>
                    </ul>
                    {/* <!-- Buttons  --> */}
                    <div className="text-center">
                      <a
                        href="/adopt"
                        className="btn btn-primary"
                      >
                        More Info
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- /thumbnail  --> */}
              </div>
              {/* <!-- /card  --> */}
            </div>
            {/* <!-- /adopt-card  --> */}
            {/* <!-- /pet  --> */}
            {/* <!-- Pet   --> */}
            <div className="adopt-card col-md-6 col-xl-3 res-margin">
              <div className="card bg-light-custom">
                <div className="thumbnail text-center">
                  {/* <!-- Image  --> */}
                  <img
                    src="assets/img/adoption/adoption2.jpg"
                    className="border-irregular1 img-fluid"
                    alt=""
                  />
                  {/* <!-- Name  --> */}
                  <div className="caption-adoption">
                    <h6 className="adoption-header">Charlie</h6>
                    {/* <!-- List  --> */}
                    <ul className="list-unstyled">
                      <li>
                        <strong>Gender:</strong> Male
                      </li>
                      <li>
                        <strong>Neutered: </strong> Yes
                      </li>
                      <li>
                        <strong>Age:</strong> 2 years
                      </li>
                    </ul>
                    {/* <!-- Buttons  --> */}
                    <div className="text-center">
                      <a
                        href="/adopt"
                        className="btn btn-primary"
                      >
                        More Info
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- /thumbnail  --> */}
              </div>
              {/* <!-- /card  --> */}
            </div>
            {/* <!-- /adopt-card  --> */}
            {/* <!-- /pet  --> */}
            {/* <!-- Pet   --> */}
            <div className="adopt-card col-md-6 col-xl-3 res-margin">
              <div className="card bg-light-custom">
                <div className="thumbnail text-center">
                  {/* <!-- Image  --> */}
                  <img
                    src="assets/img/adoption/adoption3.jpg"
                    className="border-irregular1 img-fluid"
                    alt=""
                  />
                  {/* <!-- Name  --> */}
                  <div className="caption-adoption">
                    <h6 className="adoption-header">Lucky</h6>
                    {/* <!-- List  --> */}
                    <ul className="list-unstyled">
                      <li>
                        <strong>Gender:</strong> Male
                      </li>
                      <li>
                        <strong>Neutered: </strong> Yes
                      </li>
                      <li>
                        <strong>Age:</strong> 5 years
                      </li>
                    </ul>
                    {/* <!-- Buttons  --> */}
                    <div className="text-center">
                      <a
                        href="/adopt"
                        className="btn btn-primary"
                      >
                        More Info
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- /thumbnail  --> */}
              </div>
              {/* <!-- /card  --> */}
            </div>
            {/* <!-- /adopt-card  --> */}
            {/* <!-- /pet  --> */}
            {/* <!-- Pet   --> */}
            <div className="adopt-card col-md-6 col-xl-3 res-margin">
              <div className="card bg-light-custom">
                <div className="thumbnail text-center">
                  {/* <!-- Image  --> */}
                  <img
                    src="assets/img/adoption/adoption4.jpg"
                    className="border-irregular1 img-fluid"
                    alt=""
                  />
                  {/* <!-- Name  --> */}
                  <div className="caption-adoption">
                    <h6 className="adoption-header">Magdalene</h6>
                    {/* <!-- List  --> */}
                    <ul className="list-unstyled">
                      <li>
                        <strong>Gender:</strong> Female
                      </li>
                      <li>
                        <strong>Neutered: </strong> No
                      </li>
                      <li>
                        <strong>Age:</strong> 2 years
                      </li>
                    </ul>
                    {/* <!-- Buttons  --> */}
                    <div className="text-center">
                      <a
                        href="/adopt"
                        className="btn btn-primary"
                      >
                        More Info
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- /thumbnail  --> */}
              </div>
              {/* <!-- /card  --> */}
            </div>
            {/* <!-- /adopt-card  --> */}
            {/* <!-- /pet  --> */}
          </div>
          {/* <!-- /row  --> */}
          <div className="text-center mt-5">
            <a href="/adopt" className="btn btn-secondary btn-lg">
              See more pets
            </a>
          </div>
        </div>
        {/* <!-- /container  --> */}
      </section>
    </div>
  );
}

export default Adopt;
