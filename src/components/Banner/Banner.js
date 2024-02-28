import React from 'react';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
      <div
        className="container d-md-flex justify-content-center align-items-center h-100 p-5 mt-5 gap-4 shadow-lg rounded-5"
        style={{ height: "100vh", backgroundColor: "rgb(195, 236, 236)" }}
      >
        <div className="banner-left col-md-6 p-3">
          <h1 className="text-danger">
            Pick Your Favourite <br /> Pets From Us..
          </h1>
          <p>
            Are you an animal lover? We are waiting for you. We have a big
            collection of pets for you. We provide services to sell and buy
            animals with health treatment. So don't worry, come and see our
            warehouse and sell/buy pets within your limits. Stay with us. Thank
            you.
          </p>
          <Button variant="danger">Contact Us</Button>
        </div>
        <div className="banner-right col-md-6">
          <img
            className="img-fluid w-100 rounded-5"
            src="/img/banner2.jpg"
            style={{ height: "60vh" }}
            alt=""
          />
        </div>
      </div>
    );
};

export default Banner;