import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/components/dashboard/admin/sidebar/AdminSideBar';
import Head from 'next/head';
import React from 'react';

const ManageProduct = () => {
    return (
        <div>
            <Breadcrumb />
            <Head>
                <title>Manage product</title>
            </Head>
        </div>
    );
};

export default ManageProduct;
ManageProduct.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};