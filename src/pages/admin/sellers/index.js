import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminSidebar from '@/layouts/admin/Sidebar';
import Head from 'next/head';

const AdminSellers = () => {
    return (
        <div>
            <Head>
                <title>Sellers</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-5 px-2 mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, delectus ab eaque quae dolore aperiam odit recusandae unde quasi rerum mollitia praesentium totam blanditiis corrupti adipisci a soluta quod voluptatibus! Exercitationem fuga sapiente, animi praesentium eveniet saepe aliquam quisquam dolor non doloribus illo commodi debitis ratione quia mollitia distinctio consequatur? Ullam, delectus? Impedit soluta et obcaecati tempora. Eveniet, dolorum! Odit eos nihil aperiam delectus error aspernatur illum sed cum, eligendi assumenda dicta. Voluptas quaerat quae eligendi tempore! Autem iure quia a, cumque esse voluptates amet pariatur doloremque beatae harum rem sit eaque non dolorem mollitia corrupti provident laboriosam. Ab, ad!
            </div>
        </div>
    );
};

export default AdminSellers;
AdminSellers.getLayout = function getLayout(page) {
    return <AdminSidebar>{page}</AdminSidebar>;
};