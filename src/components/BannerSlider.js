import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BannerSlider = () => {
    return (
        <div className="w-100" style={{ maxWidth: '100vw', overflow: 'hidden' }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/banner1.jpg"
                        alt="First slide"
                        style={{ objectFit: 'cover', width: '100vw', height: '40vw', maxHeight: 400 }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/banner2.jpg"
                        alt="Second slide"
                        style={{ objectFit: 'cover', width: '100vw', height: '40vw', maxHeight: 400 }}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerSlider;