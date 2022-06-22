import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY="pk_test_51KyM8LIcy5zVz0tYel5JZGkT0Je44YVw2kl95xhRvTcKm9HuwDcZpb819X8gZCh8ghriOIF1M0j9DnpGbqdviEcT00pWM7gJ0T"

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainers = (props) => {
  return (
    <Elements stripe={stripeTestPromise}>
       <PaymentForm price={props.price} />
    </Elements>
  )
}

export default StripeContainers