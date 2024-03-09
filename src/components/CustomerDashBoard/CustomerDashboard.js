import React, { useEffect, useState } from "react";
const CustomerDashboard = () => {
  const [customerOrders, setCustomerOrders] = useState([]);
  const customerId = localStorage.getItem("customer_id");

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const orderResponse = await fetch(
          "https://ahm-computer-backend.onrender.com/order/list/"
        );
        const orderData = await orderResponse.json();

        const orderProductResponse = await fetch(
          "https://ahm-computer-backend.onrender.com/order/orderProduct/"
        );
        const orderProductData = await orderProductResponse.json();
        console.log("Order Product Data:", orderProductData); // Log order product data

        const shipmentResponse = await fetch(
          "https://ahm-computer-backend.onrender.com/order/shipment/"
        );
        const shipmentData = await shipmentResponse.json();

        const combinedData = orderData.map((order) => {
          const shipment = shipmentData.find((s) => s.order === order.id);
          const orderProducts = orderProductData.filter(
            (op) => op.order === order.id
          );

          return {
            ...order,
            shipment: shipment || {},
            order_products: orderProducts || [], // Ensure order_products is an array
          };
        });

        console.log("Combined Data:", combinedData); // Log combined data

        const filteredCustomerOrders = combinedData.filter(
          (order) => order.ordered_by === parseInt(customerId, 10)
        );
        setCustomerOrders(filteredCustomerOrders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrderData();
  }, [customerId]);

  return (
    <div className="container">
      <h1 className="text-center my-3">My Orders</h1>
      <table className="table table-bordered bold-table-border">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Total</th>
            <th>Status</th>
            <th>Shipping Address</th>
            <th>Payment Method</th>
            <th>Payment Completed</th>
            <th>Order Products</th>
          </tr>
        </thead>
        <tbody>
          {customerOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.total_amount}</td>
              <td>{order.order_status}</td>
              <td>{order.shipment?.shipping_address || "N/A"}</td>
              <td>{order.shipment?.payment_method || "N/A"}</td>
              <td>{order.shipment?.payment_completed ? "Yes" : "No"}</td>
              <td>
                {order.order_products?.length > 0 ? (
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Created At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.order_products.map((product) => (
                        <tr key={product.id}>
                          <td>{product.product}</td>
                          <td>{product.quantity}</td>
                          <td>{product.subtotal}</td>
                          <td>{product.created_at.slice(0, 16)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  "No Order Products"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDashboard;
