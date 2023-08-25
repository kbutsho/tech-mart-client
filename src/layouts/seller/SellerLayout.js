import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidUser, BiSolidUserCircle } from 'react-icons/bi';
import styles from '@/styles/sidebar/sidebar.module.css';
import { BsBoxSeamFill } from 'react-icons/bs';
import { MdOutlineBrandingWatermark } from 'react-icons/md';
import { FaPowerOff } from 'react-icons/fa';
import leftArrow from '@/assets/navbar/left-arrow.png'
import rightArrow from '@/assets/navbar/right-arrow.png'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useRef } from 'react';
import { USER_ROLE } from '@/constant/user.role.constant';
import { toast } from 'react-toastify';
import { config } from '@/config'
import { isValidURL } from '@/helper';


const SellerLayout = ({ children }) => {
    const router = useRouter();
    const token = Cookies.get('token');
    const role = Cookies.get('role');
    const [isLoading, setIsLoading] = useState(true);
    const [active, setActive] = useState(true);
    const toastShownRef = useRef(false);
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
    const toggleSidebar = () => {
        setActive(!active);
    };
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
            <div className="d-flex align-items-stretch">
                <nav id={styles.sidebar} className={active ? `${styles.active}` : ""}>
                    <ul className={`${styles.components} list-unstyled mb-5`} style={{ marginTop: "20px" }}>
                        {
                            active ?
                                <span onClick={toggleSidebar} id={styles.sidebarCollapse}>
                                    <Image
                                        style={{ cursor: "pointer" }}
                                        src={rightArrow} height={24} width={24} alt="img" />
                                </span> :
                                <li style={{ height: "40px" }}>
                                </li>
                        }
                        <li>
                            <Link href="/seller/dashboard" className='fw-bold'>
                                <span className={styles.icon}><AiFillHome /></span>
                                <span className={styles.link_text}>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/seller/profile" className='fw-bold'>
                                <span className={styles.icon}><BiSolidUser /></span>
                                <span className={styles.link_text}>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/seller/products" className='fw-bold'>
                                <span className={styles.icon}><BsBoxSeamFill /></span>
                                <span className={styles.link_text}>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/seller/orders" className='fw-bold'>
                                <span className={styles.icon}><MdOutlineBrandingWatermark /></span>
                                <span className={styles.link_text}>Orders</span>
                            </Link>
                        </li>
                        <li>
                            <a onClick={handleLogout} className={`fw-bold`} style={{ cursor: "pointer" }}>
                                <span className={styles.icon}><FaPowerOff color="red" /></span>
                                <span className={styles.link_text}>Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <div>
                    <nav className="navbar navbar-expand-lg" style={{ background: "#0A2647" }}>
                        <div className='container'>
                            {
                                active ? null :
                                    <span onClick={toggleSidebar} id={styles.sidebarCollapse}>
                                        <Image
                                            style={{ cursor: "pointer" }}
                                            src={leftArrow} height={24} width={24} alt="img" />
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

                    <div className="px-2" onContextMenu={handleContextMenu}>
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