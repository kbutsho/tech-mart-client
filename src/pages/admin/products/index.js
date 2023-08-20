import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/Sidebar';
import Head from 'next/head';

const AdminProducts = () => {
    return (
        <div>
            <Head>
                <title>Products</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-5 px-2 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus dignissimos nemo sed. Enim nihil aliquid culpa nisi incidunt modi voluptatibus autem recusandae necessitatibus nulla est dicta ullam natus deserunt, nesciunt dolorem ea ipsam provident dolorum reprehenderit beatae eum! Reprehenderit eveniet ducimus numquam ab adipisci inventore magnam recusandae. Quaerat cupiditate, asperiores tempore similique, velit rem numquam quos nostrum incidunt praesentium, eum officia minus esse minima dolores. Omnis ut quaerat ullam nam provident eaque doloremque veniam distinctio ipsam! Qui, cumque. Perferendis, esse omnis sapiente ratione eos error itaque fugit repellat deserunt cupiditate consectetur aut harum maxime quis quas optio quam voluptatem.
            </div>
        </div>
    );
};

export default AdminProducts;
AdminProducts.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};