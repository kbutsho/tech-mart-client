import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/sidebar';
import Head from 'next/head';

const AdminManagers = () => {
    return (
        <div className="bg-warning">
            <Head>
                <title>Managers</title>
            </Head>
            <Breadcrumb />
            <div className="p-md-5 p-2">
                main
            </div>
        </div>
    );
};

export default AdminManagers;
AdminManagers.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};