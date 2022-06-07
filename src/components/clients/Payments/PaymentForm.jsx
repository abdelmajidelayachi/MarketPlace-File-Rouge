import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
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
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = (props) => {
  const [succeeded, setSucceeded] = useState(false);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartItems);

  const onCloseModal = () => {
    dispatch({ type: "CLEAR_CART" });
    window.location.href = "/";
    setSucceeded(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const amount = products.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: props.price * 100,
          id,
        });
        if (response.data.success) {
          console.log("payment  succeeded!!! ");
          const userOrderData = JSON.parse(localStorage.getItem("user"));
          // console.log(userOrderData);
          const data = new FormData();
          data.append("orderOf", userOrderData.id);
          data.append("tel", userOrderData.tel);
          data.append("address", userOrderData.address);
          data.append("city", userOrderData.city);
          data.append("country", userOrderData.country);
          data.append("amount", amount);
          // data.append('amine', products)
          data.append("products", JSON.stringify(products));
          // data.append('store_user_id',)
          try {
            const response = await axios.post(
              "http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/order/add_order",
              data
            );
            console.log(response.data);
          } catch (err) {
            console.log(err);
          }

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
      {loading && <Loader />}
      {!succeeded ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <div className="flex justify-end mr-3">
            <button
              className=" bg-blue-600 font-semibold text-xl  rounded-md  hover:bg-blue-700 text-gray-100 w-24  px-2 py-2 mx-0.5 "
              type="submit"
            >
              Pay
            </button>
          </div>
        </form>
      ) : (
        <div>
          <MessageModal
            title="Payment Successful"
            message="Thank you for your purchase"
            onClick={onCloseModal}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
