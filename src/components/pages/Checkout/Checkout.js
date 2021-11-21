import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwnqrGpYkDLgyl1Zi7G6glUml9pBBKkaPLaLWQdEovIXwnpU2Cw8MJBXaf4MRwfIf1IPvCUv0DyDGicZwz6rvev00NRottOy8');

const Checkout = () => {
    document.title = 'Checkout';
    const {user} = useAuth();
    // const [orderPrices, setOrderPrice] = useState([])
    // useEffect(() => {
    //     // fetch('http://localhost:5000/payment')
    //     fetch('https://pacific-garden-66565.herokuapp.com/payment')
    //     .then(res => res.json())
    //     .then(data => setOrderPrice(data))
    // },[])
    return (
        <div className="container text-center">
            <h2>Hello, {user?.displayName}</h2>
            {/* {orderPrices?.map(orderPrice => <p key={orderPrice._id}>Your total is ${orderPrice.orderTotal}</p>)} */}
            <p>Test Card Number: 4242 4242 4242 4242</p>
                
           {/* { orderPrices?.map(orderPrice => <div key={orderPrice._id}>{orderPrice.orderTotal &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm orderPrice={orderPrice}/>
                </Elements>}
                </div>
           )} */}

           <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
        </div>
    );
};

export default Checkout;