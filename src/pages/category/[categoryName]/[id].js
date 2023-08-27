import Breadcrumb from '@/components/Breadcrumb/Index';
import ProductDetailsCard from '@/components/Product/DetailsCard';
import MainLayout from '@/layouts/MainLayout';
import { config } from '@/config';

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

export const getStaticPaths = async () => {
    const res = await fetch(`${config.api}/products`);
    const data = await res.json();
    const paths = data.data.map((product) => ({
        params: { categoryName: product.category, id: product.id }
    }));
    return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`${config.api}/products/${params.id}`);
    const product = await res.json();
    return {
        props: {
            product: product
        },
        revalidate: 30
    };
};
