import Link from "next/link";
import styles from '@/styles/navbar/index.module.css'
import Image from "next/image";
import logo from '@/assets/navbar/logo.png'
import { BsSearch } from 'react-icons/bs'
import cart from '@/assets/navbar/cart.png'
import favorite from '@/assets/navbar/favourite.png'
import { useSelector } from "react-redux";

function Navbar() {
    let cartProducts = useSelector((state) => state.cart.products);
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
                        <div className={`navbar-nav ms-auto text-uppercase fw-bold align-items-center ${styles.nav_items}`}>
                            <Link className={`nav-link`} href="/">Phone</Link>
                            <Link className="nav-link" href="/">Laptop</Link>
                            <Link className="nav-link" href="/">Watch</Link>
                            <Link className="nav-link" href="/">Earphone</Link>
                            <Link className="nav-link" href="/">Charger</Link>
                            {/* <Link className="nav-link" href="/">power Bank</Link> */}
                            <Link className="nav-link" href="/">Camera</Link>
                            <Link className="nav-link" href="/">Television</Link>
                            <Link className="nav-link" href="/">Monitor</Link>
                            {/* <Link className="nav-link" href="/">Gadgets</Link> */}
                            <Link className="nav-link" href="/">All Products</Link>
                            <Link className="nav-link" href="/">Brands</Link>
                            <Link className="nav-link" href="/">Dashboard</Link>
                            <Link className="nav-link" href="/login">Login</Link>
                            <Link className="nav-link" href="/">Retailer Request</Link>
                        </div>
                    </div>
                </div>
            </nav>
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
                                    <Image className="nav-link me-2" src={favorite} height={30} width={30} alt="img" />
                                    <span className={styles.cart_count}>{favouriteProducts.length}</span>
                                </div>
                                <div className='d-flex'>
                                    <Image className="nav-link me-2" src={cart} height={30} width={30} alt="img" />
                                    <span className={styles.cart_count}>{cartProducts.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;