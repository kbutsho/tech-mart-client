import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidCategory, BiSolidUser } from 'react-icons/bi';
import styles from '@/styles/sidebar/sidebar.module.css';
import { BsBoxSeamFill } from 'react-icons/bs';
import { MdOutlineBrandingWatermark } from 'react-icons/md';
import { FaHospitalUser, FaPowerOff, FaUserTie, FaUsers } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { VscCollapseAll } from 'react-icons/vsc';

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
                        <Link href="/admin/products" className='fw-bold'>
                            <span className={styles.icon}><BsBoxSeamFill size="22" /></span>
                            <span className={styles.link_text}>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/brands" className='fw-bold'>
                            <span className={styles.icon}><MdOutlineBrandingWatermark size="24" /></span>
                            <span className={styles.link_text}>Brands</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/categories" className='fw-bold'>
                            <span className={styles.icon}><BiSolidCategory size="24" /></span>
                            <span className={styles.link_text}>Categories</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/managers" className='fw-bold'>
                            <span className={styles.icon}><FaUserTie size="24" /></span>
                            <span className={styles.link_text}>Managers</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/sellers" className='fw-bold'>
                            <span className={styles.icon}><FaHospitalUser size="24" /></span>
                            <span className={styles.link_text}>Sellers</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/customers" className='fw-bold'>
                            <span className={styles.icon}><FaUsers size="24" /></span>
                            <span className={styles.link_text}>Customers</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/settings" className='fw-bold'>
                            <span className={styles.icon}><FiSettings size="24" /></span>
                            <span className={styles.link_text}>Settings</span>
                        </Link>
                    </li>
                    <li className='logout'>
                        <Link href="/admin/settings" className='fw-bold'>
                            <span className={styles.icon}><FaPowerOff size="22" /></span>
                            <span className={styles.link_text}>Logout</span>
                        </Link>
                    </li>
                </ul>

            </nav>

            <div className="py-4 py-md-5 px-2">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <button onClick={toggleSidebar} type="button" id={styles.sidebarCollapse} className="btn btn-primary">
                            <VscCollapseAll size="24" className='pb-1' />
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




// import Link from 'next/link';
// import React, { useState } from 'react';
// import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
// import { BiSolidCategory, BiSolidUser } from 'react-icons/bi';
// import styles from '@/styles/sidebar/sidebar.module.css';
// import { BsFillBoxSeamFill } from 'react-icons/bs';
// import { MdOutlineBrandingWatermark } from 'react-icons/md';
// import { FaHospitalUser, FaUserTie, FaUsers } from 'react-icons/fa';
// import { IoSettingsSharp } from 'react-icons/io';

// const AdminSidebar = ({ children }) => {
//     const [active, setActive] = useState(true);
//     const toggleSidebar = () => {
//         setActive(!active);
//     };
//     const handleContextMenu = (event) => {
//         if (process.env.NODE_ENV === 'production') {
//             event.preventDefault();
//         }
//     };
//     return (
//         <div className="d-flex align-items-stretch">
//             <nav id={styles.sidebar} className={active ? `${styles.active}` : ""}>
//                 <ul className={`${styles.components} list-unstyled my-5`}>
//                     <li>
//                         <Link href="/admin/dashboard" className='fw-bold'>
//                             <span className={styles.icon}><AiFillHome size="24" /></span>
//                             <span className={styles.link_text}>Dashboard</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/admin/profile" className='fw-bold'>
//                             <span className={styles.icon}><BiSolidUser size="24" /></span>
//                             <span className={styles.link_text}>Profile</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/admin/products" className='fw-bold'>
//                             <span className={styles.icon}><BsFillBoxSeamFill size="20" /></span>
//                             <span className={styles.link_text}>Products</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/admin/brands" className='fw-bold'>
//                             <span className={styles.icon}><MdOutlineBrandingWatermark size="24" /></span>
//                             <span className={styles.link_text}>Brands</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/admin/categories" className='fw-bold'>
//                             <span className={styles.icon}><BiSolidCategory size="24" /></span>
//                             <span className={styles.link_text}>Categories</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/admin/managers" className='fw-bold'>
//                             <span className={styles.icon}><FaUserTie size="24" /></span>
//                             <span className={styles.link_text}>Managers</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/admin/sellers" className='fw-bold'>
//                             <span className={styles.icon}><FaHospitalUser size="24" /></span>
//                             <span className={styles.link_text}>Sellers</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/admin/customers" className='fw-bold'>
//                             <span className={styles.icon}><FaUsers size="24" /></span>
//                             <span className={styles.link_text}>Customers</span>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/admin/settings" className='fw-bold'>
//                             <span className={styles.icon}><IoSettingsSharp size="24" /></span>
//                             <span className={styles.link_text}>Settings</span>
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>

//             <div className="py-4 py-md-5 px-2">
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <div className="container">
//                         <button onClick={toggleSidebar} type="button" id={styles.sidebarCollapse} className="btn btn-primary">
//                             <AiOutlineMenu size="24" className='pb-1' />
//                         </button>
//                         <ul className="nav navbar-nav ms-auto">
//                             <li>
//                                 <Link className="nav-link" href="/">kbutsho</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>

//                 <div onContextMenu={handleContextMenu}>
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminSidebar;