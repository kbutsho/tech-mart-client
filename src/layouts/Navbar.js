import Link from "next/link";
import styles from '@/styles/navbar/index.module.css'
import Image from "next/image";
import logo from '@/assets/navbar/logo.png'
import { BsSearch } from 'react-icons/bs'
import cartImg from '@/assets/navbar/cart.png'
import favoriteImg from '@/assets/navbar/favourite.png'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "@/redux/features/cartSlice";
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineMenuFold, AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
    let cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart, dispatch])

    let favouriteProducts = useSelector((state) => state.favourite.products);
    return (
        <div className={`${styles.header} fixed-top`}>
            <nav className={`navbar navbar-expand-lg bg-light ${styles.navbar_area}`}>
                <div className="container">
                    <Link className="navbar-brand fw-bold text-white" href="/">
                        <Image src={logo} height={40} width={120} alt="img" />
                    </Link>
                    <span className={styles.navbar_brand_cart_favourite}>
                        <span className={styles.cart_and_favourite}>
                            <Link className="nav-link d-flex" href="/">
                                <AiOutlineHeart size="30" />
                                <span className={styles.cart_navbar_count}>{favouriteProducts.length}</span>
                            </Link>
                            <Link className="nav-link d-flex ms-2" href="/cart">
                                <AiOutlineShoppingCart size="30" />
                                <span className={styles.cart_navbar_count}>{cart.cartTotalQuantity}</span>
                            </Link>
                        </span>
                        <span className={`${styles.nav_toggler_area} navbar-toggler`}
                            aria-expanded="false"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-label="Toggle navigation">
                            <AiOutlineMenuFold size="30" color="#000000" />
                        </span>
                    </span>


                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className={`navbar-nav ms-auto  ${styles.nav_items}`}>
                            <Link className={`nav-link`} href="/category/phone">Phone</Link>
                            <Link className="nav-link" href="/category/laptop">Laptop</Link>
                            <Link className="nav-link" href="/category/watch">Watch</Link>
                            <Link className="nav-link" href="/category/camera">Camera</Link>
                            <Link className="nav-link" href="/category/television">Television</Link>
                            <Link className="nav-link" href="/category/monitor">Monitor</Link>
                            <Link className="nav-link" href="/category/earphone">Earphone</Link>
                            <Link className="nav-link" href="/category/charger">Charger</Link>
                            <Link className="nav-link" href="/category/smart-gadget">gadgets</Link>
                            <Link className="nav-link" href="/">Brands</Link>
                            <Link className="nav-link" href="/category">Categories</Link>

                            <Link className={`${styles.nav_cart_favourite} nav-link`} href="/">
                                <AiOutlineHeart size="24" />
                                <span className={styles.cart_navbar_count}>{favouriteProducts.length}</span>
                            </Link>
                            <Link className={`${styles.nav_cart_favourite} nav-link me-2`} href="/cart">
                                <AiOutlineShoppingCart size="24" />
                                <span className={styles.cart_navbar_count}>{cart.cartTotalQuantity}</span>
                            </Link>

                            <div className="dropdown">
                                <button className={`${styles.dropdown_btn} btn btn-outline-secondary dropdown-toggle pt-2`}
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <BiUserCircle size="20" className="mb-1" /> Account
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className={`dropdown-item ${styles.dropdown_item}`} href="/">Login</Link></li>
                                    <li><Link className={`dropdown-item ${styles.dropdown_item}`} href="/">Profile</Link></li>
                                    <li><Link className={`dropdown-item ${styles.dropdown_item}`} href="/">Dashboard</Link></li>
                                    <li><Link className={`dropdown-item ${styles.dropdown_item}`} href="/">Retailer Request</Link></li>
                                    <li><Link className={`dropdown-item ${styles.dropdown_item}`} href="/">Manager Request</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`${styles.search_area} `}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form className={`d-flex align-items-center`}>
                                <input type="text" placeholder='search for products' className={`form-control w-100 ${styles.search_input}`} />
                                <BsSearch size="24px" style={{ marginLeft: "-50px" }} type='submit' />
                            </form>
                        </div>
                        {/* <div className="col-md-1 col-4">
                            <div className={`${styles.cart_area} d-flex justify-content-end`} style={{ paddingTop: "11px" }}>
                                <div className='d-flex me-2'>
                                    <Link href="/"><Image className={` ${styles.cart_favourite_icon} nav-link me-2`} src={favoriteImg} height={30} width={30} alt="img" /></Link>
                                    <span className={styles.cart_count}>{favouriteProducts.length}</span>
                                </div>
                                <div className='d-flex'>
                                    <Link href="/cart"><Image className={`${styles.cart_favourite_icon} nav-link me-2`} src={cartImg} height={30} width={30} alt="img" /></Link>
                                    <span className={styles.cart_count}>{cart.cartTotalQuantity}</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;