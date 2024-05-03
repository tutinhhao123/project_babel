import React from 'react';
import logo from '../img/logo_abi-removebg-preview.png'
import Carousel from 'react-bootstrap/Carousel';


export default function Carousell() {
    return (
        <>
            {/* <div classNameName='container'>
                <div id="carouselExample" classNameName="carousel slide container ">
                    <div classNameName="carousel-inner">
                        <div classNameName="carousel-item active">
                            <img src={logo} classNameName="d-block w-100" alt="Images carousel" />
                        </div>
                        <div classNameName="carousel-item">
                            <img src={logo} classNameName="d-block w-100" alt="Images carousel" />
                        </div>
                        <div classNameName="carousel-item">
                            <img src={logo} classNameName="d-block w-100" alt="Images carousel" />
                        </div>
                    </div>
                    <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span classNameName="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span classNameName="visually-hidden">Previous</span>
                    </button>
                    <button classNameName="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span classNameName="carousel-control-next-icon" aria-hidden="true"></span>
                        <span classNameName="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=f5f5f5"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=eee"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </>
    );
}