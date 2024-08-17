import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  }
  return stripePromise;
};

export default getStripe; 