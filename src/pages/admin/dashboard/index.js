import Breadcrumb from "@/components/Breadcrumb/Index";
import AdminLayout from "@/layouts/admin/AdminLayout";
import Head from "next/head";

const Dashboard = () => {

    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-3 px-2 py-2">
                <h5 className="fw-bold text-danger">coming soon!</h5>
                <input type="text" placeholder="name" className="form-control" />
            </div>
        </div>
    );
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};