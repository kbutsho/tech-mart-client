import Link from "next/link";
import styles from '@/styles/Navbar.module.css'
import Image from "next/image";
import logo from '@/assets/navbar/logo.png'
import cart from '@/assets/navbar/cart.png'
import favorite from '@/assets/navbar/favourite.png'

function Navbar() {
    return (
        <div className={styles.header}>
            <nav className={`navbar navbar-expand-lg bg-light fixed-top ${styles.navbar_area}`}>
                <div className="container">
                    <Link className="navbar-brand fw-bold text-white" href="/">
                        <Image src={logo} height={40} width={120} alt="img" />
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        aria-expanded="false"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className={`navbar-nav ms-auto text-uppercase fw-bold align-items-center ${styles.nav_items}`}>
                            <Link className={`nav-link`} href="/">Phone</Link>
                            <Link className="nav-link" href="/">Laptop</Link>
                            <Link className="nav-link" href="/">Watch</Link>
                            <Link className="nav-link" href="/">Earphone</Link>
                            <Link className="nav-link" href="/">Charger</Link>
                            <Link className="nav-link" href="/">power Bank</Link>
                            <Link className="nav-link" href="/">Camera</Link>
                            <Link className="nav-link" href="/">Television</Link>
                            <Link className="nav-link" href="/">Monitor</Link>
                            <Link className="nav-link" href="/">Gadgets</Link>
                            <Link className="nav-link" href="/login">Login</Link>
                            <Link className="nav-link" href="/">Retailer Request</Link>
                            <Image className="nav-link" src={favorite} height={40} width={40} alt="img" />
                            <Image className="nav-link" src={cart} height={40} width={40} alt="img" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;