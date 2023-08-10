import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import styles from '@/styles/cart/index.module.css';
import Link from 'next/link';
import { clearCart, decreaseCartItem, increaseCartItem, removeFromCart } from '@/redux/features/cartSlice';
import Image from 'next/image';

const CartPage = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleIncreaseCartItem = (product) => {
        dispatch(increaseCartItem(product));
    };
    const handleDecreaseCartItem = (product) => {
        dispatch(decreaseCartItem(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className='container pb-5'>
            <Breadcrumb />
            <div className={styles.cart_container}>
                {cart.products.length === 0 ? (
                    <div className={styles.cart_empty}>
                        <p>your cart is currently empty</p>
                        <div>
                            <Link href="/" className={styles.start_shopping}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16">
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span className='ms-1'>start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className={styles.titles}>
                            <h6 className="fw-bold text-uppercase">Product</h6>
                            <h6 className="fw-bold text-uppercase">Price</h6>
                            <h6 className="fw-bold text-uppercase ms-2">Quantity</h6>
                            <h6 className="fw-bold text-uppercase text-end">Total</h6>
                        </div>
                        <div className={styles.cart_items}>
                            {cart.products &&
                                cart.products.map((cartItem) => (
                                    <div className={styles.cart_item} key={cartItem._id}>
                                        <div className={styles.cart_product}>
                                            <Image src={cartItem.coverPhoto} alt={cartItem.name} height={120} width={120} />
                                            <div className='ms-2'>
                                                <h5 className='fw-bold'>{cartItem.name}</h5>
                                                <p>{cartItem.category}</p>
                                                <button className='btn btn-danger btn-sm' onClick={() => handleRemoveFromCart(cartItem)}>
                                                    remove
                                                </button>
                                            </div>
                                        </div>
                                        <div className={styles.cart_product_price}>${cartItem.price}</div>
                                        <div className={styles.cart_product_quantity}>
                                            <button onClick={() => handleDecreaseCartItem(cartItem)}>
                                                -
                                            </button>
                                            <div className={styles.count}>{cartItem.cartQuantity}</div>
                                            <button onClick={() => handleIncreaseCartItem(cartItem)}>+</button>
                                        </div>
                                        <div className={styles.cart_product_total_price}>
                                            ${cartItem.price * cartItem.cartQuantity}
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className='row'>
                            <div className='col-md-9'>
                                <button className='btn btn-outline-secondary my-2 px-3' onClick={() => handleClearCart()}>
                                    clear cart
                                </button>
                            </div>
                            <div className="col-md-3">
                                <div className='text-end mb-4'>
                                    <span>subtotal</span>
                                    <span className='fw-bold'> ৳ {cart.cartTotalAmount}</span>
                                </div>
                                <div className='text-end'>
                                    <span ><small className='text-end' style={{ fontSize: "13px" }}>(taxes and shipping calculated at checkout)</small></span>
                                </div>
                                <button className=' btn btn-primary w-100 mt-2' onClick={() => checkOut()}>check out</button>
                                <div className='d-flex justify-content-end'>
                                    <Link className={styles.continue_shopping} href="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-arrow-left"
                                            viewBox="0 0 16 16">
                                            <path
                                                fillRule="evenodd"
                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                            />
                                        </svg>
                                        <span className='ms-1'>continue Shopping</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div >
                )}
            </div >
        </div >
    );
};

export default CartPage;
CartPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};