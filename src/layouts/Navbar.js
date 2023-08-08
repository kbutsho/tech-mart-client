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

function Navbar() {
    let cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart, dispatch])

    let favouriteProducts = useSelector((state) => state.favourite.products);
    return (
        <div className={`${styles.header} fixed-top`}>
            <nav className={`navbar navbar-expand-lg ${styles.navbar_area}`}>
                <div className="container">
                    <Link className="navbar-brand fw-bold text-white" href="/">
                        <Image src={logo} height={40} width={120} alt="img" />
                    </Link>
                    <span className="navbar-toggler"
                        aria-expanded="false"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </span>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className={`navbar-nav ms-auto  ${styles.nav_items}`}>
                            <Link className={`nav-link`} href="/category/phone">Phone</Link>
                            <Link className="nav-link" href="/">Laptop</Link>
                            <Link className="nav-link" href="/">Watch</Link>
                            <Link className="nav-link" href="/">Earphone</Link>
                            <Link className="nav-link" href="/">Charger</Link>
                            <Link className="nav-link" href="/">Camera</Link>
                            <Link className="nav-link" href="/">Television</Link>
                            <Link className="nav-link" href="/">Monitor</Link>
                            <Link className="nav-link" href="/">gadgets</Link>
                            <Link className="nav-link" href="/">Brands</Link>
                            <Link className="nav-link me-2" href="/category">Categories</Link>
                            <div className="dropdown">
                                <button className={`${styles.dropdown_btn} btn btn-outline-secondary dropdown-toggle pt-2`}
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <BiUserCircle size="20" className="mb-1" /> Account
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className={`dropdown-item ${styles.dropdown_item}`} href="/">Login</Link></li>
                                    <li><Link className={`dropdown-item ${styles.dropdown_item}`} href="/">Account</Link></li>
                                    <li><Link className={`dropdown-item ${styles.dropdown_item}`} href="/">Dashboard</Link></li>
                                    <li><Link className={`dropdown-item ${styles.dropdown_item}`} href="/">Retailer Request</Link></li>
                                    <li><Link className={`dropdown-item ${styles.dropdown_item}`} href="/">Manager Request</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
            <div className={`${styles.search_area} py-2`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 col-8">
                            <form className={`d-flex align-items-center`}>
                                <input type="text" placeholder='search products' className={`form-control w-100 ${styles.search_input}`} />
                                <BsSearch size="26px" style={{ marginLeft: "-50px" }} type='submit' />
                            </form>
                        </div>
                        <div className="col-md-1 col-4">
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
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;