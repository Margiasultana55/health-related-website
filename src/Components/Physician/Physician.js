import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../img/about1.jpg';
import phy from '../../img/phy.jpg';
import './Physician.css'

const Physician = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner "
                        src={phy}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h2 className='banner-text'>PHYSICIAN & LABORATORY SERVICES</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 banner"
                        src={banner1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                        <h2 className='banner-text'>PHYSICIAN & LABORATORY SERVICES</h2>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <h1 className='mt-5 text text-center'>SPECIALTIES SERVICED</h1>
            <p className='mt-3 custom'>As a laboratory that offers a vast array of specialty specific tests we can tailor our test menu to fit the needs of your practice. We can customize your test order forms, your practice’s reflex needs and integrate these into your EMR/EHR. Give us a call to set up an appointment with our highly skilled specialty trained sales representatives such that we can show your practice a custom Accurate Lab workflow improvement strategy.</p>
        </div>
    );
};

export default Physician;