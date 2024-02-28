import React from 'react';
import about from '../../images/about.jpg'
import find from '../../images/find.jpg'
import servecing from '../../images/servecing.jpg'
import provide from '../../images/provide.jpg'
import clint from '../../images/client.png'
import professional from'../../images/professional.png'
import service from '../../images/service.jpg'
import award from '../../images/award.jpg'
const About = () => {
    return (
      <>
        <div className="container my-5">
          <div className="banner d-md-flex justify-content-between align-items-center gap-4">
            <div className="col-md-6" style={{ height: "90vh" }}>
              <img
                src={about}
                alt=""
                className="img-fluid rounded-circle w-100 h-100"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </div>
            <div className="col-md-6">
              <h1 className="my-5">
                <span className="text-danger">WE ARE BEST</span> <br /> FOR YOUR
                Computer.
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
                <li>Best Laptops </li>
                <li>Best Computer accessories</li>
                <li>Best Servicing</li>
                <li>Best Technician</li>
              </ul>
            </div>
          </div>

          <div className="process">
            <h1 className="text-info text-center my-5">Our Services Process</h1>
            <div className="container icons d-md-flex justify-content-between align-items-center my-5 gap-3 gap-md-5 shadow-sm p-5">
              <div
                className="card w-100 border-0 p-4"
                style={{ backgroundColor: "transparent" }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div>
                    <img
                      src={find}
                      alt=""
                      style={{ width: "300px" }}
                      className="my-4 py-1 rounded-circle border-5"
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Find Problem</h4>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit voluptatibus officiis harum aliquam
                      recusandae laboriosam possimus! Facere distinctio nulla
                      modi.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card w-100 border-0 p-4"
                style={{ backgroundColor: "transparent" }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div>
                    <img
                      src={servecing}
                      alt=""
                      style={{ width: "300px" }}
                      className="my-4 py-1 rounded-circle border-5"
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Servicing</h4>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit voluptatibus officiis harum aliquam
                      recusandae laboriosam possimus! Facere distinctio nulla
                      modi.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="card w-100 border-0 p-4"
                style={{ backgroundColor: "transparent" }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div>
                    <img
                      src={provide}
                      alt=""
                      style={{ width: "300px" }}
                      className="my-4 py-1 rounded-circle border-5"
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h4 className="card-title">Provide to you</h4>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit voluptatibus officiis harum aliquam
                      recusandae laboriosam possimus! Facere distinctio nulla
                      modi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 class="text-center text-info my-5">Our Achivement</h1>
        <div class="container bg-dark d-flex flex-wrap justify-content-around align-items-center p-5 my-5 rounded-3 shadow-lg custom-height-for-md">
          <div class="col-6 col-md-3 d-flex flex-column align-items-center">
            <img
              src={professional}
              alt=""
              style={{ width: "100px" }}
              class="rounded-circle bg-white img-fluid"
            />
            <h1 class="text-white">15</h1>
            <h5 class="text-white">Professionals</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column align-items-center">
            <img
              src={service}
              alt=""
              style={{ width: "100px" }}
              class="rounded-circle bg-white"
            />
            <h1 class="text-white">100</h1>
            <h5 class="text-white">Servicing</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column align-items-center">
            <img
              src={award}
              alt=""
              style={{ width: "100px" }}
              class="rounded-circle bg-white"
            />
            <h1 class="text-white">12</h1>
            <h5 class="text-white">Awards</h5>
          </div>
          <div class="col-6 col-md-3 d-flex flex-column align-items-center">
            <img
              src={clint}
              alt=""
              style={{ width: "100px" }}
              class="rounded-circle bg-white"
            />
            <h1 class="text-white">1000</h1>
            <h5 class="text-white">Clients</h5>
          </div>
        </div>
      </>
    );
};

export default About;