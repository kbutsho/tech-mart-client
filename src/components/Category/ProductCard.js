import React from 'react';
import Image from 'next/legacy/image'
import styles from '@/styles/home/product.module.css'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { PRODUCT_STATUS } from '@/constant/product.constant';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';
import { addToFavourite } from '@/redux/features/favouriteSlice';
import Link from 'next/link';
import { isValidURL } from '@/helper';
import notFoundImage from "@/assets/product/not-found.png"

const ProductCard = (props) => {
    const { status, price, discountPrice, name, coverPhoto, rating, _id, category } = props.product;
    const offer = (((price - discountPrice) / price) * 100).toFixed(1);
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
    const dispatch = useDispatch();
    const handelAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    const handelAddToFavourite = (product) => {
        dispatch(addToFavourite(product));
    }
    return (
        <div className='col-md-6 col-lg-4 col-xl-3 col-xxl-3 col-sm-6 col-6'>
            <Link className={styles.url_link}
                href={`/category/${category}/${_id}`}>
                <div className={`${styles.product_card}`}>
                    <div className={styles.product_header}>
                        {
                            offer > 0 ? <span className={styles.offer_percentage}>{offer}% OFF</span> : null
                        }
                        <div className={styles.product_image}>
                            {
                                isValidURL(coverPhoto) ?
                                    <Image className='bg-info'
                                        src={coverPhoto}
                                        width={170}
                                        height={170}
                                        layout='responsive'
                                        alt="img"
                                    /> : <Image className='bg-info'
                                        src={notFoundImage}
                                        width={170}
                                        height={170}
                                        layout='responsive'
                                        alt="img"
                                    />
                            }
                        </div>
                    </div>
                    <h6 className={`${styles.product_name} mt-2`}>{name}</h6>
                    {
                        discountPrice < price ?
                            <div className='d-flex justify-content-between'>
                                <h6 className={`${styles.previous_price}`}>৳ {price}</h6>
                                <h6 className={`${styles.discount_price}`}>৳ {discountPrice}</h6>
                            </div> : <div className='d-flex'><h6 className='fw-bold '>৳ {price}</h6></div>
                    }
                    <div className=' d-flex justify-content-between'>
                        <div className="rating">
                            {
                                rating === 0 ? <small>
                                    <span className={styles.rating}>0</span>
                                    <BsStar className={`${styles.star_icon}`} />
                                </small>
                                    : <small>
                                        <span className={styles.rating}>{rating}</span>
                                        {renderRatingStars()}
                                    </small>
                            }
                        </div>
                        <div>
                            <AiOutlineHeart onClick={() => handelAddToFavourite(props.product)}
                                className={`${styles.icon} ms-1`} />
                            {
                                status === PRODUCT_STATUS.IN_STOCK ?
                                    <AiOutlineShoppingCart onClick={() => handelAddToCart(props.product)}
                                        className={`${styles.icon}`} /> :
                                    null
                            }
                        </div>
                    </div>
                    <div className='d-flex flex-row mt-2 pt-1'>
                        {
                            status === PRODUCT_STATUS.IN_STOCK ? (
                                <>
                                    <div className="w-50">
                                        <div className={styles.in_stock}>
                                            {status.split('-').join(' ')}
                                        </div>
                                    </div>
                                    <div className="w-50">
                                        <div className={styles.buy_now}>
                                            <Link className={styles.url_link} href={`/category/${category}/${_id}`}>
                                                buy now
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="w-100">
                                    <div className={styles.not_in_stock}>
                                        {status.split('-').join(' ')}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;