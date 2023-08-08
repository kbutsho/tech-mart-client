import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import banner from '@/assets/category/phone-banner.png'
import Image from 'next/image';
import ProductCard from '@/components/Category/ProductCard';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const PhoneCategory = ({ data }) => {
    const [product, setProduct] = useState(data.productResponse);
    const [priceRange, setPriceRange] = useState(data.priceRangeResponse.data);
    const handlePriceRangeChange = (event, newValue) => {
        setPriceRange(newValue);
    }

    const filteredData = product.data.filter((p) => {
        const range = p.price >= priceRange[0] && p.price <= priceRange[1];
        return range;
    });
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
                            <div className='me-2'>
                                <Slider value={priceRange} onChange={handlePriceRangeChange} valueLabelDisplay="auto" min={data.priceRangeResponse.data[0]} max={data.priceRangeResponse.data[1]} />
                                <p>Range is {priceRange[0]} -{priceRange[1]}</p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {
                                    filteredData ? filteredData.map((product) => <ProductCard key={product._id} product={product} />) : <h1>loading......</h1>
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
    const phoneCategoryResponse = await fetch(`https://tech-mart-server.vercel.app/api/products?category=phone`);
    const priceRange = await fetch(`https://tech-mart-server.vercel.app/api/products/price-range`);
    const productResponse = await phoneCategoryResponse.json();
    const priceRangeResponse = await priceRange.json();
    return {
        props: {
            data: {
                productResponse, priceRangeResponse
            },
            revalidate: 30
        }
    };
};