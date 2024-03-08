import React, { useState } from "react";

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ahm-computer-backend.onrender.com/product/category/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(category),
        }
      );

      const responseData = await response.json();
      console.log("Brand added successfully:", responseData);

      setCategory({
        name: "",
      });
    } catch (error) {
      console.error("Error adding brand:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };
    return (
      <>
        <h1 className="text-center my-5">Add New Category</h1>
        <div className="container brand-container">
          <div class="col-sm-6 mb-3 mb-sm-0 brand-card">
            <div class="card p-5 shadow-lg rounded-5 justify-content-center align-items-center">
              <div class="card-body">
                <h5 class="card-title">
                  <form onSubmit={handleSubmit}>
                    <label className="mb-3 mx-5">
                      Category Name:
                      <input
                        className="form-control w-100 px-5 mt-3"
                        type="text"
                        name="name"
                        placeholder="New Category Name"
                        value={category.name}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <br />
                    <div className="d-flex justify-content-center align-items-center my-2">
                      <input
                        class="btn btn-primary  px-5"
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

export default AddCategory;
