import Image from 'next/image';
import { AiOutlineFileProtect } from 'react-icons/ai';
import styles from '@/styles/product/product.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';
import FeaturesTable from './FeatureTable';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const ProductDetailsCard = ({ product }) => {
    const dispatch = useDispatch();
    const handelAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    const productFeatures = product.data.features;
    const renderRatingStars = () => {
        const fullStars = Math.floor(product.data.rating);
        const hasHalfStar = (product.data.rating) % 1 > 0;
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<BsStarFill key={`full-star-${i}`} className="mb-1 mx-1" color='#FAC508' />);
        }
        if (hasHalfStar) {
            stars.push(<BsStarHalf key='half-star' className="mb-1 mx-1" color='#FAC508' />);
        }
        return stars;
    };
    return (
        <div className="row">
            <div className="col-md-4 col-12">
                <div className='px-5'>
                    <Image src={product.data.coverPhoto} height={40} width={40} layout='responsive' alt="img" />
                </div>
            </div>
            <div className="col-md-8 col-12">
                <h5 className='fw-bold'>{product.data.name}</h5>
                <h6>৳ {product.data.discountPrice}</h6>
                <ul>
                    <li className={styles.feature}>{product.data.title}</li>
                    <li className={styles.feature}>available only {product.data.quantity}</li>
                    {
                        product.data.size === 'unspecific' ? null :
                            <li className={styles.feature}>size{product.data.size}</li>
                    }
                    {
                        product.data.color === 'unspecific' ? null :
                            <li className={styles.feature}>color {product.data.color}</li>
                    }
                    {
                        product.data.variant === 'unspecific' ? null :
                            <li className={styles.feature}>variant{product.data.variant}</li>
                    }
                    <li className={styles.feature}>rating {
                        product.data.rating === 0 ?
                            <BsStar /> : (<>
                                {renderRatingStars()} {product.data.rating}
                            </>)
                    }</li>
                    <li className={styles.feature}>status <span className={styles.stock_status}>{product.data.status.split('-').join(' ')}</span></li>
                </ul>
                <h6 className='fw-bold'><AiOutlineFileProtect /> {product.data.warranty}</h6>
                <div className='mt-3'>
                    <button className='btn btn-primary fw-bold me-2'
                        onClick={() => handelAddToCart(product.data)}>add to cart</button>
                    <button className='btn btn-success fw-bold ms-2'>buy now</button>
                </div>
            </div>
            <div className='mt-3'>
                <FeaturesTable features={productFeatures} description={product.data.description} />
            </div>
        </div>
    );
};

export default ProductDetailsCard;