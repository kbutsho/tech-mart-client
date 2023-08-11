import Image from 'next/image';
import { AiOutlineFileProtect } from 'react-icons/ai';
import styles from '@/styles/product/product.module.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';

const ProductDetailsCard = ({ product }) => {
    const dispatch = useDispatch();
    const handelAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    return (
        <div className="row">
            <div className="col-md-4 col-12">
                <div className='px-3'>
                    <Image src={product.data.coverPhoto} height={40} width={40} layout='responsive' alt="img" />
                </div>
            </div>
            <div className="col-md-8 col-12">
                <h5 className='fw-bold'>{product.data.name}</h5>
                <h6>৳ {product.data.discountPrice}</h6>
                <ul>
                    <li className={styles.feature}>{product.data.features.os}</li>
                    <li className={styles.feature}>{product.data.features.displaySIze}</li>
                    <li className={styles.feature}>{product.data.features.resulation}</li>
                    <li className={styles.feature}>{product.data.features.chipset}</li>
                    <li className={styles.feature}>{product.data.features.memory}</li>
                    <li className={styles.feature}>{product.data.features.camera.main}</li>
                    <li className={styles.feature}>{product.data.features.camera.selfie}</li>
                    <li className={styles.feature}>{product.data.features.charging}</li>
                </ul>
                <h6 className='fw-bold'><AiOutlineFileProtect /> {product.data.warranty}</h6>
                <div className='mt-3'>
                    <button className='btn btn-primary fw-bold me-2'
                        onClick={() => handelAddToCart(product.data)}>add to cart</button>
                    <button className='btn btn-success fw-bold ms-2'>buy now</button>
                </div>
            </div>
            <div>
                <h6 className='fw-bold mt-3'>Details</h6>
                <table>
                    <tr>
                        <td className={styles.feature}>Name</td>
                        <td className={styles.feature}>{product.data.name}</td>
                    </tr>
                    <tr>
                        <td className={styles.feature}>Display size</td>
                        <td className={styles.feature}>{product.data.features.displaySIze}</td>
                    </tr>
                    <tr>
                        <td className={styles.feature}>Display type</td>
                        <td className={styles.feature}>{product.data.features.displayType}</td>
                    </tr>
                    <tr>
                        <td className={styles.feature}>Display resulation</td>
                        <td className={styles.feature}>{product.data.features.resulation}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default ProductDetailsCard;