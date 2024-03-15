import React from "react";
import StripeForm from "../StripeForm/StripeForm";

const CardModal = ({ onClose, showStripeForm, onStripePayment }) => {
  return (
    <div className="card-modal">
      <div className="card-modal-content">
        <h2>Payment Successful</h2>
        {showStripeForm && <StripeForm onStripePayment={onStripePayment} />}
        {!showStripeForm && <p>Thank you for your purchase!</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CardModal;
