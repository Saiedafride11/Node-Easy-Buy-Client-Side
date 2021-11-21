import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllProductsSummery from '../AllProductsSummery/AllProductsSummery';
import './AllProducts.css';

const AllProducts = () => {
    document.title = 'Products';
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

    // ---------------------------------------------------------------------------
    // category filter
    const handleCategoryAll = () => {
        setDisplayProducts([...products]);
    }
    const handleCategoryOffice = () => {
        const newProduct = products?.filter(product => product.category === 'Office');
        setDisplayProducts(newProduct);
    }
    const handleCategoryLivingRoom = () => {
        const newProduct = products?.filter(product => product.category === 'Living Room');
        setDisplayProducts(newProduct);
    }
    const handleCategoryKitchen = () => {
        const newProduct = products?.filter(product => product.category === 'Kitchen');
        setDisplayProducts(newProduct);
    }
    const handleCategoryBedroom = () => {
        const newProduct = products?.filter(product => product.category === 'Bedroom');
        setDisplayProducts(newProduct);
    }
    const handleCategoryDining = () => {
        const newProduct = products?.filter(product => product.category === 'Dining');
        setDisplayProducts(newProduct);
    }
    const handleCategoryKids = () => {
        const newProduct = products?.filter(product => product.category === 'Kids');
        setDisplayProducts(newProduct);
    }
    // ---------------------------------------------------------------------------
    // brand filter
    const handleBrandAll = () => {
        setDisplayProducts([...products]);
    }
    const handleBrandMarcos = () => {
        const newProduct = products?.filter(product => product.brand === 'marcos');
        setDisplayProducts(newProduct);
    }
    const handleBrandLiddy = () => {
        const newProduct = products?.filter(product => product.brand === 'Liddy');
        setDisplayProducts(newProduct);
    }
    const handleBrandIkea = () => {
        const newProduct = products?.filter(product => product.brand === 'Ikea');
        setDisplayProducts(newProduct);
    }
    const handleBrandCaressa = () => {
        const newProduct = products?.filter(product => product.brand === 'caressa');
        setDisplayProducts(newProduct);
    }

    // ---------------------------------------------------------------------------
    // color filter
    const handleBlueColor = () => {
        const newProduct = products?.filter(product => product.color === 'blue');
        setDisplayProducts(newProduct);
    }
    const handleRedColor = () => {
        const newProduct = products?.filter(product => product.color === 'red');
        setDisplayProducts(newProduct);
    }
    const handleGreenColor = () => {
        const newProduct = products?.filter(product => product.color === 'green');
        setDisplayProducts(newProduct);
    }
    const handleBlackColor = () => {
        const newProduct = products?.filter(product => product.color === 'black');
        setDisplayProducts(newProduct);
    }
    const handleOrangeColor = () => {
        const newProduct = products?.filter(product => product.color === 'orange');
        setDisplayProducts(newProduct);
    }

    // ---------------------------------------------------
    const handlePriceChange = () => {
        const newProduct = products?.filter(product => product.price >= 1000);
        setDisplayProducts(newProduct);
    }


    return (
        <>
            <div className="py-5 mb-5" style={{backgroundColor: "#eaded7"}}>
                <Container>
                    <h2>Home / Products</h2>
                </Container>
            </div>
                <Container className="all-products-container">
                    <div className="search-container py-4">
                        <input type="text" className="w-100" onChange={handleSearch} placeholder="Search......." />
                        <h6 className="mt-3"><strong>Category</strong></h6>
                        <button onClick={handleCategoryAll} className='all-product-btn'>All</button>
                        <button onClick={handleCategoryOffice} className='all-product-btn'>Office</button>
                        <button onClick={handleCategoryLivingRoom} className='all-product-btn'>Living Room</button>
                        <button onClick={handleCategoryKitchen} className='all-product-btn'>Kitchen</button>
                        <button onClick={handleCategoryBedroom} className='all-product-btn'>Bedroom</button>
                        <button onClick={handleCategoryDining} className='all-product-btn'>Dining</button>
                        <button onClick={handleCategoryKids} className='all-product-btn'>Kids</button>

                        <h6 className="mt-3"><strong>Company</strong></h6>
                        <select name="cars" id="cars">
                            <option onChange={handleBrandAll} className="company" value="all">all</option>
                            <option onChange={handleBrandMarcos} className="company" value="marcos">marcos</option>
                            <option onChange={handleBrandLiddy} className="company" value="liddy">liddy</option>
                            <option onChange={handleBrandIkea} className="company" value="ikea">ikea</option>
                            <option onChange={handleBrandCaressa} className="company" value="caressa">caressa</option>
                        </select>

                        <h6 className="mt-3"><strong>Colors</strong></h6>
                        <div className="d-flex">
                            <h6 style={{color: '#617d98'}}>All</h6> &nbsp;
                            <button onClick={handleBlueColor} className="category-color-btn" style={{backgroundColor: "blue"}}></button>
                            <button onClick={handleRedColor} className="category-color-btn" style={{backgroundColor: "red"}}></button>
                            <button onClick={handleGreenColor} className="category-color-btn" style={{backgroundColor: "green"}}></button>
                            <button onClick={handleBlackColor} className="category-color-btn" style={{backgroundColor: "black"}}></button>
                            <button onClick={handleOrangeColor} className="category-color-btn" style={{backgroundColor: "orange"}}></button>
                        </div>

                        <h6 className="mt-3"><strong>Price</strong></h6>
                        <h6 style={{color: '#617d98'}}>$3,099.99</h6>
                        <input type="range" onChange={handlePriceChange}/>
                    </div>
                    <div>
                        <div className="all-products-header">
                            <h2 className="text-center py-3">Total <span style={{color: "#ab7a5f"}}>{displayProducts?.length}</span> Products Found</h2>
                            <div className="d-flex align-items-center">
                                <p style={{margin: "0px", fontSize: "15px"}}>Sort By&nbsp;</p>
                                <select name="" id="">
                                    <option className="company" value="all">Price (Lowest)</option>
                                    <option className="company" value="all">Price ( Highest )</option>
                                    <option className="company" value="all">Name( A - Z )</option>
                                    <option className="company" value="all">Name( Z - A )</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {   displayProducts?.length === 0 ?
                                    <h2 style={{ color: '#ab7a5f', margin: '50px 0', textAlign: 'center'}}>No Any Product Show</h2>
                                :
                                <div className="all-products-inner">
                                    {
                                        displayProducts?.map(product => <AllProductsSummery product={product} key={product._id}></AllProductsSummery>)
                                    }
                                </div>
                            }
                        </div>
                    </div>
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