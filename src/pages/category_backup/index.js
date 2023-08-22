import Breadcrumb from '@/components/Breadcrumb/Index';
import CategoryCard from '@/components/Home/CategoryCard';
import MainLayout from '@/layouts/MainLayout';
import { config } from '@/config';

const CategoryPage = ({ data }) => {
    return (
        <div className='container'>
            <Breadcrumb />
            <div className='py-4'>
                <div className="row">
                    {
                        data?.categories?.data?.map((category) => <CategoryCard key={category._id} category={category} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
CategoryPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const categoryResponse = await fetch(`${config.api}/categories`);
    const categories = await categoryResponse.json();
    return {
        props: {
            data: {
                categories
            },
            revalidate: 30
        }
    };
};