import BrandCard from '@/components/Brand/BrandCard';
import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import { config } from '@/config';

const BrandPage = ({ data }) => {
    return (
        <div className='container'>
            <Breadcrumb />
            <div className='py-4'>
                <div className="row">
                    {
                        data?.brands?.data?.map((brand) => <BrandCard key={brand._id} brand={brand} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandPage;
BrandPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const brandResponse = await fetch(`${config.api}/brands`);
    const brands = await brandResponse.json();
    return {
        props: {
            data: {
                brands
            },
            revalidate: 30
        }
    };
};