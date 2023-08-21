// import styles from '@/styles/auth/login.module.css'
// import Image from 'next/image';
// import React from 'react';
// import login from '@/assets/login/login-main.png'
// import google from '@/assets/login/google.png'
// import { useState } from 'react';
// import Link from 'next/link';
// import { BiHide, BiShow } from 'react-icons/bi';



// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const handleUserClick = (user) => {
//         setEmail(user.email);
//         setPassword(user.password);
//     };
//     const demoUser = {
//         admin: {
//             email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
//             password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD
//         },
//         manager: {
//             email: process.env.NEXT_PUBLIC_MANAGER_EMAIL,
//             password: process.env.NEXT_PUBLIC_MANAGER_PASSWORD
//         },
//         seller: {
//             email: process.env.NEXT_PUBLIC_SELLER_EMAIL,
//             password: process.env.NEXT_PUBLIC_SELLER_PASSWORD
//         },
//         customer: {
//             email: process.env.NEXT_PUBLIC_CUSTOMER_EMAIL,
//             password: process.env.NEXT_PUBLIC_CUSTOMER_PASSWORD
//         },
//     }
//     const [showPassword, setShowPassword] = useState(false)
//     const showPasswordBtn = () => {
//         setShowPassword(!showPassword);
//     }

//     return (
//         <div className={styles.login_area}>
//             <div className={styles.container}>
//                 <div className={`${styles.main_area}`}>
//                     <div className={`${styles.image_area}`}>
//                         <Image src={login} width={720} height={520} alt="img" className={styles.image} />
//                     </div>
//                     <div className={`${styles.form_area}`}>
//                         <div className='w-100'>
//                             <h4 className='text-primary mb-4 text-uppercase fw-bold'>Login here</h4>
//                             <form>
//                                 <div className="form-group mb-3">
//                                     <label className='mb-1'>Email</label>
//                                     <input type="text"
//                                         placeholder='Enter email'
//                                         className='form-control'
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)} />
//                                     {/* <small className='fw-bold' style={{ color: "red" }}>email is required!</small> */}
//                                 </div>

//                                 <div className="form-group mb-4">
//                                     <label className='mb-1'>Password</label>
//                                     <div className='d-flex align-items-center'>
//                                         <input
//                                             type={showPassword ? "text" : "password"}
//                                             placeholder='Type password'
//                                             className='form-control mb-1'
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)} />
//                                         {
//                                             showPassword ?
//                                                 <BiHide onClick={() => showPasswordBtn()}
//                                                     style={{ marginLeft: "-40px", marginBottom: "2px", cursor: "pointer" }}
//                                                     size="25" /> :
//                                                 <BiShow onClick={() => showPasswordBtn()}
//                                                     style={{ marginLeft: "-40px", marginBottom: "2px", cursor: "pointer" }}
//                                                     size="25" />
//                                         }
//                                     </div>
//                                     {/* <small className='fw-bold' style={{ color: "red" }}>password is required!</small> */}
//                                     <div>
//                                         <small><a href='/'>forget password?</a></small>
//                                     </div>
//                                 </div>
//                                 <input type="submit" className='btn btn-primary w-100 mb-2' value="LOGIN" />
//                             </form>
//                             <div className='d-flex justify-content-center align-items-center mb-2'>
//                                 <hr /> <small className='mx-2'>or</small> <hr />
//                             </div>
//                             <button className='btn btn-outline-success w-100 mb-2 d-flex justify-content-around align-items-center'>
//                                 <span>continue with google</span>
//                                 <Image src={google} width={20} height={20} alt="img" />
//                             </button>
//                             {
//                                 process.env.NEXT_PUBLIC_IS_LOGIN === "true" ?
//                                     <div>
//                                         <div className='d-flex justify-content-center align-items-center mb-2'>
//                                             <hr /> <small className='ms-2'>demo </small><small className='ms-1 me-2'>user</small> <hr />
//                                         </div>
//                                         <div className={styles.demo_user}>
//                                             <div className={styles.demo_user_item}
//                                                 onClick={() => handleUserClick(demoUser.admin)}>
//                                                 <span>admin</span>
//                                             </div>
//                                             <div className={styles.demo_user_item}
//                                                 onClick={() => handleUserClick(demoUser.manager)}>
//                                                 <span>manager</span>
//                                             </div>
//                                             <div className={styles.demo_user_item}
//                                                 onClick={() => handleUserClick(demoUser.seller)}>
//                                                 <span>seller</span>
//                                             </div>
//                                             <div className={styles.demo_user_item}
//                                                 onClick={() => handleUserClick(demoUser.customer)}>
//                                                 <span>customer</span>
//                                             </div>
//                                         </div>
//                                     </div> : null
//                             }
//                             <div className='d-flex justify-content-end mt-3'>
//                                 <small >don't have an account? <Link className='fw-bold' href="/signup">signup here</Link></small>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// };

