import React from 'react';
import { Button } from 'react-bootstrap';
import tablet from '../../images/tablet.png'
const TopRated = () => {
    return (
      <>
            <h1 className="text-center mt-3">Top Rated</h1>
        <div
          className="container d-md-flex justify-content-center align-items-center h-100 p-5 my-5 gap-4 shadow-lg rounded-5"
          style={{
            height: "60vh",
            backgroundColor: "#1C1137",
          }}
        >
          <div className="banner-right col-md-6">
            <img
              className="img-fluid w-100 rounded-5"
              src={tablet}
              style={{ height: "50vh" }}
              alt=""
            />
          </div>
          <div className="banner-left col-md-6 p-3">
            <p className="text-white">All New Trends Tablets</p>
            <h1 className="text-white">
              Lenovo Tab M8 <br />
              Gen 4 3GB RAM
            </h1>
            <p className="text-white">Doing it all, in all new ways.</p>
            <button type="button" class="btn btn-outline-danger">
              Shop Now
            </button>
          </div>
        </div>
      </>
    );
};

export default TopRated;