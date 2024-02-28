import React from 'react';

const Product = (product) => {
  console.log(product)
    const { name,category,brand, image, description, price, quantity,discount } =
      product.product;
    return (
      <div className="product">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
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
                <button className="btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;