import styles from '@/styles/auth/login.module.css'
import Image from 'next/image';
import React from 'react';
import login from '@/assets/login/login-main.png'
import google from '@/assets/login/google.png'

const Login = () => {
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
                                    <input type="text" placeholder='Enter email' className='form-control' />
                                    {/* <small className='fw-bold text-danger'>email is required!</small> */}
                                </div>

                                <div className="form-group mb-4">
                                    <label className='mb-1'>Password</label>
                                    <input type="text" placeholder='Type password' className='form-control mb-1' />
                                    {/* <small className='fw-bold text-danger'>password is required!</small> */}
                                    <div>
                                        <small><a href='/'>forget password?</a></small>
                                    </div>
                                </div>
                                <input type="submit" className='btn btn-primary w-100 mb-2' value="LOGIN" />
                            </form>
                            <div className='d-flex justify-content-center align-items-center mb-2'>
                                <hr /> <span className='mx-2'>or</span> <hr />
                            </div>
                            <button className='btn btn-outline-success w-100 mb-3 d-flex justify-content-around align-items-center'>
                                <span>continue with google</span>
                                <Image src={google} width={20} height={20} alt="img" />
                            </button>
                            <small>don't have an account? <a href="/signup">signup here</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;