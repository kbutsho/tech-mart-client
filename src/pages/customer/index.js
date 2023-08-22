import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Customer = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/customer/dashboard');
    }, []);
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
        </div>
    )
};

export default Customer;