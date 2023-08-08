import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import banner from '@/assets/category/phone-banner.png'
import Image from 'next/image';
import ProductCard from '@/components/Category/ProductCard';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import styles from '@/styles/home/product.module.css'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { PRODUCT_BRAND, PRODUCT_STATUS } from '@/constant/product.constant';

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
    const productStatus = [
        PRODUCT_STATUS.IN_STOCK,
        PRODUCT_STATUS.STOCK_OUT,
        PRODUCT_STATUS.UPCOMING,
        PRODUCT_STATUS.DISCONTINUE,
        PRODUCT_STATUS.LIMITED_STOCK,
        "all status"
    ]
    const [filterByStatus, setFilterByStatus] = useState('');
    const handelFilterByStatus = (event) => {
        setFilterByStatus(event.target.value);
    }
    const [statusToggle, setStatusToggle] = useState(true)
    const handelStatusToggle = () => {
        setStatusToggle(!statusToggle)
    }


    // filter by brand
    const productBrand = [
        PRODUCT_BRAND.SAMSUNG,
        PRODUCT_BRAND.APPLE,
        PRODUCT_BRAND.XIAOMI,
        PRODUCT_BRAND.ONEPLUS,
        PRODUCT_BRAND.OPPO,
        PRODUCT_BRAND.VIVO,
        PRODUCT_BRAND.REALME,
        PRODUCT_BRAND.PIXEL,
        "all brand"
    ];
    const [filterByBrand, setFilterByBrand] = useState('');
    const handelFilterByBrand = (event) => {
        setFilterByBrand(event.target.value);
    }
    const [brandToggle, setBrandToggle] = useState(true)
    const handelBrandToggle = () => {
        setBrandToggle(!brandToggle)
    }


    // filter by rating
    const [ratingRange, setRatingRange] = useState([0, 5]);
    const handleRatingRangeChange = (event, newValue) => {
        setRatingRange(newValue);
    }
    const [ratingToggle, setRatingToggle] = useState(true)
    const handelRatingToggle = () => {
        setRatingToggle(!ratingToggle)
    }

    // search input field
    const [searchTerm, setSearchTerm] = useState('');
    const handelSearch = (event) => {
        setSearchTerm(event.target.value);
    };


    // filter and search
    const filteredData = product.data.filter((item) => {
        // filter
        const statusMatch = filterByStatus ? item.status.includes(filterByStatus) : true;
        const brandMatch = filterByBrand ? item.brand.includes(filterByBrand) : true;
        const priceRangeMatch = item.price >= priceRange[0] && item.price <= priceRange[1];
        const ratingRangeMatch = item.rating >= ratingRange[0] && item.rating <= ratingRange[1];
        // search 
        const searchMatch = searchTerm === '' ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.brand.toLowerCase().includes(searchTerm.toLowerCase());

        return priceRangeMatch && statusMatch && brandMatch && ratingRangeMatch && searchMatch;
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

                                <div className={`${priceToggle ? styles.show : styles.hide}`}>
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

                                <div className={`${statusToggle ? styles.show : styles.hide}`}>
                                    <hr />
                                    {
                                        productStatus.map((status, index) => (
                                            <div className={styles.radio_area} key={index}>
                                                <input
                                                    type="radio"
                                                    name="status"
                                                    id={`status_${index}`}
                                                    value={status === 'all status' ? '' : status}
                                                    onChange={handelFilterByStatus}
                                                />
                                                <label htmlFor={`status_${index}`}>{status.split('-').join(' ')}</label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* filter by brand */}
                            <div className={styles.filter_area}>
                                <button onClick={handelBrandToggle}>Brand
                                    <div>
                                        <span className={` ${brandToggle ? styles.show : styles.hide}`}><IoIosArrowUp size="20px" /></span>
                                        <span className={` ${brandToggle ? styles.hide : styles.show}`}><IoIosArrowDown size="20px" /></span>
                                    </div>
                                </button>

                                <div className={`${brandToggle ? styles.show : styles.hide}`}>
                                    <hr />
                                    {
                                        productBrand.map((brand, index) => (
                                            <div className={styles.radio_area} key={index}>
                                                <input
                                                    type="radio"
                                                    name="brand"
                                                    id={`brand_${index}`}
                                                    value={brand === 'all brand' ? '' : brand}
                                                    onChange={handelFilterByBrand}
                                                />
                                                <label htmlFor={`brand_${index}`}>{brand.split('-').join(' ')}</label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* filter by rating */}
                            <div className={styles.filter_area}>
                                <button onClick={handelRatingToggle}>Rating
                                    <div>
                                        <span className={` ${ratingToggle ? styles.show : styles.hide}`}><IoIosArrowUp size="20px" /></span>
                                        <span className={` ${ratingToggle ? styles.hide : styles.show}`}><IoIosArrowDown size="20px" /></span>
                                    </div>
                                </button>

                                <div className={`${ratingToggle ? styles.show : styles.hide}`}>
                                    <hr />
                                    <Slider value={ratingRange} onChange={handleRatingRangeChange} valueLabelDisplay="auto" min={0} max={5} />
                                    <div className='d-flex justify-content-between pb-2'>
                                        <small>{ratingRange[0]}</small>
                                        <small>{ratingRange[1]}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handelSearch}
                                placeholder='search for phone'
                                className={`form-control ${styles.search_box}`} />

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