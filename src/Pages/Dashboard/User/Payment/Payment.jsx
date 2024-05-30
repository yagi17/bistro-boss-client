import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../Component/Section/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  // TODO
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_HOSTING_KEY);

  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"payment confirmation"}
      ></SectionTitle>
      <div>
      <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
      </div>
    </div>
  );
};

export default Payment;
