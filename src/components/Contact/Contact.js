import React from 'react';
import about from '../../images/about.jpg'
const Contact = () => {
    return (
      <div className="container">
        <div className="d-md-flex justify-content-between gap-5 my-5 border-0 bg-white p-5 shadow-lg rounded-3">
          <div className="left col-md-5">
            <h1>
              <span className="text-danger">Don't hesitate</span> to contact us
              if you need any help
            </h1>
          </div>
          <div className="right col-md-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe provident quos dicta error vitae, veritatis ad inventore! Rerum provident ex modi molestias dolorum eveniet aut aperiam quas. Iste eveniet magnam nemo eum, impedit esse debitis velit accusamus eligendi autem porro deserunt culpa, excepturi deleniti, maiores in ipsum delectus. Atque.
            </p>
          </div>
        </div>
        <div className="icons d-md-flex justify-content-between align-items-center my-5 gap-3 gap-md-5 shadow-sm">
          {/* Address */}
          <div className="col-md-4 my-3 my-md-0">
            <div className="card w-100 border-0">
              <div className="card-body text-center">
                <h4 className="card-title">
                  <i className="fas fa-map-marker fs-3 me-2"></i>Address
                </h4>
                <p className="fs-5 mb-0">Kasnaye Gaocia,Bottola,</p>
                <p className="fs-5">Khilket 92,Dhaka,Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-4 my-3 my-md-0">
            <div className="card w-100 border-0">
              <div className="card-body text-center">
                <h4 className="card-title">
                  <i className="fas fa-phone fs-3 me-2"></i>Phone
                </h4>
                <p className="fs-5 mb-0">+880 1792029884</p>
                <p className="fs-5">+880 1792029884</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <di v className="col-md-4 my-3 my-md-0">
            <div className="card w-100 border-0">
              <div className="card-body text-center">
                <h4 className="card-title">
                  <i className="fas fa-envelope fs-3 me-2"></i>Email
                </h4>
                <p className="fs-5 mb-0">mowuj92@gmail.com</p>
                <p className="fs-5">mowuj92@gmail.com</p>
              </div>
            </div>
          </di>
        </div>

        {/* Get In Touch */}
        <div>
          <div className="row d-md-flex justify-content-center align-items-center my-5">
            <div className="col-sm-12 mb-3 mb-sm-0">
              <div className="card p-5 shadow-lg rounded-5">
                <div className="card-body d-md-flex justify-content-around align-items-stretch">
                  <div className="col-md-5 d-flex align-items-stretch">
                    <img
                      src={about}
                      className="img-fluid rounded w-100 h-100"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="card-title mt-0">
                      <h1 className="text-center">Get In Touch</h1>
                      <form
                        action=""
                        className="w-md-75 m-auto shadow-lg p-5 mb-5 mt-4 rounded-3"
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <input type="text" class="form-control mb-2" id="name" name="name" required placeholder="Your Name"/>
    <input type="text" class="form-control mb-2" id="phone" name="phone" required placeholder="Phone Number"/>
     <textarea class="form-control mb-2" id="content" name="content" rows="3" required placeholder="Your Content"></textarea >
                        <input
                          className="btn btn-warning mx-auto"
                          type="submit"
                          value="Submit"
                        />
                      </form>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;