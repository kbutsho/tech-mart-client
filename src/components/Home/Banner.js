import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '@/assets/home/banner/banner4.jpeg'
import banner2 from '@/assets/home/banner/banner2.jpeg'
import banner3 from '@/assets/home/banner/banner3.jpeg'
import banner4 from '@/assets/home/banner/banner4.jpeg'
import banner5 from '@/assets/home/banner/banner5.jpeg'
import banner6 from '@/assets/home/banner/banner6.jpeg'
import banner7 from '@/assets/home/banner/banner7.jpeg'
import banner8 from '@/assets/home/banner/banner8.jpeg'
import banner9 from '@/assets/home/banner/banner9.jpeg'
import banner10 from '@/assets/home/banner/banner10.jpeg'
import banner11 from '@/assets/home/banner/banner11.jpeg'
import banner12 from '@/assets/home/banner/banner12.jpeg'
import banner13 from '@/assets/home/banner/banner13.jpeg'

const Banner = () => {
    return (
        // <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
        //     <div className="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //     </div>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active" data-bs-interval="1000">
        //             <Image src={banner1} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
        //         </div>
        //         <div className="carousel-item" data-bs-interval="1000">
        //             <Image src={banner2} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
        //         </div>
        //         <div className="carousel-item" data-bs-interval="1000">
        //             <Image src={banner3} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />

        //         </div>
        //     </div>
        //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Next</span>
        //     </button>
        // </div>
        <div>
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <Image src={banner1} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner2} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner3} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner4} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner5} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner6} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner7} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner8} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner9} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner10} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner11} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner12} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner13} layout='responsive' className="d-block w-100" alt="img" style={{ borderRadius: "10px" }} />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;