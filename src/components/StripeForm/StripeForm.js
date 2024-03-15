import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripeForm = ({ onStripePayment, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    try {
      const { token, error } = await stripe.createToken(cardElement);
      if (error) {
        setError(error.message);
      } else {
        setError(null);
        onStripePayment(token.id);
        onClose();
      }
    } catch (error) {
      console.error("Error creating token:", error);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="card-details" className="form-label">
            Card details
          </label>
          <CardElement className="form-control" id="card-details" />
        </div>

        {error && <div className="text-danger">{error}</div>}

        <button type="submit" className="btn btn-primary">
          Pay with Stripe
        </button>
      </form>
    </div>
  );
};

export default StripeForm;
