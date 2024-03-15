import React, { useState } from "react";
import StripeForm from "../StripeForm/StripeForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardModal from "../CardModal/CardModal";
import Modal from "react-bootstrap/Modal";
const stripePromise = loadStripe(
  `pk_test_51L3HzCFICgNuMVET4lm1alcn4VyaJfMWJm0ke7akqFag2hi9hvzX0ZHIYGh48uaHZh5f2T4dUVyA44XHPcBVwelS006dwqyc2O`
);
const Shipment = ({ onOrderSubmit, setShowOrderInput }) => {
  const [shipmentData, setShipmentData] = useState({
    ordered_by: "",
    phone: "",
    email: "",
    shipping_address: "",
    city: "",
    order_status: "Order Received",
    payment_method: "Cash On Delivery",
  });

  const [showShipmentModal, setShowShipmentModal] = useState(true);
  const [showStripeModal, setShowStripeModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStripePayment = async (stripeToken) => {
    try {
      setShowStripeModal(false);
      setShowShipmentModal(false);

      await makeAdditionalAPICall();
    } catch (error) {
      console.error("Error processing Stripe payment:", error);
    }
  };

  const makeAdditionalAPICall = async () => {
    console.log("Additional API call after successful payment");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    onOrderSubmit(shipmentData);

    if (shipmentData.payment_method === "Stripe") {
      setShowStripeModal(true);
    }
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
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Order
        </button>
      </form>
      <Modal show={showStripeModal} onHide={() => setShowStripeModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Payment with Stripe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Elements stripe={stripePromise}>
            <StripeForm
              onStripePayment={handleStripePayment}
              onClose={() => {
                setShowStripeModal(false);
                setShowOrderInput(false);
              }}
            />
          </Elements>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Shipment;
