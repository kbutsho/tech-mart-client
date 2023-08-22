import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/AdminLayout';
import Head from 'next/head';

const AdminProfile = () => {
    return (
        <div>
            <Breadcrumb />
            <Head>
                <title>Profile</title>
            </Head>
            <div className="px-md-3 px-2 py-2">
                <p className="small-text">Tech Mart is an online tech store offering a wide range of cutting-edge electronics, gadgets, and accessories. It provides a user-friendly platform for customers to explore and purchase the latest tech products across various categories, ensuring a convenient and up-to-date shopping experience.</p>
            </div>
        </div>
    );
};

export default AdminProfile;
AdminProfile.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};