import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Admin = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/admin/dashboard');
    }, []);
    return (
        <div>
            <Head>
                <title>dashboard</title>
            </Head>
        </div>
    )
};

export default Admin;