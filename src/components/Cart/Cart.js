import React, { useEffect, useState } from "react";
import useCartItems from "../../hooks/useCartItems";

const Cart = () => {
const  [cartItems, totalAmount]  = useCartItems();

  const handleDelete = (productId) => {
    // Your existing delete logic remains the same
  };

  const handleOrderNow = () => {
    // Your existing order now logic remains the same
  };

  return (
    <>
      <h1 className="text-center">My Cart</h1>
      <div className="w-75 mx-auto my-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((cartProduct) => (
                <tr key={cartProduct.id}>
                  <td>{cartProduct.id}</td>
                  <td>{cartProduct.product.name}</td>
                  <td>{cartProduct.quantity}</td>
                  <td>{cartProduct.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(cartProduct.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  <h2 className="text-center">Not Found !!!</h2>
                </td>
              </tr>
            )}
            {/* Total Price Row */}
            <tr>
              <td colSpan="2"></td>
              <td className="fs-5">Total Price:</td>
              <td className="fs-5">{totalAmount}</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="my-2 text-right">
          <button className="btn btn-primary" onClick={handleOrderNow}>
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