// export default Login;


import styles from '@/styles/auth/login.module.css'
import Image from 'next/image';
import React from 'react';
import google from '@/assets/login/google.png'
import { useState } from 'react';
import Link from 'next/link';
import { BiHide, BiShow } from 'react-icons/bi';
import { BarLoader } from 'react-spinners';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleUserClick = (user) => {
        setEmail(user.email);
        setPassword(user.password);
    };
    const demoUser = {
        admin: {
            email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
            password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD
        },
        manager: {
            email: process.env.NEXT_PUBLIC_MANAGER_EMAIL,
            password: process.env.NEXT_PUBLIC_MANAGER_PASSWORD
        },
        seller: {
            email: process.env.NEXT_PUBLIC_SELLER_EMAIL,
            password: process.env.NEXT_PUBLIC_SELLER_PASSWORD
        },
        customer: {
            email: process.env.NEXT_PUBLIC_CUSTOMER_EMAIL,
            password: process.env.NEXT_PUBLIC_CUSTOMER_PASSWORD
        },
    }
    const [showPassword, setShowPassword] = useState(false)
    const showPasswordBtn = () => {
        setShowPassword(!showPassword);
    }
    const [loading, setLoading] = useState(false);
    return (
        <div className={styles.login_area}>
            <div className={`${styles.main_area}`}
                style={loading ? { background: "#F5F7FC" } : { background: "rgba(0, 0, 0, 0.1)" }}>
                <h4 className='fw-bold text-dark mb-3 text-center'>LOGIN HERE</h4>
                <form>
                    <div className="form-group mb-3">
                        <label className='mb-1 fw-bold'>Email</label>
                        <input type="text"
                            placeholder='Enter email'
                            className='form-control w-100'
                            value={email}
                            style={{ fontSize: "14px" }}
                            onChange={(e) => setEmail(e.target.value)} />
                        {/* <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>email is required!</small> */}
                    </div>

                    <div className="form-group mb-3">
                        <label className='mb-1 fw-bold'>Password</label>
                        <div className='d-flex align-items-center'>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder='Enter password'
                                className='form-control pb-1 w-100'
                                value={password}
                                style={{ fontSize: "14px" }}
                                onChange={(e) => setPassword(e.target.value)} />
                            {
                                showPassword ?
                                    <BiHide onClick={() => showPasswordBtn()}
                                        style={{ marginLeft: "-40px", marginBottom: "-2px", cursor: "pointer" }}
                                        size="25" /> :
                                    <BiShow onClick={() => showPasswordBtn()}
                                        style={{ marginLeft: "-40px", marginBottom: "-2px", cursor: "pointer" }}
                                        size="25" />
                            }
                        </div>
                        {/* <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>password is required!</small> */}
                        <div className='d-flex justify-content-end mt-2'>
                            <small><Link href='/'>forget password?</Link></small>
                        </div>
                    </div>
                    <input type="submit" className='btn btn-primary w-100 mb-2 fw-bold btn-sm' value="Login" />
                </form>
                <div className='d-flex justify-content-center align-items-center mb-2'>
                    <hr /> <small className='mx-2'>or</small> <hr />
                </div>
                <button className='btn btn-outline-success btn-sm w-100 mb-2 d-flex justify-content-around align-items-center'>
                    <span>continue with google</span>
                    <Image src={google} width={16} height={16} alt="img" />
                </button>
                {
                    process.env.NEXT_PUBLIC_IS_LOGIN === "true" ?
                        <div>
                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                <hr /> <small className='ms-2'>demo </small><small className='ms-1 me-2'>user</small> <hr />
                            </div>
                            <table className={`${styles.demo_user} table table-bordered`}>
                                <tbody>
                                    <tr>
                                        <td onClick={() => handleUserClick(demoUser.admin)}>admin</td>
                                        <td onClick={() => handleUserClick(demoUser.manager)}>manager</td>
                                        <td onClick={() => handleUserClick(demoUser.seller)}>seller</td>
                                        <td onClick={() => handleUserClick(demoUser.customer)}>customer</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> : null
                }
                <div className='d-flex justify-content-between mt-2'>
                    <small ><Link className='fw-bold' href="/">Home</Link></small>
                    <small >new user? <Link className='fw-bold' href="/signup">signup here</Link></small>
                </div>
            </div>
            {
                loading ? <div className={`${styles.loading}`}
                    style={{ minHeight: "100vh" }}>
                    <BarLoader
                        color='green' className='mt-5' />
                </div> : null
            }
        </div>
    );
};

export default Login;

