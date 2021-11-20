import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [carts, setCarts] = useState([]);
    useEffect( () => {
        // fetch('http://localhost:5000/orders')
        fetch('https://pacific-garden-66565.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            setCarts(data)
        })
    }, [carts])

    // Delete
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete?')
        if(proceed){
            // const url = `http://localhost:5000/orders/${id}`;
            const url = `https://pacific-garden-66565.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then( data => {
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = carts.filter(cart => cart._id !== id);
                    setCarts(remaining)
                }
            })
            }
    }
    return (
        <Container className="py-5">
                <div className="mx-auto">
                {
                    carts?.length === 0 ?
                    <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>No Any Product Show</h2>
                    :
                    <Table hover responsive="sm" style={{border: '1px solid rgb(171, 122, 95)'}}>
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th></th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        {
                            carts?.map((cart, i) => <tbody key={cart._id}>
                                <tr>
                                    <td>{i}</td>
                                    <td style={{textTransform: 'capitalize'}} style={{width: "10%"}}>
                                        <img src={cart.img} style={{width: "100%"}} height="100px" alt="" />
                                    </td>
                                    <td style={{textTransform: 'capitalize'}}>{cart.title} <br/> <span className="d-flex align-items-center">Color : &nbsp;<button className="color-btn2" style={{backgroundColor: `${cart.color}`}}></button></span></td>
                                    <td>{cart.price}</td>
                                    <td>{cart.quantity}</td>
                                    <td>{cart.totalPrice.toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => handleDeleteOrder(cart._id)} className="btn text-white" style={{backgroundColor: 'rgb(171, 122, 95'}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </Table>
                }
            </div>
            <hr />
            <div className="pt-3 pb-5">
                <Link to="/products">
                    <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none'}}>Continue Shopping</Button>
                </Link>
           </div>
           <div style={{width: "300px", padding: "20px", border: "1px solid #bcccdc", margin: '0 auto'}}>
               <h6><strong>Subtotal :</strong></h6>
               <h6>Shipping Fee : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$5.34</h6>
               <hr />
               <h3>Order Total : {}</h3>
               <Link to="/checkout">
                    <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none', width: '100%'}}>proceed to checkout</Button>
                </Link>
           </div>
        </Container>
    );
};

export default Cart;