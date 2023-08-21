import { useAdminProtection } from '@/authentication/useAdminProtection';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Admin = () => {
    useAdminProtection();
    const router = useRouter();
    useEffect(() => {
        router.replace('/admin/dashboard');
    }, []);
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
        </div>
    )
};

export default Admin;