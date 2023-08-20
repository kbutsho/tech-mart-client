import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/components/dashboard/admin/sidebar/AdminSideBar';
import React from 'react';

const Profile = () => {
    return (
        <div>
            <Breadcrumb />
        </div>
    );
};

export default Profile;
Profile.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};