const express = require('express');
const app = express();
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

app.post('/payment', cors(), async (req, res) => {
  let {amount,id} = req.body;
  try {
    const paymentIntent  = await stripe.paymentIntents.create({
      amount, 
      currency: 'USD',
      description: 'Payment for product',
      payment_method:id,
      confirm:true
    })
    console.log("payment:",paymentIntent);
    res.json({
      message : "Payment Successful",
      success : true,
    })
    
  } catch (error) {
    console.log('error',error);
    res.json({
      message : "Payment Failed",
      success : false,
    })
  }
});


app.listen(process.env.PORT || 4000,()=>
{
    console.log('PORT 4000 is running');
})