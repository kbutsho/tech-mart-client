import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/Sidebar';
import Head from 'next/head';

const AdminCategories = () => {
    return (
        <div className="bg-warning">
            <Head>
                <title>Categories</title>
            </Head>
            <Breadcrumb />
            <div className="p-md-5 p-2">
                main
            </div>
        </div>
    );
};

export default AdminCategories;
AdminCategories.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};