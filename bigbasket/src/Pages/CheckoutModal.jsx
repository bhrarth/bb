import React, { useState } from "react";
import Modal from "react-modal";
import { Navigate, useNavigate, } from "react-router-dom";
import Home from "./Home";

const CheckoutModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const navigate = useNavigate()
  const handleSubmit = () => {

    // Perform any validation you need before submitting
    if (name && address && cardNumber) {
      alert("thank you for shopping check your sms to confirm the order")
      onSubmit({ name, address, cardNumber });
      navigate('/')
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Enter Your Details</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Card Number:
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </Modal>
  );
};

export default CheckoutModal;
