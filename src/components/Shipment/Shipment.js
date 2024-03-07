import React, { useState } from "react";

const Shipment = ({ onOrderSubmit }) => {
  const [shipmentData, setShipmentData] = useState({
    ordered_by: "",
    phone: "",
    email: "",
    shipping_address: "",
    city: "",
    order_status: "Order Received",
    payment_method: "Cash On Delivery",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onOrderSubmit(shipmentData);
  };

  return (
    <div className="col-md-12">
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="ordered_by" className="form-label">
            Ordered By:
          </label>
          <input
            type="text"
            name="ordered_by"
            value={shipmentData.ordered_by}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            value={shipmentData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={shipmentData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="shipping_address" className="form-label">
            Shipping Address:
          </label>
          <input
            type="text"
            name="shipping_address"
            value={shipmentData.shipping_address}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            name="city"
            value={shipmentData.city}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="payment_method" className="form-label">
            Payment Method:
          </label>
          <select
            name="payment_method"
            value={shipmentData.payment_method}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="Stripe">Stripe</option>
            {/* Add other payment methods as needed */}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Shipment;
