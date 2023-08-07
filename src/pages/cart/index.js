import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';

const CartPage = () => {
    
    return (
        <div className='container'>
            <Breadcrumb />
        </div>
    );
};

export default CartPage;
CartPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};