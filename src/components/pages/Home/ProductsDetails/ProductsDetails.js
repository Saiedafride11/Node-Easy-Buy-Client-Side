import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ProductsDetailsSummery from '../ProductsDetailsSummery/ProductsDetailsSummery';
import './ProductsDetails.css';

const ProductsDetails = () => {
    const {productId} = useParams();
    const [products, setProducts] = useState([]);
    const [orders, setOrder] = useState();

    useEffect( () => {
        // fetch('http://localhost:5000/products')
        fetch('https://pacific-garden-66565.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    useEffect(() => {
        const newProduct = products?.filter(product => product._id === productId);
        setOrder(newProduct);
      }, [products, productId]);
    return (
        <Container>
            <Link to="/products">
                <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none', margin: "40px 0px 40px"}}>BACK TO PRODUCTS</Button>
            </Link>
            <div className="pb-5">
                {
                    orders?.length === 0 ?
                    <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>Loading...</h2>
                    :
                    orders?.map(order => <ProductsDetailsSummery order={order} key={order.key}></ProductsDetailsSummery>)
                }
            </div>
        </Container>
    );
};

export default ProductsDetails;