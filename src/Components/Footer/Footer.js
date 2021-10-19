import React from 'react';
import { FaLocationArrow, FaPhone, FaMailBulk } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Container>
                <Row md={4} className='item'>
                    <Col className='mt-5'>
                        <h3 className='mt-2 text'>WHY CHOOSE US</h3>
                        <h5 className='mt-3'>No more ... complicated, redundant paperwork or late reports.</h5>
                        <p className='mt-4'>Unanswered inquiries to corporate call centers. Patients forced to suffer through long wait times in crowded drawing stations.

                        </p>
                    </Col>

                    <Col xs={6} className='mt-5'>

                        <h5 className='mt-3'>OUR INDEPENDENT ADVANTAGE</h5>
                        <p className='mt-4'>As a service oriented, independent and fully certified provider, Accurate Diagnostic Labs can streamline the process and put the focus where it belongs– on you, the client.

                        </p></Col>
                    <Col className='mt-5'>

                        <h5 className='mt-3'>24/7 SUPPORT</h5>
                        <p className='mt-4'>Our 24/7 customer service team is also fully trained to recognize your specific needs. Hence no more hold time. We are on call when you are on call.
                        </p></Col>
                    <Col className='mt-5'>

                        <h5 className='mt-3' ><FaLocationArrow /> Dhaka,Bangladesh</h5>
                        <h5 className='mt-1' ><FaPhone /> +0089827322</h5>
                        <h5 className='mt-1' ><FaMailBulk /> healthgrade@gmail.com</h5>
                    </Col>
                </Row>

            </Container>
            <div className='footer mt-3 pt-4'>
                <p>© 2000 - 2021 Health Grade Diagnostic Labs. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;