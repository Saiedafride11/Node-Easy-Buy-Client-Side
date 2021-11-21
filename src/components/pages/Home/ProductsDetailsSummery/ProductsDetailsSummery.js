import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ProductsDetailsSummery = (props) => {
    const {img, title, review, price, details, available, sku, brand, colors, _id} = props.order;
    
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState(colors[0]);


    const handleOrderClick = () => {
        const singleOrder = {
            img, title, price, quantity, totalPrice: quantity * price, color, _id
        }

        // fetch('http://localhost:5000/orders', {
        fetch('https://pacific-garden-66565.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(singleOrder)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                console.log("order succesfully")
            }
        })
    }
    return (
        <div>
            <div className="product-details-summery">
                <div>
                    <img src={img} className="w-100" height="550px" alt="" />
                </div>
                <div className="ms-5 product-details-summery-inner">
                    <h2>{title}</h2>
                    <div className="d-flex mb-2">
                        <FontAwesomeIcon icon={faStar} style={{color: 'rgb(255, 185, 0)'}}/>&nbsp;
                        <p className="card-text">{review}</p>
                    </div>
                    <h6 style={{ color: "#ab7a5f"}}><strong>${price}</strong></h6>
                    <p className="card-text">{details}</p>
                    <p className="card-text"><strong>Available : </strong>&nbsp;&nbsp;{available}</p>
                    <p className="card-text"><strong>SKU : </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sku}</p>
                    <p className="card-text"><strong>Brand : </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{brand}</p>
                    <hr />
                    <div className="d-flex">
                        <p className="card-text"><strong>Colors : </strong></p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {
                                colors?.length === 0 ?
                                <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>No Colors Available</h2>
                                :
                                colors?.map((c, index) => ( <button onClick={() => setColor(c)}
                                      className="color-btn"
                                      style={{ backgroundColor: `${c}` }}
                                      key={index}
                                    >
                                      {color === c ? (<FontAwesomeIcon icon={faCheck} style={{ color: "#fff" }} />) : null}
                                    </button>
                                  ))
                        }
                    </div>
                    <div className="d-flex">
                        <button onClick={ () => setQuantity(quantity < 2 ? 1 : quantity - 1)} style={{border: 'none', backgroundColor: "transparent", fontSize: "30px"}}>-</button>&nbsp;&nbsp;
                        <h2>{quantity}</h2> 
                        &nbsp;&nbsp;<button onClick={ () => setQuantity(quantity + 1)} style={{border: 'none', backgroundColor: "transparent", fontSize: "30px"}}>+</button>
                    </div>
                    <Link to="/cart">
                        <Button onClick={handleOrderClick} variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none'}}>ADD TO CART</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailsSummery;