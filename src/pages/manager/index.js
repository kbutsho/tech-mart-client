import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Manager = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/manager/dashboard');
    }, []);
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
        </div>
    )
};

export default Manager;