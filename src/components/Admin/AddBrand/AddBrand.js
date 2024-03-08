import React, { useState } from "react";
import "./AddBrand.css";

const AddBrand = () => {
  const [brandData, setBrandData] = useState({
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ahm-computer-backend.onrender.com/product/brand/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(brandData),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to add brand. Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Brand added successfully:", responseData);

      setBrandData({
        name: "",
      });
    } catch (error) {
      console.error("Error adding brand:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrandData({
      ...brandData,
      [name]: value,
    });
  };

  return (
    <>
      <h1 className="text-center my-5">Add New Brand</h1>
      <div className="container brand-container">
        <div className="col-sm-6 mb-3 mb-sm-0 brand-card">
          <div className="card p-5 shadow-lg rounded-5 justify-content-center align-items-center">
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={handleSubmit}>
                  <label className="mb-3 mx-5">
                    Brand Name:
                    <input
                      className="form-control w-100 px-5 mt-3"
                      type="text"
                      name="name"
                      placeholder="New Brand Name"
                      value={brandData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <br />
                  <div className="d-flex justify-content-center align-items-center my-2">
                    <input
                      className="btn btn-primary px-5"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBrand;
