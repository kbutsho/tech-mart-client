import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/Sidebar';
import Head from 'next/head';

const AdminCategories = () => {
    return (
        <div>
            <Head>
                <title>Categories</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-5 px-2 py-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quia vero aut tenetur aliquid sed quae natus, dolores ipsam rerum corporis exercitationem hic consectetur, unde ullam animi quis reprehenderit quisquam officia autem veniam libero cumque. Aliquam laboriosam sapiente at molestias necessitatibus officia tenetur iusto accusamus eveniet fugit! Aliquid, consequuntur vero accusantium veritatis, fugiat eligendi ratione architecto doloribus quibusdam nisi earum repellendus eveniet consequatur nobis libero dolor corporis commodi, perferendis facere consectetur. Ipsam, cupiditate? Voluptates, ipsum quidem quis, in, illo hic vero est optio accusamus nam nisi? Accusamus nemo deleniti repellendus, vel et quibusdam expedita quos natus illo molestias praesentium tempora!
            </div>
        </div>
    );
};

export default AdminCategories;
AdminCategories.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};