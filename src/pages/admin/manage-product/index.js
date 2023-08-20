import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/components/dashboard/admin/sidebar/AdminSideBar';
import React from 'react';

const ManageProduct = () => {
    return (
        <div>
            <Breadcrumb />
        </div>
    );
};

export default ManageProduct;
ManageProduct.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};