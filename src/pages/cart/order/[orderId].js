import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';

const OrderDetails = () => {

    return (
        <div className='container'>
            <Breadcrumb />
        </div>
    );
};

export default OrderDetails;
OrderDetails.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};