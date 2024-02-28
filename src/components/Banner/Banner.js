import React from 'react';
import { Button } from 'react-bootstrap';
import banner2 from '../../images/banner2.png'
const Banner = () => {
    return (
      <div
        className="container d-md-flex justify-content-center align-items-center h-100 p-5 mt-5 gap-4 shadow-lg rounded-5"
        style={{ height: "100vh", backgroundColor: "rgb(195, 236, 236)" }}
      >
        <div className="banner-left col-md-6 p-3">
          <h1 className="text-danger">
            Pick Your Favourite <br /> Laptop From Us..
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur possimus quam exercitationem neque minima corrupti nobis sapiente perferendis iusto vitae ipsa rem, explicabo sit est numquam. Repellat voluptas excepturi natus placeat minima neque quos fugiat qui in obcaecati, distinctio maiores, consequatur ducimus molestiae debitis laudantium eum pariatur id, expedita sint!
          </p>
          <Button variant="danger">Contact Us</Button>
        </div>
        <div className="banner-right col-md-6">
          <img
            className="img-fluid w-100 rounded-5"
            src= {banner2}
            style={{ height: "60vh" }}
            alt=""
          />
        </div>
      </div>
    );
};

export default Banner;