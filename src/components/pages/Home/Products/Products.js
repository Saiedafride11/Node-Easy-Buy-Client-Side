import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductsSummery from '../ProductsSummery/ProductsSummery';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        // fetch('http://localhost:5000/products')
        fetch('https://pacific-garden-66565.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <h2 className="text-center py-5">Featured Products</h2>
            {   products?.length === 0 ?
                    <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                :
                <div className="products-container">
                    {
                        products?.slice(0, 3).map(product => <ProductsSummery product={product} key={product._id}></ProductsSummery>)
                    }
                </div>
            }
           <div className="pt-3 pb-5 text-center">
                <Link to="/products">
                    <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none'}}>All Products</Button>
                </Link>
           </div>
        </Container>
    );
};

export default Products;