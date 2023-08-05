import Image from 'next/image';
import React from 'react';
import banner1 from '@/assets/home/banner/banner4.jpeg'
import banner2 from '@/assets/home/banner/banner2.jpeg'
import banner3 from '@/assets/home/banner/banner3.jpeg'

const Banner = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <Image src={banner1} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <Image src={banner2} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </div>
                <div className="carousel-item">
                    <Image src={banner3} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;