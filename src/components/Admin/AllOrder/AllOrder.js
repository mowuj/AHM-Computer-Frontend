import React, { useEffect, useState } from "react";

import "./AllOrder.css";

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("Order Received");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [newOrderStatus, setNewOrderStatus] = useState("");
  const orderStatusOptions = [
    "Order Received",
    "Order Completed",
    "Order Canceled",
  ];

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

      const combinedData = orderData.map((order) => ({
        ...order,
        order_products: orderProductData.filter((op) => op.order === order.id),
      }));

      setOrders(combinedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  const handleUpdateOrderStatus = async () => {
    if (!selectedOrderId || !newOrderStatus) {
      return;
    }
    try {
      const response = await fetch(
        `https://ahm-computer-backend.onrender.com/order/list/${selectedOrderId}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ order_status: newOrderStatus }),
        }
      );

      if (response.ok) {
        fetchOrderData();

        setSelectedOrderId(null);
        setNewOrderStatus("");
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const filteredOrders = orders.filter((order) => {
    switch (selectedStatus) {
      case "Order Received":
        return order.order_status === "Order Received";
      case "Order Completed":
        return order.order_status === "Order Completed";
      case "Order Canceled":
        return order.order_status === "Order Canceled";
      default:
        return false;
    }
  });

  return (
    <div className="container">
      <h1 className="text-center mb-3">All Orders</h1>
      <div className="btn-group mb-3">
        {orderStatusOptions.map((status) => (
          <button
            key={status}
            type="button"
            className={`btn ${selectedStatus === status ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setSelectedStatus(status)}
          >
            {status}
          </button>
        ))}
      </div>
      <table className="table table-bordered bold-table-border">
        {/* Render orders based on the selected status */}
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Total</th>
            <th>Status</th>
            {selectedStatus === "Order Received" && <th>Update Status</th>}
            <th>Order Products</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.total_amount}</td>
              <td>{order.order_status}</td>
              {selectedStatus === "Order Received" && (
                <td>
                  <div>
                    <select
                      value={selectedOrderId === order.id ? newOrderStatus : ""}
                      onChange={(e) => {
                        setSelectedOrderId(order.id);
                        setNewOrderStatus(e.target.value);
                      }}
                    >
                      <option value="" disabled>
                        Order Status
                      </option>
                      {orderStatusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    <br />
                    <button
                      className="btn btn-primary ml-2"
                      onClick={handleUpdateOrderStatus}
                    >
                      Update
                    </button>
                  </div>
                </td>
              )}
              <td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default AllOrder;
