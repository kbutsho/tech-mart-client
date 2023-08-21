import styles from '@/styles/auth/login.module.css'
import Image from 'next/image';
import React from 'react';
import google from '@/assets/login/google.png'
import { useState } from 'react';
import Link from 'next/link';
import { BiHide, BiShow } from 'react-icons/bi';
import { BarLoader } from 'react-spinners';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [credential, setCredential] = useState({
        email: '',
        password: '',
        errors: []
    })
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
    const [showPassword, setShowPassword] = useState(false)
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
                password: credential.password
            }
            const response = await axios.post(`https://tech-mart-server.vercel.app/api/auth/login`, data
            );
            console.log(response)
            // if (response.data.error) {
            //     setLoading(false);
            //     setLogin({ ...login, errors: response.data.error });
            //     swal("warning", response.data.message, "error")
            // } else {
            //     setLoading(false);
            //     setLogin({
            //         errors: ''
            //     })
            //     swal("success", response.data.message, "success");
            //     localStorage.setItem('token', response.data.data.token)
            //     localStorage.setItem('email', response.data.data.user.email)
            //     localStorage.setItem('id', response.data.data.user.id)
            //     localStorage.setItem('role', response.data.data.user.role)
            //     navigate('/dashboard');
            //     window.location.reload(false);
            // }
        } catch (error) {
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
    return (
        <div className={styles.login_area}>
            <div className={`${styles.main_area} ${loading ? styles.animated_box : styles.not_animated_box}`}
                style={loading ? { background: "#FFF3DA" } : { background: "#FAFAFA" }}>
                <h4 className='fw-bold text-dark' style={{ marginBottom: "30px" }}>LOGIN HERE</h4>
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
                                credential.errors.email ? credential.errors.email : null
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
                                credential.errors.password ? credential.errors.password : null
                            }
                        </small>
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
                </div> : null
            }
        </div>
    );
};

export default Login;

