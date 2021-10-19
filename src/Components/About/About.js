import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import about1 from '../../img/about1.jpg'
import about2 from '../../img/about2.jpg'
import about3 from '../../img/about3.jpg'
import about from '../../img/about.jpg'

import './About.css';

const About = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner "
                        src={about1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 banner"
                        src={about2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner "
                        src={about3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
            <h1 className='mt-5 text text-center mb-5'>WELCOME TO HEALTH GRADE DIAGNOSTIC LABS</h1>
            <Container>
                <Row className='aboutt'>
                    <Col sm={8}> <img
                        className="d-block   mt-5"
                        src={about}
                        alt="Second slide"
                    /></Col>
                    <Col sm={4}>
                        <p className=' mt-5'>We strive to excel in many fields of laboratory medicine including routine testing, molecular, anatomical pathology, toxicology and more. We provide most results same or next day from arrival to our NJ facility through multiple methods such as electronically through our website, hand delivered by our concierge couriers, or interfaced to your health record systems.

                            Easy to read color graphic reports synthesize test results into actionable information and facilitate physician-patient communication. Our lab is committed to the highest standards and has a team of medical experts who provide consultation services to our physicians such that they can order the correct tests and understand the patient results.</p>
                    </Col>
                </Row>

            </Container>
            <div className='footer mt-5 pt-4'>
                <p>© 2000 - 2021 Health Grade Diagnostic Labs. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default About;