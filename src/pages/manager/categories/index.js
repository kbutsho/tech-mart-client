import Breadcrumb from '@/components/Breadcrumb/Index';
import ManagerLayout from '@/layouts/manager/ManagerLayout';
import Head from 'next/head';

const ManagerCategories = () => {
    return (
        <div>
            <Head>
                <title>Categories</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-3 px-2 py-2">
                <p className="small-text">Tech Mart is an online tech store offering a wide range of cutting-edge electronics, gadgets, and accessories. It provides a user-friendly platform for customers to explore and purchase the latest tech products across various categories, ensuring a convenient and up-to-date shopping experience.</p>
            </div>
        </div>
    );
};

export default ManagerCategories;
ManagerCategories.getLayout = function getLayout(page) {
    return <ManagerLayout>{page}</ManagerLayout>;
};