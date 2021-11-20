import React from 'react';
import { Card } from 'react-bootstrap';
import './AllProductsSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const AllProductsSummery = (props) => {
    const {title, price, img, _id} = props.product;
    const history = useHistory();

    const handleProduct = () => {
        history.push(`/product/${_id}`)
    }
    return (
        <>
            <button onClick={handleProduct} style={{border: 'none', backgroundColor: 'transparent'}}>
                <div className="all-products-summery">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Text>
                                <span>{title}</span>
                                <span>${price}</span>
                            </Card.Text>
                        </Card.Body>
                        <div className="hover-box">
                            <ul>
                                <li><FontAwesomeIcon icon={faSearch} /></li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </button>
        </>
    );
};

export default AllProductsSummery;