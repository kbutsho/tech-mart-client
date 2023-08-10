import Breadcrumb from '@/components/Breadcrumb/Index';
import ProductDetailsCard from '@/components/Product/DetailsCard';
import MainLayout from '@/layouts/MainLayout';

const Details = ({ product }) => {
    return (
        <div className='container'>
            <div className='details'>
                <Breadcrumb name={product.data.name} />
                <div className='py-4'>
                    <ProductDetailsCard product={product} />
                </div>
            </div>
        </div>
    );
};

export default Details;
Details.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://tech-mart-server.vercel.app/api/products/${params.id}`);
    const product = await res.json();
    return {
        props: {
            product: product
        },
    };
};