import React from "react";
import headphone1 from "../../images/headphone1.png";
import watch2 from "../../images/watch2.png";
import { Link } from "react-router-dom";
const Sound = () => {
  return (
    <>
      <h1 className="text-center mb-4" style={{ color: "#F72798" }}>
        Just For You.
      </h1>
      <section className="d-md-flex flex-row justify-content-center align-items-center gap-4 mb-4">
        <div
          className="col-md-5 d-flex flex-row justify-content-center align-items-center shadow-lg rounded-5 mb-4 mb-md-0"
          style={{
            backgroundColor: "#2C4E80",
            height: "50vh",
          }}
        >
          <div>
            <p className="text-white">Great Head Phones</p>
            <h1 className="text-white">
              Find Your <br /> Sound!
            </h1>
            <Link className="text-primary" to="/products">
              <button
                type="button"
                class="btn btn-outline"
                style={{
                  backgroundColor: "#D862BC",
                  color: "#ffff",
                }}
              >
                Shop Now
              </button>
            </Link>
          </div>
          <div>
            <img
              className="img-fluid w-100 rounded-5"
              src={headphone1}
              style={{
                height: "50vh",
              }}
              alt=""
            />
          </div>
        </div>
        <div
          className="col-md-5 d-flex flex-row justify-content-center align-items-center shadow-lg rounded-5"
          style={{
            backgroundColor: "#141E46",
          }}
        >
          <div>
            <p className="text-white">BEST SMARTWATCH 2024</p>
            <h1 className="text-white">
              Smartwatch <br /> for you!
            </h1>
            <Link className="text-primary" to="/products">
              <button
                type="button"
                class="btn btn-outline"
                style={{
                  backgroundColor: "#D862BC",
                  color: "#ffff",
                }}
              >
                Shop Now
              </button>
            </Link>
          </div>
          <div>
            <img
              className="img-fluid w-100 rounded-5"
              src={watch2}
              style={{
                height: "50vh",
              }}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sound;
