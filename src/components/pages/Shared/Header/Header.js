import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const {user, logOut} = useAuth();
    return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="header-container">
                    <Container>
                        <Navbar.Brand as={Link} to="/home"><span style={{color: "rgb(171, 122, 95)"}}>Easy-Buy</span></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                           
                            {   
                                user?.displayName ?
                                    <Button onClick={logOut} variant="light" style={{color: 'rgb(171, 122, 95)'}}>LogOut</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }&nbsp;&nbsp;
                            <Navbar.Text>
                                {   
                                    user?.displayName ? 
                                    ' Hello : '
                                    :
                                    ''
                                }
                            </Navbar.Text>
                            {
                                user?.displayName ?
                                    <NavDropdown title={user?.displayName} id="navbarScrollingDropdown">
                                        <div className="user-img">
                                            <img src={user?.photoURL} className="w-100 rounded-circle" alt="User" />
                                        </div>
                                        <p className="text-center">{user?.displayName}</p>
                                        {   
                                            user?.displayName ?
                                                <div>
                                                    <Nav.Link as={Link} to="/cart">Cart <FontAwesomeIcon icon={faShoppingCart}/></Nav.Link>
                                                    <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                                                </div>
                                            :
                                            ''
                                        }
                                    </NavDropdown>
                                :
                                ''
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
    );
};

export default Header;