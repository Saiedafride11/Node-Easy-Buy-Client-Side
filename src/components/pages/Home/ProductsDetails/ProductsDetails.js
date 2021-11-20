import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import './ProductsDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ProductsDetails = () => {
    const {productId} = useParams();
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState();
    const [quantity, setQuantity] = useState(1);
    
    useEffect( () => {
        fetch('/product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])



    useEffect(() => {
        const newProduct = products?.filter(product => product.key === productId);
        setCart(newProduct);
      }, [products]);
    return (
        <Container>
            <Link to="/products">
                <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none', margin: "40px 0px 40px"}}>BACK TO PRODUCTS</Button>
            </Link>
            <div className="pb-5">
                {
                    products?.length === 0 ?
                    <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                    :
                    carts?.map(cart => <div>
                        <div className="product-details">
                            <div>
                                <img src={cart.img} className="w-100" height="550px" alt="" />
                            </div>
                            <div className="ms-5">
                                <h2>{cart.title}</h2>
                                <div className="d-flex mb-2">
                                    <FontAwesomeIcon icon={faStar} style={{color: 'rgb(255, 185, 0)'}}/>&nbsp;
                                    <p className="card-text">{cart.review}</p>
                                </div>
                                <h6 style={{ color: "#ab7a5f"}}><strong>{cart.price}</strong></h6>
                                <p className="card-text">{cart.details}</p>
                                <p className="card-text"><strong>Available : </strong>&nbsp;&nbsp;{cart.available}</p>
                                <p className="card-text"><strong>SKU : </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cart.sku}</p>
                                <p className="card-text"><strong>Brand : </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cart.brand}</p>
                                <hr />
                                <div className="d-flex">
                                    <p className="card-text"><strong>Colors : </strong></p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    {
                                            cart.colors?.length === 0 ?
                                            <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>No Colors Available</h2>
                                            :
                                            cart.colors?.map((color, index) => <div className="" key={index}>
                                                <button className="color-btn" style={{backgroundColor: `${color.color}`}}></button>
                                            </div>)
                                    }
                                </div>
                                <div className="d-flex">
                                    <button onClick={ () => setQuantity(quantity < 2 ? 1 : quantity - 1)} style={{border: 'none', backgroundColor: "transparent", fontSize: "30px"}}>-</button>&nbsp;&nbsp;
                                    <h2>{quantity}</h2> 
                                    &nbsp;&nbsp;<button onClick={ () => setQuantity(quantity + 1)} style={{border: 'none', backgroundColor: "transparent", fontSize: "30px"}}>+</button>
                                </div>
                                <Link to="/cart">
                                    <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none'}}>ADD TO CART</Button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default ProductsDetails;