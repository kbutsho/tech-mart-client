import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import banner from '@/assets/category/phone-banner.png'
import Image from 'next/image';
import ProductCard from '@/components/Category/ProductCard';

const PhoneCategory = ({ data }) => {

    return (
        <div className='container'>
            <Breadcrumb />
            <div className='py-4'>
                <Image src={banner} layout='responsive' height={360} width={1920} alt="img" />
                <div className="phone-area py-4">
                    <div className="row">
                        <div className="col-md-3">
                            <h6 className='btn btn-primary w-100 fw-bold' style={{ marginTop: "12px" }}>Filter</h6>
                            {/* dropdown */}
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {
                                    data?.items?.data.map((product) => <ProductCard key={product._id} product={product} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PhoneCategory;
PhoneCategory.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
export const getStaticProps = async () => {
    const phoneCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=phone");
    const items = await phoneCategoryResponse.json();
    return {
        props: {
            data: {
                items
            },
            revalidate: 30
        }
    };
};