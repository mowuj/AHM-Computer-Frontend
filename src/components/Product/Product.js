import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  const {
    id,
    name,
    category,
    brand,
    image,
    description,
    price,
    quantity,
    discount,
  } = product;

  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <p className="my-0">Price: {price}</p>
        <p className="my-0">Quantity: {quantity}</p>
        <p className="my-0">Category: {category}</p>
        <p className="my-0">Brand: {brand}</p>
        <p className="my-0">Discount: {discount}</p>
        <p className="my-0">
          <small>{description.slice(0, 100)}</small>{" "}
        </p>
        <div className="d-flex flex-column gap-1 mt-2">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={addToCart}
          >
            Add To Cart
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={navigateToDetails}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
