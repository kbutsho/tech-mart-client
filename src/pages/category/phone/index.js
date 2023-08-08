import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import banner from '@/assets/category/phone-banner.png'
import Image from 'next/image';
import ProductCard from '@/components/Category/ProductCard';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import styles from '@/styles/home/product.module.css'

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

    // const [priceToggle, setPriceToggle] = useState(false)
    // const handelPriceToggle = () => {
    //     setPriceToggle(!priceToggle)
    // }
    return (
        <div className='container'>
            <Breadcrumb />
            <div className='py-4'>
                <Image src={banner} layout='responsive' height={360} width={1920} alt="img" />
                <div className="phone-area py-4">
                    <div className="row">
                        <div className="col-md-3">
                            <div className='alert alert-secondary w-100 fw-bold text-center py-2' style={{ marginTop: "12px" }}>
                                Filter
                            </div>
                            <div className={styles.priceRange_area}>
                                <h6 className='fw-bold'>Price Range</h6>
                                <hr />
                                <Slider value={priceRange} onChange={handlePriceRangeChange} valueLabelDisplay="auto" min={data.priceRangeResponse.data[0]} max={data.priceRangeResponse.data[1]} />
                                <div className='d-flex justify-content-between'>
                                    <h6>{priceRange[0]}</h6>
                                    <h6>{priceRange[1]}</h6>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {
                                    filteredData.length > 0 ? filteredData.map((product) => <ProductCard key={product._id} product={product} />) :
                                        <div className='d-flex justify-content-center align-items-center' style={{ height: "40vh" }}>
                                            <h5>no data found!</h5>
                                        </div>
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