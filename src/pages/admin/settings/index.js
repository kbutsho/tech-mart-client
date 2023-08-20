import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/Sidebar';
import Head from 'next/head';

const Settings = () => {
    return (
        <div className="bg-warning">
            <Head>
                <title>Settings</title>
            </Head>
            <Breadcrumb />
            <div className="p-md-5 p-2">
                main
            </div>
        </div>
    );
};

export default Settings;
Settings.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};