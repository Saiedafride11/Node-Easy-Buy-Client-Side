import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    document.title = 'About Us';
    return (
        <>
        <div className="py-5 mb-5" style={{backgroundColor: "#eaded7"}}>
                <Container>
                    <h2>Home / About</h2>
                </Container>
            </div>
            <div className="pb-5">
                <div className="container">
                <div className="product-details">
                    <div>
                        <img src="https://i.ibb.co/BjQKCRJ/about.jpg" className="w-100" alt="" /></div>     
                    <div className="d-flex align-items-center ms-4">
                        <div>
                            <h2>Our Story</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                        </div>     
                    </div>     
                </div>
                </div>
            </div>
        </>
    );
};

export default About;