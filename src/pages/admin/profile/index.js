import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/Sidebar';
import Head from 'next/head';

const AdminProfile = () => {
    return (
        <div>
            <Breadcrumb />
            <Head>
                <title>Profile</title>
            </Head>
        </div>
    );
};

export default AdminProfile;
AdminProfile.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};