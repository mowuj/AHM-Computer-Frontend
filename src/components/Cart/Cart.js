import React, { useEffect, useState } from "react";
import useCartItems from "../../hooks/useCartItems";
import OrderInput from "../OrderInput/OrderInput";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const [showOrderInput, setShowOrderInput] = useState(false);
  const navigate = useNavigate(); 
const  [cartItems, totalAmount]  = useCartItems();
  const handleDelete = (productId) => {
    // Your existing delete logic remains the same
  };

  const removeCartProducts = async (cartId) => {
    try {
      const cartProductResponse = await fetch(
        `https://ahm-computer-backend.onrender.com/cart/list/${cartId}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if cart product removal was successful
      if (!cartProductResponse.ok) {
        const errorData = await cartProductResponse.text();
        console.error("Cart Product Deletion Error:", errorData);
        throw new Error("Error removing cart products");
      }

      console.log("Cart products removed successfully");

      return true; // Indicate success if needed
    } catch (error) {
      console.error("Error removing cart products:", error);
      throw error; // Re-throw the error if needed
    }
  };


  const handleOrderNow = async (orderFormData) => {
    try {
      // Retrieve customer data from local storage
      const customer = JSON.parse(localStorage.getItem("customer_id"));
      const cartId = JSON.parse(localStorage.getItem("cartId"));

      // Step 1: Prepare order data
      const formattedOrderData = {
        customer: customer,
        ordered_by: orderFormData.ordered_by,
        phone: orderFormData.phone,
        email: orderFormData.email,
        shipping_address: orderFormData.shipping_address,
        city: orderFormData.city,
        total: totalAmount,
        order_status: orderFormData.order_status,
        payment_method: orderFormData.payment_method,
        payment_completed: false,
      };

      // Log the order data before making the fetch request
      console.log("Order data to be sent:", formattedOrderData);

      // Step 2: Send order data to the server
      const orderResponse = await fetch(
        "https://ahm-computer-backend.onrender.com/order/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedOrderData),
        }
      );

      if (!orderResponse.ok) {
        const errorData = await orderResponse.text();
        console.error("Order Placement Error:", errorData);
        throw new Error("Error placing order");
      }

      console.log("Order placed successfully:", formattedOrderData);

      const cartProductRemoved = await removeCartProducts(cartId);

      if (!cartProductRemoved) {
        throw new Error("Error removing cart products");
      }

      console.log("Cart products removed successfully");

      localStorage.removeItem("cartId");

      navigate("/order-confirmation");
    } catch (error) {
      console.error("Error placing order:", error);
      
    }
  };
 const toggleOrderInputModal = () => {
   setShowOrderInput(!showOrderInput);
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
          <button
            type="button"
            className="btn btn-primary"
            onClick={toggleOrderInputModal}
          >
            Order Now
          </button>
        </div>

        {/* Bootstrap OrderInput Modal */}
        <div
          className={`modal ${showOrderInput ? "show" : ""}`}
          style={{ display: showOrderInput ? "block" : "none" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fs-5">Order Now</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleOrderInputModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <OrderInput onOrderSubmit={handleOrderNow} />
              </div>
              
            </div>
          </div>
        </div>

        {showOrderInput && (
          <div
            className="modal-backdrop show"
            style={{ display: "block" }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Cart;
