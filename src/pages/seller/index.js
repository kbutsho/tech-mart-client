import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Seller = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/seller/dashboard');
    }, []);
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
        </div>
    )
};

export default Seller;