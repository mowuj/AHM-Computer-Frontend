import React from 'react';

const Footer = () => {
    return (
      <div class="p-5 bg-dark text-white">
        <div class="container row w-75 m-auto p-5">
          <div class="col-md-6">
            <p>
              <small>Copyright @ AHM Computer. All Rights Reserved</small>
            </p>
            <h4>Follow US</h4>
            <h5>ahm.computer@gmail.com</h5>
            <h6>Khilket,Dhaka</h6>
          </div>
          <div class="col-md-3">
            <h5>Company</h5>
            <li>About</li>
            <li>Contact us</li>
            <li>Culture</li>
            <li>Blog</li>
          </div>
          <div class="col-md-3 mb-5">
            <h5>Social Media</h5>
            <div class="d-flex justify-content-start gap-4 py-3">
              <i class="fab fa-facebook fa-2x"></i>
              <i class="fab fa-linkedin fa-2x"></i>
              <i class="fab fa-youtube fa-2x"></i>
              <i class="fab fa-twitter fa-2x"></i>
            </div>
          </div>
          <hr />
          <p class="text-center mt-3">
            <small>Copyright @ AHM Computer. All Rights Reserved</small>
          </p>
        </div>
      </div>
    );
};

export default Footer;