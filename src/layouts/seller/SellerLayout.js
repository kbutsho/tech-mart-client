import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidUser, BiSolidUserCircle } from 'react-icons/bi';
import styles from '@/styles/sidebar/sidebar.module.css';
import { BsBoxSeamFill } from 'react-icons/bs';
import { MdOutlineBrandingWatermark } from 'react-icons/md';
import { FaPowerOff } from 'react-icons/fa';
// import leftArrow from '@/assets/navbar/left-arrow.png'
// import rightArrow from '@/assets/navbar/right-arrow.png'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useRef } from 'react';
import { USER_ROLE } from '@/constant/user.role.constant';
import { toast } from 'react-toastify';
import { config } from '@/config'
import { isValidURL } from '@/helper';
import { CgMenu } from "react-icons/cg";


const SellerLayout = ({ children }) => {
    const router = useRouter();
    const token = Cookies.get('token');
    const role = Cookies.get('role');
    const [isLoading, setIsLoading] = useState(true);
    const [active, setActive] = useState(true);
    const [showTitle, setShowTitle] = useState(false);
    const toastShownRef = useRef(false);

    const toggleSidebar = () => {
        setActive(!active);
        if (active) {
            setTimeout(() => {
                setShowTitle(!showTitle);
            }, 400);
        } else {
            setShowTitle(!showTitle)
        }
    };

    useEffect(() => {
        if (!token || role !== USER_ROLE.SELLER) {
            router.push('/login');
            if (!toastShownRef.current) {
                toast.info('Login as seller!');
                toastShownRef.current = true;
            }
        } else {
            setIsLoading(false);
        }
    }, [token, role, router]);
    if (isLoading) {
        return <div style={{ height: "100vh" }}></div>;
    }
    const handleContextMenu = (event) => {
        if (process.env.NODE_ENV === 'production') {
            event.preventDefault();
        }
    };
    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('role');
        Cookies.remove('profileInfo')
        router.push('/');
        toast.success('logout successfully!')
    };
    const profileInfoString = Cookies.get('profileInfo')
    let profileInfo = null
    if (profileInfoString) {
        profileInfo = JSON.parse(profileInfoString);
    }
    return (
        <div>
            <div className="flex-container">
                <nav id={styles.sidebar} className={`w-25 ${active ? `${styles.active}` : ""}`}>
                    <ul className={`${styles.components} list-unstyled mb-5`}>
                        {
                            active ?
                                <li>
                                    <CgMenu
                                        size="24"
                                        style={{ cursor: "pointer", }}
                                        className={`${styles.icon} fw-bold`}
                                        onClick={toggleSidebar} />
                                </li> : null
                        }
                        <li>
                            <Link href="/seller/dashboard" className='fw-bold' style={{ transition: 'all 0.3s' }}>
                                <span className={styles.icon}><AiFillHome /></span>
                                {!active && showTitle && (
                                    <span className={styles.link_text}>Dashboard</span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <Link href="/seller/profile" className='fw-bold' style={{ transition: 'all 0.3s' }}>
                                <span className={styles.icon}><BiSolidUser /></span>
                                {!active && showTitle && (
                                    <span className={styles.link_text}>Profile</span>
                                )}
                            </Link>
                        </li>
                        <li>
                            <Link href="/seller/products" className='fw-bold' style={{ transition: 'all 0.3s' }}>
                                <span className={styles.icon}><BsBoxSeamFill /></span>
                                {!active && showTitle && (
                                    <span className={styles.link_text}>Products</span>
                                )}
                            </Link>
                        </li>

                        <li>
                            <Link href="/seller/orders" className='fw-bold' style={{ transition: 'all 0.3s' }}>
                                <span className={styles.icon}><MdOutlineBrandingWatermark /></span>
                                {!active && showTitle && (
                                    <span className={styles.link_text}>Orders</span>
                                )}
                            </Link>
                        </li>

                        <li className={styles.logoutLink}>
                            <a onClick={handleLogout} className={`fw-bold`} style={{ cursor: "pointer", transition: 'all 0.3s' }}>
                                <span className={styles.icon}><FaPowerOff color="red" /></span>
                                {!active && showTitle && (
                                    <span className={`${styles.link_text}`}>Logout</span>
                                )}
                            </a>
                        </li>

                    </ul>
                </nav>
                <div className='w-75'>
                    <nav className="navbar navbar-expand-lg" style={{ background: "#0A2647" }}>
                        <div className='container'>
                            {
                                active ? null :
                                    <span onClick={toggleSidebar}>
                                        <CgMenu
                                            size="24"
                                            style={{ cursor: "pointer", color: "white" }}
                                            className={`${styles.icon} fw-bold`}
                                            onClick={toggleSidebar} />
                                    </span>
                            }
                            <ul className="nav navbar-nav ms-auto">
                                <li>
                                    <Link className="nav-link d-flex align-items-center" href="/customer/dashboard">
                                        {
                                            profileInfo ?
                                                <span>
                                                    <span className='me-2 fw-bold text-white'>
                                                        {`${profileInfo.firstName} ${profileInfo.lastName}`}
                                                    </span>
                                                    {
                                                        isValidURL(profileInfo.image) ?
                                                            <Image src={profileInfo.image} height={30} width={30} alt="img" style={{ borderRadius: "100%" }} />
                                                            :
                                                            <BiSolidUserCircle size="30" color="white" />
                                                    }
                                                </span> :
                                                <BiSolidUserCircle size="30" color="white" />
                                        }
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="px-2" onContextMenu={handleContextMenu}
                        style={{ backgroundColor: "#FAFAFA" }}>
                        {children}
                    </div>
                </div>
            </div>
            <div className="footer text-center py-3 fw-bold" style={{ background: "#0A2647", color: "white" }}>
                <small style={{ fontSize: "13px" }}>copyright© {new Date().getFullYear()} || all rights reserved by
                    <a style={{ textDecoration: "none", color: "white" }} target='_blank' href={`${config.portfolio_url}`}> kbutsho</a></small>
            </div>
        </div>
    );
};

export default SellerLayout;