import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./PaymentForm.css";

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
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
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
        <h1>Payment succeeded</h1>
      </div>
    )}
  </div>);
};

export default PaymentForm;
