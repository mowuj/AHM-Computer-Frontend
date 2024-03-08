import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "", // Assuming it's a single category
    brand: "", // Assuming it's a single brand
    image: null,
    price: 0,
    quantity: 0,
    description: "",
    discount: 0,
  });

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://ahm-computer-backend.onrender.com/product/category/")
      .then((response) => response.json())
      .then((data) => setCategories(data));

    fetch("https://ahm-computer-backend.onrender.com/product/brand/")
      .then((response) => response.json())
      .then((data) => setBrands(data));
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.entries(product).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch(
        "https://ahm-computer-backend.onrender.com/product/list/",
        {
          method: "POST",
          body: formData,
        }
      );

      const responseData = await response.json();
      console.log("Product added successfully:", responseData);

      setProduct({
        name: "",
        category: "",
        brand: "",
        image: null,
        price: 0,
        quantity: 0,
        description: "",
        discount: 0,
      });
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value,files } = e.target;
    if (name === "image") {
      setProduct({
        ...product,
        [name]: files[0], // Set image to the selected file
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  return (
    <div className="container mt-3" style={{ height: "80vh" }}>
      <h2 className="text-center mb-5">Add New Product</h2>
      <form
        onSubmit={handleSubmit}
        className="row g-3"
        enctype="multipart/form-data"
      >
        <div className="col-md-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <select
            className="form-select"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="brand" className="form-label">
            Brand:
          </label>
          <select
            className="form-select"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="quantity" className="form-label">
            Quantity:
          </label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="discount" className="form-label">
            Discount:
          </label>
          <input
            type="number"
            className="form-control"
            id="discount"
            name="discount"
            value={product.discount}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="image" className="form-label">
            Image:
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-auto"
          style={{ width: "25%" }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
