import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';

const OrderPage = () => {

    return (
        <div className='container'>
            <Breadcrumb />
        </div>
    );
};

export default OrderPage;
OrderPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};