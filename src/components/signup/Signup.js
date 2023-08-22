import styles from '@/styles/auth/signup.module.css'
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { config } from '@/config';
import { toast } from 'react-toastify';
import { FadeLoader } from 'react-spinners';
import { TiDelete } from 'react-icons/ti'
import { USER_ROLE } from '@/constant/user.role.constant';
import { useEffect } from 'react';

const Signup = ({ role }) => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [verifiedMessage, setVerifiedMessage] = useState(null)
    const [showRole, setShowRole] = useState("SIGNUP HERE");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: []
    })
    const handelInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const formSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(!loading);
            const data = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                role: role
            }
            const response = await axios.post(`${config.api}/auth/signup`, data
            );
            if (response.data.data) {
                setLoading(false);
                toast.info("check your email!")
                setVerifiedMessage(response.data.message)
            }
            else {
                setLoading(false);
                setVerifiedMessage(null)
                toast.error('something went wrong!')
            }

        } catch (error) {
            setLoading(false);
            setVerifiedMessage(null);
            const errorMessages = error.response.data.errorMessages;
            const formattedErrors = {};
            errorMessages.forEach(err => {
                formattedErrors[err.path] = err.message;
            });
            setFormData(prevData => ({
                ...prevData,
                errors: formattedErrors
            }));
            toast.error(error.response.data.message)
        }
    }
    const showPasswordBtn = () => {
        setShowPassword(!showPassword);
    }
    const showConfirmPasswordBtn = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }
    const handelVerifiedMessage = () => {
        setVerifiedMessage(null);
    }
    useEffect(() => {
        if (role === USER_ROLE.ADMIN) {
            setShowRole("ADMIN REQUEST");
        } else if (role === USER_ROLE.MANAGER) {
            setShowRole("MANAGER REQUEST");
        } else if (role === USER_ROLE.SELLER) {
            setShowRole("RETAILER REQUEST");
        } else if (role === USER_ROLE.CUSTOMER) {
            setShowRole("SIGNUP HERE");
        }
    }, [role]);
    return (
        <div className={styles.signup_area}>
            <div className={`${styles.main_area} ${loading ? styles.animated_box : styles.not_animated_box}`}
                style={loading ? { background: "#FAF3F0" } : { background: "#FAFAFA" }}>
                <h4 className='fw-bold text-dark mb-5'>{showRole}</h4>
                {
                    verifiedMessage ?
                        <div>
                            <div className='d-flex justify-content-between alert alert-success alert-sm py-2'>
                                <small className={styles.verifiedMessage}> {verifiedMessage}</small>
                                <TiDelete size="24" color="red" onClick={handelVerifiedMessage} style={{ cursor: "pointer" }} />
                            </div>

                        </div> : null
                }
                <form onSubmit={formSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label className='mb-2 fw-bold'>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className='form-control'
                                    onChange={handelInputChange}
                                    placeholder='enter first name' />
                                <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>
                                    {
                                        formData.errors?.firstName ? formData.errors?.firstName : null
                                    }
                                </small>
                            </div>
                            <div className="form-group mb-3">
                                <label className='mb-2 fw-bold'>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className='form-control'
                                    onChange={handelInputChange}
                                    placeholder='enter last name' />
                                <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>
                                    {
                                        formData.errors?.lastName ? formData.errors?.lastName : null
                                    }
                                </small>
                            </div>
                            <div className="form-group mb-3">
                                <label className='mb-2 fw-bold'>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    className='form-control'
                                    onChange={handelInputChange}
                                    placeholder='enter email' />
                                <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>
                                    {
                                        formData.errors?.email ? formData.errors?.email : null
                                    }
                                </small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3">
                                <label className='mb-2 fw-bold'>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    className='form-control'
                                    onChange={handelInputChange}
                                    placeholder='enter phone' />
                                <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>
                                    {
                                        formData.errors?.phone ? formData.errors?.phone : null
                                    }
                                </small>
                            </div>
                            <div className="form-group mb-3">
                                <label className='mb-2 fw-bold'>Password</label>
                                <div className="d-flex align-items-center">
                                    <input
                                        name="password"
                                        onChange={handelInputChange}
                                        type={showPassword ? "text" : "password"}
                                        className='form-control'
                                        placeholder='enter password' />
                                    {
                                        showPassword ?
                                            <BiHide onClick={() => showPasswordBtn()}
                                                style={{ marginLeft: "-40px", marginBottom: "-2px", cursor: "pointer" }}
                                                size="25" /> :
                                            <BiShow onClick={() => showPasswordBtn()}
                                                style={{ marginLeft: "-40", marginBottom: "-2px", cursor: "pointer" }}
                                                size="25" />
                                    }
                                </div>
                                <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>
                                    {
                                        formData.errors?.password ? formData.errors?.password : null
                                    }
                                </small>
                            </div>
                            <div className="form-group mb-3">
                                <label className='mb-2 fw-bold'>confirm password</label>
                                <div className="d-flex align-items-center">
                                    <input
                                        name="confirmPassword"
                                        onChange={handelInputChange}
                                        type={showConfirmPassword ? "text" : "password"}
                                        className='form-control'
                                        placeholder='confirm password' />
                                    {
                                        showConfirmPassword ?
                                            <BiHide onClick={() => showConfirmPasswordBtn()}
                                                style={{ marginLeft: "-40px", marginBottom: "-2px", cursor: "pointer" }}
                                                size="25" /> :
                                            <BiShow onClick={() => showConfirmPasswordBtn()}
                                                style={{ marginLeft: "-40", marginBottom: "-2px", cursor: "pointer" }}
                                                size="25" />
                                    }
                                </div>
                                <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>
                                    {
                                        formData.errors?.confirmPassword ? formData.errors?.confirmPassword : null
                                    }
                                </small>
                            </div>
                        </div>
                    </div>
                    <input type="submit" className='my-3 btn btn-primary w-100 fw-bold' value="submit" />
                    <div className='d-flex justify-content-end'>
                        <small>
                            already have an account?
                            <Link style={{ textDecoration: "none", fontWeight: "bold" }} href="/login"> login here</Link>
                        </small>
                    </div>
                </form>
            </div>
            {
                loading ? <div className={`${styles.loading}`}
                    style={{ minHeight: "100vh" }}>
                    <FadeLoader color='green' className='mt-5 ms-2' />
                </div> : null
            }
        </div>
    );
};

export default Signup;