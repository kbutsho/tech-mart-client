import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/Sidebar';
import Head from 'next/head';

const AdminBrands = () => {
    return (
        <div>
            <Head>
                <title>Brands</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-5 px-2 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quos molestias, consequuntur autem nulla corporis eveniet blanditiis fugit, veritatis cupiditate mollitia voluptatem sed. Veniam similique vel ipsam iure debitis eos distinctio, hic voluptas eaque odio unde illum. Quibusdam voluptates eaque soluta exercitationem necessitatibus iure id provident beatae accusamus esse aut hic officia ratione, minima nulla, minus modi? Eaque non aspernatur ducimus cum distinctio. Libero itaque harum porro? Ipsam quibusdam optio nemo id reprehenderit maxime quidem laborum modi, autem quo nesciunt, ab, magnam alias tempore. Optio culpa corporis impedit itaque esse temporibus dolor nostrum adipisci numquam! Quam eius facilis nesciunt cum!
            </div>
        </div>
    );
};

export default AdminBrands;
AdminBrands.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};