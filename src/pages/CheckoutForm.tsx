import { useState, FormEvent } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentIntentResult } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_REACT_PUBLISHABLE_KEY);

const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError('Card element not found.');
      return;
    }

    const result: PaymentIntentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (result.error) {
      setError(result.error.message || 'An error occurred.');
      setSuccess('');
    } else if (result.paymentIntent?.status === 'succeeded') {
      setSuccess('Payment successful!');
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay</button>
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
    </form>
  );
};

const Payment = ({ clientSecret }: { clientSecret: string }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  );
};

export default Payment;
