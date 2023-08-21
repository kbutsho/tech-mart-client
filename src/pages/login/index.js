import styles from '@/styles/auth/login.module.css'
import Image from 'next/image';
import React from 'react';
import login from '@/assets/login/login-main.png'
import google from '@/assets/login/google.png'
import { useState } from 'react';



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
    return (
        <div className={styles.login_area}>
            <div className={styles.container}>
                <div className={`${styles.main_area}`}>
                    <div className={`${styles.image_area}`}>
                        <Image src={login} width={720} height={520} alt="img" className={styles.image} />
                    </div>
                    <div className={`${styles.form_area}`}>
                        <div className='w-100'>
                            <h4 className='text-primary mb-4 text-uppercase fw-bold'>Login here</h4>
                            <form>
                                <div className="form-group mb-3">
                                    <label className='mb-1'>Email</label>
                                    <input type="text"
                                        placeholder='Enter email'
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    {/* <small className='fw-bold text-danger'>email is required!</small> */}
                                </div>

                                <div className="form-group mb-4">
                                    <label className='mb-1'>Password</label>
                                    <input type="text"
                                        placeholder='Type password'
                                        className='form-control mb-1'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    {/* <small className='fw-bold text-danger'>password is required!</small> */}
                                    <div>
                                        <small><a href='/'>forget password?</a></small>
                                    </div>
                                </div>
                                <input type="submit" className='btn btn-primary w-100 mb-2' value="LOGIN" />
                            </form>
                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                <hr /> <small className='mx-2'>or</small> <hr />
                            </div>
                            <button className='btn btn-outline-success w-100 mb-2 d-flex justify-content-around align-items-center'>
                                <span>continue with google</span>
                                <Image src={google} width={20} height={20} alt="img" />
                            </button>
                            {
                                process.env.NEXT_PUBLIC_IS_LOGIN === "true" ?
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center mb-2'>
                                            <hr /> <small className='ms-2'>demo </small><small className='ms-1 me-2'>user</small> <hr />
                                        </div>
                                        <div className={styles.demo_user}>
                                            <div className={styles.demo_user_item}
                                                onClick={() => handleUserClick(demoUser.admin)}>
                                                <span>admin</span>
                                            </div>
                                            <div className={styles.demo_user_item}
                                                onClick={() => handleUserClick(demoUser.manager)}>
                                                <span>manager</span>
                                            </div>
                                            <div className={styles.demo_user_item}
                                                onClick={() => handleUserClick(demoUser.seller)}>
                                                <span>seller</span>
                                            </div>
                                            <div className={styles.demo_user_item}
                                                onClick={() => handleUserClick(demoUser.customer)}>
                                                <span>customer</span>
                                            </div>
                                        </div>
                                    </div> : null
                            }
                            <div className='d-flex justify-content-end mt-3'>
                                <small >don't have an account? <a href="/signup">signup here</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;