import styles from '@/styles/auth/signup.module.css'
import Image from 'next/image';
import React from 'react';
import login from '@/assets/login/login-main.png'

const Signup = () => {
    return (
        <div className={styles.signup_area}>
            <div className={styles.container}>
                <div className={`${styles.main_area}`}>
                    <div className={`${styles.image_area}`}>
                        <Image src={login} width={720} height={520} alt="img" className={styles.image} />
                    </div>
                    <div className={`${styles.form_area}`}>
                        <div className='w-100'>
                            <h4 className='text-primary mb-4 text-uppercase fw-bold'>signup form</h4>
                            <form>
                                <div className="form-group mb-3">
                                    <select className='form-select'>
                                        <option value="customer">select your role</option>
                                        <option value="customer">customer</option>
                                        <option value="seller">seller</option>
                                    </select>
                                    {/* <small className='fw-bold text-danger'>user role is required!</small> */}
                                </div>
                                <div className="form-group mb-3">
                                    <input type="text" placeholder='enter first name' className='form-control' />
                                    {/* <small className='fw-bold text-danger'>firstName is required!</small> */}
                                </div>
                                <div className="form-group mb-3">
                                    <input type="text" placeholder='enter last name' className='form-control' />
                                    {/* <small className='fw-bold text-danger'>lastName is required!</small> */}
                                </div>

                                <div className="form-group mb-3">
                                    <input type="text" placeholder='enter your email' className='form-control' />
                                    {/* <small className='fw-bold text-danger'>email is required!</small> */}
                                </div>

                                <div className="form-group mb-3">
                                    <input type="text" placeholder='enter password' className='form-control' />
                                    {/* <small className='fw-bold text-danger'>password is required!</small> */}
                                </div>

                                <div className="form-group mb-4">
                                    <input type="text" placeholder='confirm password' className='form-control' />
                                    {/* <small className='fw-bold text-danger'>password not match!</small> */}
                                </div>

                                <input type="submit" className='btn btn-primary w-100 mb-2' value="SIGNUP" />
                            </form>
                            <small>already have an account? <a href="/login">login here</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Signup;