import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllProductsSummery from '../AllProductsSummery/AllProductsSummery';
import './AllProducts.css';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect( () => {
        // fetch('http://localhost:5000/products')
        fetch('https://pacific-garden-66565.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        })
    }, [])

    const handleSearch = event => {
        // console.log(event.target.value);
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
        <>
            <div className="py-5 mb-5" style={{backgroundColor: "#eaded7"}}>
                <Container>
                    <h2>Home / Products</h2>
                </Container>
            </div>
            <div className="search-container text-center py-5">
                <input type="text" className="w-75" onChange={handleSearch} placeholder="Type here to search........." />
            </div>
            <h2 className="text-center py-3">Total <span style={{color: "#ab7a5f"}}>{displayProducts?.length}</span> Products Found</h2>
            <Container>
                {   displayProducts?.length === 0 ?
                        <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>No Any Product Show</h2>
                    :
                    <div className="all-products-container">
                        {
                            displayProducts?.map(product => <AllProductsSummery product={product} key={product._id}></AllProductsSummery>)
                        }
                    </div>
                }
            </Container>
            <div className="py-5 text-center">
                <Link to="/home">
                    <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none'}}>Back Home</Button>
                </Link>
           </div>
        </>
    );
};

export default AllProducts;