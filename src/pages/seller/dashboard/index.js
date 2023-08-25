import Breadcrumb from "@/components/Breadcrumb/Index";
import SellerLayout from "@/layouts/seller/SellerLayout";
import Head from "next/head";

const Dashboard = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-3 px-2 py-2">
            </div>
        </div>
    );
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page) {
    return <SellerLayout>{page}</SellerLayout>;
};