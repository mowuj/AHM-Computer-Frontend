import React from "react";
import { useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";

const ProductDetails = (id) => {
    const { productId } = useParams();
    const [product]=useProductDetail(productId)

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            className="img-fluid"
            alt={`Product: ${product.name}`}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p class="my-0">Category: {product.category}</p>
          <p class="my-0">Brand: {product.brand}</p>
          <p class="my-0">Price: {product.price}</p>
          <p class="my-0">Quantity: {product.quantity}</p>
          <p class="my-0">Discount: {product.discount}</p>
          <p class="my-0">Description: {product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
