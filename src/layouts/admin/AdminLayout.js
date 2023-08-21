import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidCategory, BiSolidUser, BiSolidUserCircle } from 'react-icons/bi';
import styles from '@/styles/sidebar/sidebar.module.css';
import { BsBoxSeamFill } from 'react-icons/bs';
import { MdDoubleArrow, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdOutlineBrandingWatermark } from 'react-icons/md';
import { FaHospitalUser, FaPowerOff, FaUserTie, FaUsers } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import leftArrow from '@/assets/navbar/left-arrow.png'
import Image from 'next/image';

const AdminLayout = ({ children }) => {
    const [active, setActive] = useState(true);
    const toggleSidebar = () => {
        setActive(!active);
    };
    const handleContextMenu = (event) => {
        if (process.env.NODE_ENV === 'production') {
            event.preventDefault();
        }
    };
    return (
        <div className="d-flex align-items-stretch">
            <nav id={styles.sidebar} className={active ? `${styles.active}` : ""}>
                <ul className={`${styles.components} list-unstyled mb-5 mt-4`}>
                    {
                        active ?
                            <li className='mb-2'>
                                <span onClick={toggleSidebar}
                                    style={{ cursor: "pointer", transition: "all 0.3s" }}>
                                    <MdDoubleArrow  size="24"/>
                                </span>
                            </li> :
                            <li style={{ height: "40px" }}>
                            </li>
                    }
                    <li>
                        <Link href="/admin/dashboard" className='fw-bold'>
                            <span className={styles.icon}><AiFillHome /></span>
                            <span className={styles.link_text}>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/profile" className='fw-bold'>
                            <span className={styles.icon}><BiSolidUser /></span>
                            <span className={styles.link_text}>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/products" className='fw-bold'>
                            <span className={styles.icon}><BsBoxSeamFill /></span>
                            <span className={styles.link_text}>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/brands" className='fw-bold'>
                            <span className={styles.icon}><MdOutlineBrandingWatermark /></span>
                            <span className={styles.link_text}>Brands</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/categories" className='fw-bold'>
                            <span className={styles.icon}><BiSolidCategory /></span>
                            <span className={styles.link_text}>Categories</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/managers" className='fw-bold'>
                            <span className={styles.icon}><FaUserTie /></span>
                            <span className={styles.link_text}>Managers</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/sellers" className='fw-bold'>
                            <span className={styles.icon}><FaHospitalUser /></span>
                            <span className={styles.link_text}>Sellers</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/customers" className='fw-bold'>
                            <span className={styles.icon}><FaUsers /></span>
                            <span className={styles.link_text}>Customers</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/settings" className='fw-bold'>
                            <span className={styles.icon}><FiSettings /></span>
                            <span className={styles.link_text}>Settings</span>
                        </Link>
                    </li>
                    <li className='logout'>
                        <Link href="/admin/settings" className='fw-bold'>
                            <span className={styles.icon}><FaPowerOff color="red" /></span>
                            <span style={{ color: "red" }} className={styles.link_text}>Logout</span>
                        </Link>
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
                                <Link className="nav-link d-flex align-items-center" href="/">
                                    <BiSolidUserCircle size="30" color="white" />
                                    <span className='ms-2 fw-bold text-white'>kbutsho</span>
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
    );
};

export default AdminLayout;