import React from 'react';
import { Container } from 'react-bootstrap';
import './Furniture.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faTools, faHistory } from '@fortawesome/free-solid-svg-icons'

const furnitures = [
    {
        "id": "01",
        "icon": faCog,
        "title": "Mission",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
    },
    {
        "id": "02",
        "icon": faTools,
        "title": "Vision",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
    },
    {
        "id": "03",
        "icon": faHistory,
        "title": "History",
        "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
    },
]

const Furniture = () => {
    return (
        <div className="furniture-container">
            <Container>
                <div className="furniture-top-section">
                    <div className="furniture-top-left">
                        <h2>Custom Furniture <br/> Built Only For You</h2>
                    </div>
                    <div className="furniture-top-right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                    </div>
                </div>

                <div className="furniture-inner">
                    {
                        furnitures?.map(furniture => <div key={furniture.id} className="furniture-inner-details">
                            <div>
                                <div className="furniture-icon">
                                    <FontAwesomeIcon icon={furniture.icon}/>
                                </div>
                                <h3>{furniture.title}</h3>
                                <p>{furniture.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Furniture;