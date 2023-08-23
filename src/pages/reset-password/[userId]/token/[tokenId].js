import { useRouter } from 'next/router';
import React, { useState } from 'react';
import axios from 'axios';
import styles from '@/styles/auth/login.module.css'
import { BiHide, BiShow } from 'react-icons/bi';
import { config } from '@/config';
import { toast } from 'react-toastify';
import { FadeLoader } from 'react-spinners';


const EmailVerification = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
        errors: []
    })
    const handelInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    const formSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(!loading)
            const data = {
                userId: router.query.userId,
                token: router.query.tokenId,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            }
            const response = await axios.post(`${config.api}/auth/reset-password`, data);
            if (response.data) {
                setLoading(false)
                if (response.status === 200) {
                    setFormData({
                        password: '',
                        confirmPassword: '',
                        errors: []
                    })
                    toast.success(response.data.message)
                    router.push('/login')
                }
            }
        } catch (error) {
            setLoading(false)
            const errorMessages = error.response.data.errorMessages;
            const formattedErrors = {};
            errorMessages.forEach(err => {
                formattedErrors[err.path] = err.message;
            });
            setFormData(previousData => ({
                ...previousData,
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
    return (
        <div className={styles.login_area}>
            <div className={`${styles.main_area} ${loading ? styles.animated_box : styles.not_animated_box}`}
                style={loading ? { background: "#FAF3F0" } : { background: "#FAFAFA" }}>
                <h4 className='fw-bold text-dark' style={{ marginBottom: "30px" }}>RESET PASSWORD</h4>
                <form onSubmit={formSubmit}>
                    <div className="form-group mb-3">
                        <label className='mb-1 fw-bold'>new password</label>
                        <div className='d-flex align-items-center'>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder='new password'
                                className='form-control pb-1 w-100'
                                value={formData.password}
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
                                formData.errors?.password ? formData.errors?.password : null
                            }
                        </small>
                    </div>
                    <div className="form-group mb-3">
                        <label className='mb-1 fw-bold'>confirm password</label>
                        <div className='d-flex align-items-center'>
                            <input
                                name="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                placeholder='confirm password'
                                className='form-control pb-1 w-100'
                                value={formData.confirmPassword}
                                style={{ fontSize: "14px" }}
                                onChange={handelInputChange} />
                            {
                                showConfirmPassword ?
                                    <BiHide onClick={() => showConfirmPasswordBtn()}
                                        style={{ marginLeft: "-40px", marginBottom: "-2px", cursor: "pointer" }}
                                        size="25" /> :
                                    <BiShow onClick={() => showConfirmPasswordBtn()}
                                        style={{ marginLeft: "-40px", marginBottom: "-2px", cursor: "pointer" }}
                                        size="25" />
                            }
                        </div>
                        <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>
                            {
                                formData.errors?.confirmPassword ? formData.errors?.confirmPassword : null
                            }
                        </small>
                    </div>
                    <input type="submit" className='btn btn-primary w-100 mb-2 fw-bold btn-sm' value="submit" />
                </form>


            </div>
            {
                loading ? <div className={`${styles.loading}`}
                    style={{ minHeight: "100vh" }}>
                    <FadeLoader color='green' className='mt-5 ms-3' />
                </div> : null
            }
        </div>
    );
};

export default EmailVerification;