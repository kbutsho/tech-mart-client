import Breadcrumb from "@/components/Breadcrumb/Index";
import AdminSidebar from "@/layouts/admin/AdminLayout";
import Head from "next/head";

const Dashboard = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-3 px-2 py-2">
                <div className="row">
                    <div className="col-md-3 mb-2">
                        <div className="bg-info p-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quia dolor temporibus expedita. Amet, minima dolor. Rem repellat reiciendis at quis labore, ducimus alias quos, quae quo sed, neque pariatur?
                        </div>
                    </div>
                    <div className="col-md-3 mb-2">
                        <div className="bg-info p-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quia dolor temporibus expedita. Amet, minima dolor. Rem repellat reiciendis at quis labore, ducimus alias quos, quae quo sed, neque pariatur?
                        </div>
                    </div>
                    <div className="col-md-3 mb-2">
                        <div className="bg-info p-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quia dolor temporibus expedita. Amet, minima dolor. Rem repellat reiciendis at quis labore, ducimus alias quos, quae quo sed, neque pariatur?
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="bg-info p-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quia dolor temporibus expedita. Amet, minima dolor. Rem repellat reiciendis at quis labore, ducimus alias quos, quae quo sed, neque pariatur?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};