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
                <h5 className="fw-bold text-danger">coming soon!</h5>
                <p className="small-text">Tech Mart is an online tech store offering a wide range of cutting-edge electronics, gadgets, and accessories. It provides a user-friendly platform for customers to explore and purchase the latest tech products across various categories, ensuring a convenient and up-to-date shopping experience.</p>
            </div>
        </div>
    );
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page) {
    return <SellerLayout>{page}</SellerLayout>;
};