import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { config } from "@/config";
import axios from 'axios';
import okImage from "@/assets/ok.png";
import Image from 'next/image';
import Link from 'next/link';

const EmailVerification = () => {
    const [status, setStatus] = useState();
    const router = useRouter();
    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = (`${config.api}/auth/${router.query.userId}/token/${router.query.tokenId}`);
                const response = await axios.get(url);
                if (response.data) {
                    if (response.status === 200) {
                        setStatus(200) // verify successfully
                    }
                }
            } catch (error) {
                console.log(error.response.status)
                if (error.response.status === 409) {
                    setStatus(409)// already verified 
                }
                if (error.response.status === 403) {
                    setStatus(403) // invalid request
                }
            }
        }
        verifyEmailUrl()
    }, [router.query])

    return (
        <div>
            {
                status === 200 ?
                    <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>

                        <div className='text-center'>
                            <Image src={okImage} alt="img" height={140} width={140} />
                            <h5 className='mt-3 fw-bold'>email verified successfully!</h5>
                            <Link className='btn btn-primary px-5 mt-2 fw-bold btn-sm' href="/login">Login</Link>
                        </div>
                    </div> : status === 409 ?
                        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>

                            <div className='text-center'>
                                <Image src={okImage} alt="img" height={140} width={140} />
                                <h5 className='mt-3 fw-bold'>email already verified!</h5>
                                <Link className='btn btn-primary px-5 mt-2 fw-bold btn-sm' href="/login">Login</Link>
                            </div>
                        </div> :
                        status === 403 ?
                            <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
                                <h5 style={{ fontWeight: "bold", "color": "red" }}>invalid request!</h5>
                            </div> : null
            }
        </div>
    );
};

export default EmailVerification;