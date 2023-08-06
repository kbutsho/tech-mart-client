import React from 'react';
import styles from '@/styles/home/product.module.css'
import Image from 'next/image';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

const NewArrival = (props) => {
    const { price, name, coverPhoto, rating } = props.newArrival
    const renderRatingStars = () => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 > 0;
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<BsStarFill key={`full-star-${i}`} className='ms-1 mb-1' size='13' color='#FAC508' />);
        }
        if (hasHalfStar) {
            stars.push(<BsStarHalf key='half-star' className='ms-1 mb-1' size='13' color='#FAC508' />);
        }
        return stars;
    };
    return (
        <div className='col-md-2 col-sm-6 col-6'>
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
                <div className='mt-4 d-flex justify-content-between'>
                    <div className="rating">
                        {
                            rating === 0 ? null :
                                <small className={`${styles.rating} fw-bold`}>{rating}{renderRatingStars()}</small>
                        }
                    </div>
                    <div className="favourite-cart">
                        <AiOutlineHeart className='me-2' size="22" color="#FAC508" style={{ cursor: "pointer" }} />
                        <AiOutlineShoppingCart size="22" color="#FAC508" style={{ cursor: "pointer" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;