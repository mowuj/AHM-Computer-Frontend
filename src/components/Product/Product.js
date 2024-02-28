import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (product) => {
    const { id,name,category,brand, image, description, price, quantity,discount } =
    product.product;
  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`/product/${id}`);
  };
    return (
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Name:{name}</h5>
          <p>Price:{price}</p>
          <p>Quantity:{quantity}</p>
          <p>Category:{category}</p>
          <p>Brand:{brand}</p>
          <p>Discount:{discount}</p>
          <p>
            <small>{description}</small>{" "}
          </p>
          <button className="btn btn-primary" onClick={() => navigateToDetails(id)}>
            Details
          </button>
        </div>
      </div>
    );
};

export default Product;