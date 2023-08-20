import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/components/dashboard/admin/sidebar/AdminSideBar';
import Head from 'next/head';
import React from 'react';

const Profile = () => {
    return (
        <div>
            <Breadcrumb />
            <Head>
                <title>Profile</title>
            </Head>
        </div>
    );
};

export default Profile;
Profile.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};