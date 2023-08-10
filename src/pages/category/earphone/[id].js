import Breadcrumb from '@/components/Breadcrumb/Index';
import ProductDetailsCard from '@/components/Product/DetailsCard';
import MainLayout from '@/layouts/MainLayout';

const Details = ({ product }) => {
    return (
        <div className='container'>
            <Breadcrumb name={product.data.name} />
            <ProductDetailsCard product={product} />
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