import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./PaymentForm.css";
import MessageModal from "../../UI/MessageModal";
import Loader from "../../UI/Loader";

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

const PaymentForm = (props) => {
  const [succeeded, setSucceeded] = useState(false);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  
  const onCloseModal = () => {
    dispatch({ type: "CLEAR_CART" });
    window.location.href="/"; 
    setSucceeded(false);
  }
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: props.price*100,
          id,
        });
        if (response.data.success) {
          console.log("payment  succeeded!!! ");
          setSucceeded(true);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
  <div>
    {loading && <Loader/>}
    {!succeeded ? (
      <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button className="SubmitButton .button bg-pink-600 py-2 px-5 font-semibold text-xl rounded-md  hover:bg-pink-700 text-gray-100 w-full" type="submit">
          Pay
        </button>
      </form>
    ) : (
      <div>
       
        <MessageModal title = "Payment Successful" message = "Thank you for your purchase"  onClick={onCloseModal} />
        
      </div>
    )}
  </div>);
};

export default PaymentForm;
