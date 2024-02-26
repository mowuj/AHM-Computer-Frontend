import React from 'react';

const About = () => {
    return (
      <div>
        <div className="container my-5">
          <div className="banner d-md-flex justify-content-between align-items-center gap-4">
            <div className="col-md-6" style={{ height: "90vh" }}>
              <img
                src=''
                alt=""
                className="img-fluid rounded-circle w-100 h-100"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>
            <div className="col-md-6">
              <h1 className="my-5">
                <span className="text-danger">WE ARE BEST</span> <br /> FOR YOUR
                PET CARE
              </h1>
              <p className="fs-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                praesentium cum maiores, quos deserunt reiciendis ad ea odio
                placeat, earum libero exercitationem repellat corporis pariatur
                atque at, error perspiciatis possimus quasi doloribus cupiditate
                temporibus fugiat ipsam sunt! Iste, aliquid natus?
              </p>
              <h5>We Provide</h5> <hr />
              <ul>
                <li>Best Food For your Pet</li>
                <li>Best Place for Buy Pet</li>
                <li>Best Place for Sell Pet</li>
                <li>Best Treatment for your Pet</li>
              </ul>
            </div>
          </div>

          <div className="process">
            <h1 className="text-info text-center my-5">Pet Adoption Process</h1>
            <div className="container icons d-md-flex justify-content-between align-items-center my-5 gap-3 gap-md-5 shadow-sm p-5">
              {/* Repeat this structure for each card */}
              <div
                className="card w-100 border-0 p-4"
                style={{ backgroundColor: "transparent" }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div>
                    <img
                      src=''
                      alt=""
                      style={{ width: "300px" }}
                      className="my-4 py-1 rounded-circle border-5"
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Find your pet</h4>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit voluptatibus officiis harum aliquam
                      recusandae laboriosam possimus! Facere distinctio nulla
                      modi.
                    </p>
                  </div>
                </div>
              </div>
              {/* Repeat end */}
            </div>
          </div>

          <h1 className="text-center text-info my-5">Our Achievement</h1>
          <div className="container bottom-banner d-flex flex-wrap justify-content-around align-items-center p-5 my-5 rounded-3 shadow-lg custom-height-for-md">
            {/* Repeat this structure for each achievement */}
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
              <img
                src=''
                alt=""
                style={{ width: "100px" }}
                className="rounded-circle bg-white img-fluid"
              />
              <h1 className="text-white">15</h1>
              <h5 className="text-white">Professionals</h5>
            </div>
            {/* Repeat end */}
          </div>

          <div className="service-container container text-center p-3 mt-5 w-100 m-auto">
            <h1 className="title text-info mb-4">Meet Our Team</h1>

            {/* Repeat this structure for each team member */}
            <div className="card shadow-lg h-100">
              <div className="ratio ratio-1x1">
                <img
                  src=''
                  className="card-img-top rounded-circle img-fluid p-2"
                  loading="lazy"
                  alt="..."
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />
              </div>
              <div className="card-body p-3 p-xl-5">
                <h3 className="card-title h5">Ahsan Habib</h3>
                <h5 className="card-text">Pet Sitter</h5>
                <p className="card-text">
                  <i className="fab fa-facebook fs-3 me-3"></i>
                  <i className="fab fa-google fs-3 me-3"></i>
                  <i className="fab fa-twitter fs-3"></i>
                </p>
              </div>
            </div>
            {/* Repeat end */}
          </div>
        </div>
      </div>
    );
};

export default About;