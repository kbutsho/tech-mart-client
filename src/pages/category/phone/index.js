import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import banner from '@/assets/category/phone-banner.png'
import Image from 'next/image';
import ProductCard from '@/components/Category/ProductCard';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import styles from '@/styles/home/product.module.css'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { PRODUCT_STATUS } from '@/constant/product.constant';

const PhoneCategory = ({ data }) => {
    const [product, setProduct] = useState(data.productResponse);

    // filter by price range
    const [priceRange, setPriceRange] = useState(data.priceRangeResponse.data);
    const handlePriceRangeChange = (event, newValue) => {
        setPriceRange(newValue);
    }
    const [priceToggle, setPriceToggle] = useState(true)
    const handelPriceToggle = () => {
        setPriceToggle(!priceToggle)
    }

    // filter by status
    const productStatus = [PRODUCT_STATUS.IN_STOCK, PRODUCT_STATUS.LIMITED_STOCK, PRODUCT_STATUS.UPCOMING, PRODUCT_STATUS.STOCK_OUT, PRODUCT_STATUS.DISCONTINUE]
    const [filterByStatus, setFilterByStatus] = useState('');
    const handelFilterByStatus = (event) => {
        setFilterByStatus(event.target.value);
    }

    const [statusToggle, seStatusToggle] = useState(true)
    const handelStatusToggle = () => {
        seStatusToggle(!statusToggle)
    }



    // filter 
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
                        <div className="col-md-3 fixed">
                            <div className={styles.filter_header} style={{ marginTop: "12px" }}>
                                <span>Filter</span>
                            </div>

                            {/* filter by price range */}
                            <div className={styles.filter_area}>
                                <button onClick={handelPriceToggle}>Price Range
                                    <div>
                                        <span className={` ${priceToggle ? styles.show : styles.hide}`}><IoIosArrowUp size="20px" /></span>
                                        <span className={` ${priceToggle ? styles.hide : styles.show}`}><IoIosArrowDown size="20px" /></span>
                                    </div>
                                </button>

                                <div className={`mt-3 px-2 ${priceToggle ? styles.show : styles.hide}`}>
                                    <hr />
                                    <Slider value={priceRange} onChange={handlePriceRangeChange} valueLabelDisplay="auto" min={data.priceRangeResponse.data[0]} max={data.priceRangeResponse.data[1]} />
                                    <div className='d-flex justify-content-between pb-2'>
                                        <small>{priceRange[0]}</small>
                                        <small>{priceRange[1]}</small>
                                    </div>
                                </div>
                            </div>

                            {/* // filter by status */}
                            <div className={styles.filter_area}>
                                <button onClick={handelStatusToggle}>Status
                                    <div>
                                        <span className={` ${statusToggle ? styles.show : styles.hide}`}><IoIosArrowUp size="20px" /></span>
                                        <span className={` ${statusToggle ? styles.hide : styles.show}`}><IoIosArrowDown size="20px" /></span>
                                    </div>
                                </button>

                                <div className={`mt-3 px-2 ${statusToggle ? styles.show : styles.hide}`}>
                                    <hr />
                                    {
                                        productStatus.map((status, index) => (
                                            <div className={styles.radio_area} key={index}>
                                                <input
                                                    type="radio"
                                                    name="status"
                                                    id={`status_${index}`}
                                                    value={status}
                                                    onChange={handelFilterByStatus}
                                                />
                                                <label htmlFor={`status_${index}`}>{status.split('-').join(' ')}</label>
                                            </div>
                                        ))
                                    }
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