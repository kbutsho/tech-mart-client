import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidCategory, BiSolidUser, BiSolidUserCircle } from 'react-icons/bi';
import styles from '@/styles/sidebar/sidebar.module.css';
import { BsBoxSeamFill } from 'react-icons/bs';
import { MdOutlineBrandingWatermark } from 'react-icons/md';
import { FaHospitalUser, FaPowerOff, FaUsers } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import leftArrow from '@/assets/navbar/left-arrow.png'
import rightArrow from '@/assets/navbar/right-arrow.png'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useRef } from 'react';
import { USER_ROLE } from '@/constant/user.role.constant';
import { toast } from 'react-toastify';
import { config } from '@/config'


const ManagerLayout = ({ children }) => {
    const router = useRouter();
    const token = Cookies.get('token');
    const role = Cookies.get('role');
    const [isLoading, setIsLoading] = useState(true);
    const [active, setActive] = useState(true);
    const toastShownRef = useRef(false);
    useEffect(() => {
        if (!token || role !== USER_ROLE.MANAGER) {
            router.push('/login');
            if (!toastShownRef.current) {
                toast.info('Login as manager!');
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
    const profileInfo = JSON.parse(Cookies.get('profileInfo'));
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
                            <Link href="/manager/dashboard" className='fw-bold'>
                                <span className={styles.icon}><AiFillHome /></span>
                                <span className={styles.link_text}>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/manager/profile" className='fw-bold'>
                                <span className={styles.icon}><BiSolidUser /></span>
                                <span className={styles.link_text}>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/manager/products" className='fw-bold'>
                                <span className={styles.icon}><BsBoxSeamFill /></span>
                                <span className={styles.link_text}>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/manager/brands" className='fw-bold'>
                                <span className={styles.icon}><MdOutlineBrandingWatermark /></span>
                                <span className={styles.link_text}>Brands</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/manager/categories" className='fw-bold'>
                                <span className={styles.icon}><BiSolidCategory /></span>
                                <span className={styles.link_text}>Categories</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/manager/sellers" className='fw-bold'>
                                <span className={styles.icon}><FaHospitalUser /></span>
                                <span className={styles.link_text}>Sellers</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/manager/customers" className='fw-bold'>
                                <span className={styles.icon}><FaUsers /></span>
                                <span className={styles.link_text}>Customers</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/manager/settings" className='fw-bold'>
                                <span className={styles.icon}><FiSettings /></span>
                                <span className={styles.link_text}>Settings</span>
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
                                    <Link className="nav-link d-flex align-items-center" href="/manager/dashboard">
                                        <span className='me-2 fw-bold text-white'>
                                            {profileInfo ? `${profileInfo.firstName} ${profileInfo.lastName}` : null}
                                        </span>
                                        {profileInfo.image ?
                                            <Image src={profileInfo.image} height={30} width={30} alt="img" style={{ borderRadius: "100%" }} /> :
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

export default ManagerLayout;