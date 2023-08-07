// import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '@/assets/home/banner/banner1.jpeg'
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
import Image from 'next/legacy/image'
import styles from '@/styles/home/index.module.css'

const Banner = () => {
    return (
        <div>
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                    <Image src={banner1} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner2} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner3} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner4} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner5} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner6} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner7} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner8} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner9} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner10} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner11} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={banner12} width={988}
                        height={344} priority={false} layout='responsive' className={`${styles.bannerImage} d-block w-100`} alt="img" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;