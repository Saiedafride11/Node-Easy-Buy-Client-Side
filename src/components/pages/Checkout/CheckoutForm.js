import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import useAuth from '../../hooks/useAuth';

const CheckoutForm = (props) => {
    // const {orderTotal, _id} = props.orderPrice;
    // const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();


    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    // const [clientSecret, setClientSecret] = useState('');

    // useEffect(() => {
    //     fetch('http://localhost:5000/create-payment-intent', {
    //     fetch('https://pacific-garden-66565.herokuapp.com/create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ orderTotal })
    //     })
    //         .then(res => res.json())
    //         .then(data => setClientSecret(data.clientSecret));
    // }, [orderTotal]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    setProcessing(true);

    // const {error, paymentMethod} = await stripe.createPaymentMethod({
    //   type: 'card',
    //   card,
    // });

    if (error) {
        setError(error.message);
        setSuccess('');
    } else {
        setError('')
    }
  

    //  payment intent
    // const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
    //     clientSecret,
    //     {
    //         payment_method: {
    //             card: card,
    //             billing_details: {
    //                 name: user?.displayName,
    //                 email: user?.email
    //             },
    //         },
    //     },
    // );

    // if (intentError) {
    //     setError(intentError.message);
    //     setSuccess('');
    // }
    // else {
    //     setError('');
    //     setSuccess('Your payment processed successfully.')
    //     setProcessing(false);
    //     // save to database
    //     const payments = {
    //         amount: paymentIntent.amount,
    //         created: paymentIntent.created,
    //         last4: paymentMethod.card.last4,
    //         transaction: paymentIntent.client_secret.slice('_secret')[0]
    //     }

    //     const url = `http://localhost:5000/payment/${_id}`;
    //     const url = `https://pacific-garden-66565.herokuapp.com/payment/${_id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(payments)
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    //     }

    }

   
    return (
        <div style={{width: "343px", padding: "20px", border: "1px solid #bcccdc", margin: '0 auto'}}>
            <form onSubmit={handleSubmit} style={{width: "300px"}}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                {   processing ? <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none', width: '100%', marginTop: '20px'}}>Loading</Button> :
                    <Button type="submit" disabled={!stripe} variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none', width: '100%', marginTop: '20px'}}>Pay</Button>
                }
                {
                    error && <p style={{color: 'red', textAlign: 'center', margin: '12px 0 -10px'}}>{error}</p>
                }
                {
                    success && <p style={{color: 'green', textAlign: 'center', margin: '12px 0 -10px'}}>{success}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;