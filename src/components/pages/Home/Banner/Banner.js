import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <div className="banner-container">
                <div className="banner-left">
                    <h1>Design Your <br/> Comfort Zone</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                        <Link to="/products">
                            <Button variant="primary" style={{backgroundColor: '#ab7a5f', border: 'none'}}>Shop Now</Button>
                        </Link>
                </div>
                <div className="banner-right">
                    <img src="https://i.ibb.co/PY0r1vH/banner.png"  className="w-100" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;