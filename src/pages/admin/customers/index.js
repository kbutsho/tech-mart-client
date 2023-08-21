import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/AdminLayout';
import Head from 'next/head';

const AdminCustomers = () => {
    return (
        <div>
            <Head>
                <title>Customers</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-3 px-2 py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur dicta tenetur molestias laborum tempora qui tempore assumenda. Quis rem corporis, minus voluptatem non quasi possimus in? Vitae sit in obcaecati consequuntur aliquam quae quasi sequi illum provident. Quisquam quas provident distinctio, perferendis similique ut ullam eaque eveniet iste tempore commodi sint magnam unde nobis quasi non nostrum consequuntur deserunt delectus nam officia natus voluptatum. Ab veniam et at facilis eos necessitatibus, unde illo. Ea non quia quisquam et tempora molestiae autem dolorem ullam minima voluptatibus iure voluptatum culpa veniam maiores praesentium libero doloremque numquam, saepe magni similique soluta at.
            </div>
        </div>
    );
};

export default AdminCustomers;
AdminCustomers.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};