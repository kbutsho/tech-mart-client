import React from 'react';
import logo from '@/assets/navbar/logo-white.png'
import Image from 'next/image';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import Link from 'next/link';
import { BiMap } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className='footer' style={{ background: "#18253A" }}>
            <div className='container pb-4 pt-5'>
                <div className="row">
                    <div className="col-md-3 pb-3">
                        <Image src={logo} width={180} height={60} alt="img" />
                        <p className='text-white mt-4' style={{ fontSize: "12px" }}>
                            Motion View is the largest Eco Product importer
                            and Distributor in Bangladesh and now holds
                            the leading position in the ecosystem industry.
                        </p>
                        <div>
                            <BsFacebook size="26px" color="white" />
                            <BsYoutube size="26px" color="white" className='mx-3' />
                            <BsInstagram size="26px" color="white" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5 className='text-white fw-bold'>Links</h5>
                        <div className='link-area'>
                            <Link className='link' href="/">About us</Link>
                            <Link className='link' href="/">Contact us</Link>
                            <Link className='link' href="/">Service center</Link>
                            <Link className='link' href="/">Support center</Link>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5 className='text-white fw-bold'>Categories</h5>
                        <div className='link-area'>
                            <Link className='link' href="/">Phone</Link>
                            <Link className='link' href="/">Watch</Link>
                            <Link className='link' href="/">Laptop</Link>
                            <Link className='link' href="/">Camera</Link>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5 className='text-white fw-bold'>Brands</h5>
                        <div className='link-area'>
                            <Link className='link' href="/">Samsung</Link>
                            <Link className='link' href="/">Apple</Link>
                            <Link className='link' href="/">Xiaomi</Link>
                            <Link className='link' href="/">Realme</Link>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className='text-white fw-bold mb-3'>Address</h5>
                        <div className='d-flex'>
                            <BiMap color='white' size="24px" />
                            <p className='ms-2 text-white' style={{ fontSize: "14px" }}>
                                10/25 (9th Commercial Floor), Eastern Plaza,
                                <br /> 70 Bir Uttam C.R Datta Road, Hatirpool,<br /> Dhaka-1205
                            </p>
                        </div>
                        <div className='d-flex'>
                            <AiOutlineMail color='white' size="24px" />
                            <p className='ms-2 text-white' style={{ fontSize: "14px" }}>kbutsho@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='text-center text-white pt-4'>
                    <p style={{ fontSize: "13px" }}>Copyright © {new Date().getFullYear()} || all rights reserved by kbutsho</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;