import React, { useEffect, useState } from "react";
import useCartItems from "../../hooks/useCartItems";
import { useNavigate } from "react-router-dom";
import Shipment from '../Shipment/Shipment'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [cartItems, totalAmount] = useCartItems();
  const [showOrderInput, setShowOrderInput] = useState(false);
  const handleDelete = (productId) => { };

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

    if (!cartProductResponse.ok) {
      const errorData = await cartProductResponse.text();
      console.error("Cart Product Deletion Error:", errorData);
      throw new Error("Error removing cart products");
    }

    console.log("Cart products removed successfully");

    return true;
  } catch (error) {
    console.error("Error removing cart products:", error);
    throw error;
  }
};
const handleShipmentSubmit = async (shipmentData) => {
  try {
    const order_id = JSON.parse(localStorage.getItem("order_id"));
    const customer = JSON.parse(localStorage.getItem("customer_id"));
    const total = 0; 
    shipmentData = {
      ...shipmentData,
      order: order_id,
      customer,
      total,
    };

    const response = await fetch(
      "https://ahm-computer-backend.onrender.com/order/shipment/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shipmentData),
      }
    );

    if (!response.ok) {
      
      const errorData = await response.text();
      console.error("Shipment Error:", errorData);
      throw new Error("Error submitting shipment");
    }
    const cartId = JSON.parse(localStorage.getItem("cartId"));
    const cartProductRemoved = await removeCartProducts(cartId);
         localStorage.removeItem("cartId");
         localStorage.removeItem("product");

    if (!cartProductRemoved) {
      throw new Error("Error removing cart products");
    }

    console.log("Cart products removed successfully");
    console.log("Shipment submitted successfully");
  } catch (error) {
    console.error("Error submitting shipment:", error);
  }
};

  

     const handleOrderNow = async () => {
       try {
         setLoading(true);
         const customer = JSON.parse(localStorage.getItem("customer_id"));
         const cartId = JSON.parse(localStorage.getItem("cartId"));

         const cartResponse = await fetch(
           `https://ahm-computer-backend.onrender.com/cart/list/${cartId}/`
         );
         const cartData = await cartResponse.json();

         const orderData = {
           ordered_by: customer,
           total_amount: cartData.total,
           order_status: "Order Received",
         };

         console.log("Order data to be sent:", orderData);

         const orderResponse = await fetch(
           "https://ahm-computer-backend.onrender.com/order/list/",
           {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(orderData),
           }
         );

         if (!orderResponse.ok) {
           const errorData = await orderResponse.text();
           console.error("Order Placement Error:", errorData);
           throw new Error("Error placing order");
         }

         const orderResponseData = await orderResponse.json();
         localStorage.setItem("order_id", orderResponseData.id);
         console.log("Order placed successfully:", orderData);

         // Fetch the newly created order to get its ID
         const orderDetailResponse = await fetch(
           `https://ahm-computer-backend.onrender.com/order/list/${orderResponseData.id}/`
         );
         const orderDetailData = await orderDetailResponse.json();

         const cartProductsResponse = await fetch(
           `https://ahm-computer-backend.onrender.com/cart/cartProduct/?cart=${cartId}/`
         );
         const cartProductsData = await cartProductsResponse.json();

         for (const cartProduct of cartProductsData) {
           const orderProductData = {
             order: orderDetailData.id,
             product: cartProduct.product,
             price: cartProduct.price,
             quantity: cartProduct.quantity,
             subtotal: cartProduct.subtotal,
           };
           console.log("Product ID:", cartProduct.product);
           const orderProductResponse = await fetch(
             "https://ahm-computer-backend.onrender.com/order/orderProduct/",
             {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(orderProductData),
             }
           );

           if (!orderProductResponse.ok) {
             const errorData = await orderProductResponse.text();
             console.error("Order Product Creation Error:", errorData);
             throw new Error("Error creating order products");
           }
         }

         setShowOrderInput(true);
       } catch (error) {
         console.error("Error placing order:", error);
       } finally {
         setLoading(false);
       }
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
            onClick={() => {
              handleOrderNow();
              setShowOrderInput(true);
            }}
            type="button"
            className="btn btn-primary"
          >
            Order Now
          </button>
        </div>

        <Modal show={showOrderInput} onHide={() => setShowOrderInput(false)}>
          <Modal.Header closeButton>
            <Modal.Title className="fs-5">Order Now</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Shipment
              onOrderSubmit={handleShipmentSubmit}
              setShowOrderInput={setShowOrderInput}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Cart;
