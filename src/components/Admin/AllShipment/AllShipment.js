import React, { useEffect, useState } from "react";

const Shipment = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    // Fetch shipment data from the API
    const fetchShipmentData = async () => {
      try {
        const response = await fetch(
          "https://ahm-computer-backend.onrender.com/order/shipment/"
        );
        const data = await response.json();
        setShipments(data);
      } catch (error) {
        console.error("Error fetching shipment data:", error);
      }
    };

    fetchShipmentData();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Shipment Details</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Order ID</th>
            <th>Ordered By</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Shipping Address</th>
            <th>City</th>
            <th>Total</th>
            <th>Payment Method</th>
            <th>Payment Completed</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.id}>
              <td>{shipment.id}</td>
              <td>{shipment.customer}</td>
              <td>{shipment.order}</td>
              <td>{shipment.ordered_by}</td>
              <td>{shipment.phone}</td>
              <td>{shipment.email}</td>
              <td>{shipment.shipping_address}</td>
              <td>{shipment.city}</td>
              <td>{shipment.total}</td>
              <td>{shipment.payment_method}</td>
              <td>{shipment.payment_completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shipment;
