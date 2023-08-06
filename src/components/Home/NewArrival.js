import React from 'react';
import styles from '@/styles/home/product.module.css'
import Image from 'next/image';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

const NewArrival = (props) => {
    const { price, name, coverPhoto, rating } = props.newArrival
    const renderRatingStars = () => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 > 0;
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<BsStarFill key={`full-star-${i}`} className={`${styles.star_icon}`} color='#FAC508' />);
        }
        if (hasHalfStar) {
            stars.push(<BsStarHalf key='half-star' className={`${styles.star_icon}`} color='#FAC508' />);
        }
        return stars;
    };
    return (
        <div className='col-md-4 col-lg-3 col-xl-2 col-xxl-2 col-sm-6 col-6'>
            <div className={`${styles.product_card}`}>
                <div className="text-center">
                    <Image className='bg-info'
                        src={coverPhoto}
                        width={170} height={170}
                        layout='responsive'
                        priority={true}
                        alt="img"
                    />
                </div>
                <h6 className={`${styles.product_name} mt-2`}>{name}</h6>
                <h6 className='fw-bold'>৳ {price}</h6>
                <div className='mt-3 d-flex justify-content-between'>
                    <div className="rating col-">
                        {
                            rating === 0 ? <small><span className={styles.rating}>0</span> <BsStar className={`${styles.star_icon}`} /></small> : <small><span className={styles.rating}>{rating}</span>{renderRatingStars()}</small>
                        }
                    </div>

                    <div>
                        <AiOutlineHeart className={`${styles.icon} me-1`} />
                        <AiOutlineShoppingCart className={`${styles.icon}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;