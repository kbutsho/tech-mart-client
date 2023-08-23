import styles from '@/styles/auth/login.module.css'
import Image from 'next/image';
import React from 'react';
import google from '@/assets/login/google.png'
import { useState } from 'react';
import Link from 'next/link';
import { BiHide, BiShow } from 'react-icons/bi';
import { FadeLoader } from 'react-spinners';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { USER_ROLE } from '@/constant/user.role.constant';
import { useRouter } from 'next/router';
import { config } from '@/config';
import { useRef } from 'react';
import { useEffect } from 'react';
import { TiDelete } from 'react-icons/ti';

const Login = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false);
    const [emailVerifiedMsg, setEmailVerifiedMsg] = useState(null)
    const [credential, setCredential] = useState({
        email: '',
        password: '',
        errors: []
    })

    // if login redirect dashboard -> start
    const token = Cookies.get('token');
    const role = Cookies.get('role');
    const toastShownRef = useRef(false);
    useEffect(() => {
        if (token && role) {
            if (role === USER_ROLE.ADMIN) {
                router.push('/admin/dashboard')
            }
            if (role === USER_ROLE.MANAGER) {
                router.push('/manager/dashboard')
            }
            if (role === USER_ROLE.SELLER) {
                router.push('/seller/dashboard')
            }
            if (role === USER_ROLE.CUSTOMER) {
                router.push('/customer/dashboard')
            }
            if (!toastShownRef.current) {
                // toast.info('already login!');
                toastShownRef.current = true;
            }
        } else {
            setIsLoading(false);
        }
    }, [token, role, router]);
    if (isLoading) {
        return <div style={{ height: "100vh" }}></div>;
    }
    // if login redirect dashboard -> end

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
    const handleUserClick = (user) => {
        setCredential({
            email: user.email,
            password: user.password
        });
    };
    const showPasswordBtn = () => {
        setShowPassword(!showPassword);
    }
    const handelInputChange = (event) => {
        setCredential({ ...credential, [event.target.name]: event.target.value });
    };
    const loginSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(!loading);
            const data = {
                email: credential.email,
                password: credential.password,
                errors: []
            }
            const response = await axios.post(`${config.api}/auth/login`, data
            );
            if (response.data.data) {
                setEmailVerifiedMsg(null)
                setLoading(false);
                const token = response.data.data.accessToken;
                const role = response.data.data.role
                Cookies.set('token', token, { expires: 7 });
                Cookies.set('role', role, { expires: 7 });
                if (role === USER_ROLE.ADMIN) {
                    router.push('/admin/dashboard')
                }
                if (role === USER_ROLE.SELLER) {
                    router.push('/seller/dashboard')
                }
                if (role === USER_ROLE.CUSTOMER) {
                    router.push('/customer/dashboard')
                }
                if (role === USER_ROLE.MANAGER) {
                    router.push('/manager/dashboard')
                }
                toast.success(response.data.message)
            } else {
                setLoading(false);
                toast.error('something went wrong!')
            }
        } catch (error) {
            setEmailVerifiedMsg(null)
            if (error.response.status === 409) {
                setEmailVerifiedMsg('check your email spam folder!')
            }
            setLoading(false);
            const errorMessages = error.response.data.errorMessages;
            const formattedErrors = {};
            errorMessages.forEach(err => {
                formattedErrors[err.path] = err.message;
            });
            setCredential(prevCredential => ({
                ...prevCredential,
                errors: formattedErrors
            }));
            toast.error(error.response.data.message)
        }
    }
    const handelVerifiedMessage = () => {
        setEmailVerifiedMsg(null);
    }
    return (
        <div className={styles.login_area}>
            <div className={`${styles.main_area} ${loading ? styles.animated_box : styles.not_animated_box}`}
                style={loading ? { background: "#FAF3F0" } : { background: "#FAFAFA" }}>
                <h4 className='fw-bold text-dark' style={{ marginBottom: "30px" }}>LOGIN HERE</h4>
                {
                    emailVerifiedMsg ?
                        <div>
                            <div className='d-flex justify-content-between alert alert-success alert-sm py-2'>
                                <small className={styles.verifiedMessage}> {emailVerifiedMsg}</small>
                                <TiDelete size="24" color="red" onClick={handelVerifiedMessage} style={{ cursor: "pointer" }} />
                            </div>

                        </div> : null
                }
                <form onSubmit={loginSubmit}>
                    <div className="form-group mb-3">
                        <label className='mb-1 fw-bold'>Email</label>
                        <input
                            name="email"
                            type="text"
                            placeholder='Enter email'
                            className='form-control w-100'
                            value={credential.email}
                            style={{ fontSize: "14px" }}
                            onChange={handelInputChange} />
                        <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>
                            {
                                credential.errors?.email ? credential.errors?.email : null
                            }
                        </small>
                    </div>

                    <div className="form-group mb-3">
                        <label className='mb-1 fw-bold'>Password</label>
                        <div className='d-flex align-items-center'>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder='Enter password'
                                className='form-control pb-1 w-100'
                                value={credential.password}
                                style={{ fontSize: "14px" }}
                                onChange={handelInputChange} />
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
                        <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>
                            {
                                credential.errors?.password ? credential.errors?.password : null
                            }
                        </small>
                        <div className='d-flex justify-content-end mt-2'>
                            <small><Link href='/reset-password'>forget password?</Link></small>
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
                    {

                        credential.errors?.password && credential.errors?.email ?
                            <FadeLoader color='green' className='mt-7 ms-3' /> :
                            credential.errors?.password || credential.errors?.email ?
                                <FadeLoader color='green' className='mt-6 ms-3' /> :
                                <FadeLoader color='green' className='mt-5 ms-3' />
                    }
                </div> : null
            }
        </div>
    );
};

export default Login;

