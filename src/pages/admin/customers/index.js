import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/sidebar';
import Head from 'next/head';

const AdminCustomers = () => {
    return (
        <div className="bg-warning">
            <Head>
                <title>Customers</title>
            </Head>
            <Breadcrumb />
            <div className="p-md-5 p-2">
                main
            </div>
        </div>
    );
};

export default AdminCustomers;
AdminCustomers.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};