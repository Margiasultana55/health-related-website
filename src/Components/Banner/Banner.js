import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jpg'
import banner3 from '../../img/banner3.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h5 className='banner-text fw-bold'>Accurate Diagnostic Labs Continues to Be on Forefront of the National Fight Against COVID-19 and Announces the Availability of Serological Antibody Testing This Week</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 banner"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                        <h5 className='banner-text fw-bold'> Accurate Diagnostic Laboratories and Rutgers University Cell & DNA Repository Lab Work Together to Change the COVID-19 Testing</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner "
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                        <h5 className='banner-text fw-bold'>LARGEST INDEPENDENT
                            IN-NETWORK DIAGNOSTIC LABORATORY</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;