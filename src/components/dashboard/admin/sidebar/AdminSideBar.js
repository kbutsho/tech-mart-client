import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { BiSolidUser } from 'react-icons/bi';
import styles from '@/styles/sidebar/sidebar.module.css';

const AdminSidebar = ({ children }) => {
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
                <ul className={`${styles.components} list-unstyled my-5`}>
                    <li>
                        <Link href="/admin/dashboard" className='fw-bold'>
                            <span className={styles.icon}><AiFillHome size="24" /></span>
                            <span className={styles.link_text}>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/profile" className='fw-bold'>
                            <span className={styles.icon}><BiSolidUser size="24" /></span>
                            <span className={styles.link_text}>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/manage-product" className='fw-bold'>
                            <span className={styles.icon}><BiSolidUser size="24" /></span>
                            <span className={styles.link_text}>Manage product</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="p-4 p-md-5">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <button onClick={toggleSidebar} type="button" id={styles.sidebarCollapse} className="btn btn-primary">
                            <AiOutlineMenu size="24" className='pb-1' />
                        </button>
                        <ul className="nav navbar-nav ms-auto">
                            <li>
                                <Link className="nav-link" href="/">kbutsho</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div onContextMenu={handleContextMenu}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;