// StripeForm.js

import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripeForm = ({ onPaymentSuccess, onPaymentFailure, handleClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleStripePayment = async () => {
    try {
      const cardElement = elements.getElement(CardElement);
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error("Stripe Payment Error:", error);
        throw new Error("Error creating payment method");
      }

      console.log("Payment Method:", paymentMethod);

      // Simulate a successful payment for this example
      return { token: "stripe-token", error: null };
    } catch (error) {
      console.error("Stripe Payment Error:", error);
      return { token: null, error: "Error processing payment" };
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { token, error } = await handleStripePayment();

    setLoading(false);

    if (token) {
      // Payment successful
      onPaymentSuccess();
    } else {
      // Payment failed
      onPaymentFailure();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={loading}>
        Pay with Stripe
      </button>
      <button type="button" onClick={handleClose}>
        Cancel
      </button>
    </form>
  );
};

export default StripeForm;
