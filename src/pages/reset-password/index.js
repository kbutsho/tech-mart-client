import React from 'react';
import { useState } from 'react';
import styles from '@/styles/auth/login.module.css'
import { FadeLoader } from 'react-spinners';
import { config } from '@/config';
import axios from 'axios';
import { toast } from 'react-toastify';
import { TiDelete } from 'react-icons/ti';

const ForgetPassword = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null)
    const [formData, setFormData] = useState({
        email: '',
        errors: []
    })
    const handelInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }
    const formSubmit = async (event) => {
        event.preventDefault();
        try {
            setMessage(null)
            setLoading(!loading)
            const data = { email: formData.email }
            const response = await axios.post(`${config.api}/auth/send-email`, data);
            if (response.data) {
                setLoading(false)
                setFormData({
                    email: '',
                    errors: []
                })
                setMessage('check your email spam folder!')
                toast.success(response.data.message)
            }
        } catch (error) {
            setMessage(null)
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
    const handelMessageShow = () => {
        setMessage(null);
    }
    return (
        <div className={styles.login_area}>
            <div className={`${styles.main_area} ${loading ? styles.animated_box : styles.not_animated_box}`}
                style={loading ? { background: "#FAF3F0" } : { background: "#FAFAFA" }}>
                <h4 className='fw-bold text-dark' style={{ marginBottom: "30px" }}>RESET PASSWORD</h4>
                {
                    message ?
                        <div>
                            <div className='d-flex justify-content-between alert alert-success alert-sm py-2'>
                                <small className={styles.verifiedMessage}> {message}</small>
                                <TiDelete size="24" color="red" onClick={handelMessageShow} style={{ cursor: "pointer" }} />
                            </div>

                        </div> : null
                }
                <form onSubmit={formSubmit}>
                    <div className="form-group mb-3">
                        <label className='mb-3 fw-bold'>Your Email</label>
                        <input
                            name="email"
                            type="text"
                            placeholder='enter email'
                            className='form-control w-100'
                            value={formData.email}
                            style={{ fontSize: "14px" }}
                            onChange={handelInputChange} />
                        <small className='fw-bold' style={{ color: "red", fontSize: "12px" }}>
                            {
                                formData.errors?.email ? formData.errors?.email : null
                            }
                        </small>
                    </div>
                    <input type="submit" className='btn btn-primary w-100 mb-2  fw-bold btn-sm' value="submit" />
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

export default ForgetPassword;