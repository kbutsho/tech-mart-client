import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import banner from '@/assets/category/powerBank-banner.png'
import Image from 'next/image';
import ProductCard from '@/components/Category/ProductCard';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import styles from '@/styles/home/product.module.css'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { PRICE_SORT_ORDER, PRODUCT_BRAND, PRODUCT_STATUS } from '@/constant/product.constant';
import Pagination from '@/components/Pagination/Pagination';
import { AiFillStar } from 'react-icons/ai';

const PowerBankCategory = ({ data }) => {
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
        PRODUCT_BRAND.SHOW_ALL

    ]
    const [filterByStatus, setFilterByStatus] = useState('');
    const handelFilterByStatus = (event) => {
        setFilterByStatus(event.target.value);
    }
    const [statusToggle, setStatusToggle] = useState(true)
    const handelStatusToggle = () => {
        setStatusToggle(!statusToggle)
    }

    // price sort order
    const sortOrderList = [
        PRICE_SORT_ORDER.MIN_TO_MAX,
        PRICE_SORT_ORDER.MAX_TO_MIN,
        PRICE_SORT_ORDER.DEFAULT
    ];
    const [sortOrder, setSortOrder] = useState('')
    const handelSortOrder = (event) => {
        setSortOrder(event.target.value);
    }
    const [sortOrderToggle, setSortOrderToggle] = useState(true)
    const handelSortOrderToggle = () => {
        setSortOrderToggle(!sortOrderToggle)
    }

    // filter by brand
    const productBrand = [
        PRODUCT_BRAND.SAMSUNG,
        PRODUCT_BRAND.APPLE,
        PRODUCT_BRAND.XIAOMI,
        PRODUCT_BRAND.ANKER,
        PRODUCT_BRAND.SHOW_ALL
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

    // combine filter search and sort
    const filterAndSearchData = product?.data?.filter((item) => {
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
    })    // sort
        .sort((itemA, itemB) => {
            if (sortOrder === PRICE_SORT_ORDER.MIN_TO_MAX) {
                return itemA.discountPrice - itemB.discountPrice;
            } else if (sortOrder === PRICE_SORT_ORDER.MAX_TO_MIN) {
                return itemB.discountPrice - itemA.discountPrice;
            }
            return 0;
        });

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(8);
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProduct = filterAndSearchData.slice(indexOfFirstProduct, indexOfLastProduct)
    const handelPaginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div className='container'>
            <Breadcrumb />
            <div className='py-4'>
                <Image src={banner} layout='responsive' height={360} width={1920} alt="img" />
                <div className="phone-area py-4">
                    <div className="row">
                        <div className="col-md-4 col-xxl-3">

                            {/* show per page */}
                            <div className={styles.filter_header}>
                                <span >Show</span>
                                <select
                                    value={productPerPage}
                                    className={`${styles.custom_select} form-select`}
                                    onChange={(e) =>
                                        setProductPerPage(parseInt(e.target.value))
                                    }>
                                    <option value="8" selected={productPerPage === 8}>08</option>
                                    <option value="12" selected={productPerPage === 12}>12</option>
                                    <option value="24" selected={productPerPage === 24}>24</option>
                                    <option value="36" selected={productPerPage === 36}>36</option>
                                    <option value="48" selected={productPerPage === 48}>48</option>
                                    <option value="96" selected={productPerPage === 96}>96</option>
                                </select>
                            </div>

                            {/* filter by price range */}
                            <div className={styles.filter_area}>
                                <button onClick={handelPriceToggle}>Price Range
                                    <div>
                                        <span className={` ${priceToggle ? styles.show : styles.hide}`}>
                                            <IoIosArrowUp size="20px" />
                                        </span>
                                        <span className={` ${priceToggle ? styles.hide : styles.show}`}>
                                            <IoIosArrowDown size="20px" />
                                        </span>
                                    </div>
                                </button>
                                <div className={`${priceToggle ? styles.show : styles.hide}`}>
                                    <hr />
                                    <Slider value={priceRange}
                                        onChange={handlePriceRangeChange}
                                        valueLabelDisplay="auto"
                                        min={data.priceRangeResponse.data[0]}
                                        max={data.priceRangeResponse.data[1]} />
                                    <div className='d-flex justify-content-between pb-2'>
                                        <small>{priceRange[0]}</small>
                                        <small>{priceRange[1]}</small>
                                    </div>
                                </div>
                            </div>

                            {/* price sort order */}
                            <div className={styles.filter_area}>
                                <button onClick={handelSortOrderToggle}>Sort Order
                                    <div>
                                        <span className={`${sortOrderToggle ? styles.show : styles.hide}`}>
                                            <IoIosArrowUp size="20px" />
                                        </span>
                                        <span className={`${sortOrderToggle ? styles.hide : styles.show}`}>
                                            <IoIosArrowDown size="20px" />
                                        </span>
                                    </div>
                                </button>
                                <div className={`${sortOrderToggle ? styles.show : styles.hide}`}>
                                    <hr />
                                    {
                                        sortOrderList.map((sort, index) => (
                                            <div key={index}>
                                                <label htmlFor={`sort_${index}`} className={styles.radio_area}>
                                                    <input
                                                        className={`${styles.radio_input}`}
                                                        type="radio"
                                                        name="sort_order"
                                                        id={`sort_${index}`}
                                                        value={sort === PRICE_SORT_ORDER.DEFAULT ? '' : sort}
                                                        onChange={handelSortOrder}
                                                    />
                                                    {sort}
                                                </label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* filter by status */}
                            <div className={styles.filter_area}>
                                <button onClick={handelStatusToggle}>Status
                                    <div>
                                        <span className={` ${statusToggle ? styles.show : styles.hide}`}>
                                            <IoIosArrowUp size="20px" />
                                        </span>
                                        <span className={` ${statusToggle ? styles.hide : styles.show}`}>
                                            <IoIosArrowDown size="20px" />
                                        </span>
                                    </div>
                                </button>
                                <div className={`${statusToggle ? styles.show : styles.hide}`}>
                                    <hr />
                                    {
                                        productStatus.map((status, index) => (
                                            <div key={index}>
                                                <label htmlFor={`status_${index}`} className={styles.radio_area}>
                                                    <input
                                                        className={`${styles.radio_input}`}
                                                        type="radio"
                                                        name="status"
                                                        id={`status_${index}`}
                                                        value={status === PRODUCT_STATUS.SHOW_ALL ? '' : status}
                                                        onChange={handelFilterByStatus}
                                                    />
                                                    {status.split('-').join(' ')}
                                                </label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* filter by brand */}
                            <div className={styles.filter_area}>
                                <button onClick={handelBrandToggle}>Brand
                                    <div>
                                        <span className={` ${brandToggle ? styles.show : styles.hide}`}>
                                            <IoIosArrowUp size="20px" />
                                        </span>
                                        <span className={` ${brandToggle ? styles.hide : styles.show}`}>
                                            <IoIosArrowDown size="20px" />
                                        </span>
                                    </div>
                                </button>
                                <div className={`${brandToggle ? styles.show : styles.hide}`}>
                                    <hr />
                                    {
                                        productBrand.map((brand, index) => (
                                            <div key={index}>
                                                <label htmlFor={`brand_${index}`} className={styles.radio_area}>
                                                    <input
                                                        className={`${styles.radio_input}`}
                                                        type="radio"
                                                        name="brand"
                                                        id={`brand_${index}`}
                                                        value={brand === PRODUCT_BRAND.SHOW_ALL ? '' : brand}
                                                        onChange={handelFilterByBrand}
                                                    />
                                                    {brand.split('-').join(' ')}
                                                </label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            {/* filter by rating */}
                            <div className={styles.filter_area}>
                                <button onClick={handelRatingToggle}>Rating
                                    <div>
                                        <span className={` ${ratingToggle ? styles.show : styles.hide}`}>
                                            <IoIosArrowUp size="20px" />
                                        </span>
                                        <span className={` ${ratingToggle ? styles.hide : styles.show}`}>
                                            <IoIosArrowDown size="20px" />
                                        </span>
                                    </div>
                                </button>

                                <div className={`${ratingToggle ? styles.show : styles.hide}`}>
                                    <hr />
                                    <Slider value={ratingRange}
                                        onChange={handleRatingRangeChange}
                                        valueLabelDisplay="auto"
                                        min={0} max={5} />
                                    <div className='d-flex justify-content-between pb-2'>
                                        <small
                                            className='d-flex justify-content-between align-items-center'>
                                            {ratingRange[0]} <AiFillStar className='ms-1' color='#F29120' />
                                        </small>
                                        <small className='d-flex justify-content-between align-items-center'>
                                            {ratingRange[1]} <AiFillStar className='ms-1' color='#F29120' />
                                        </small>
                                    </div>
                                </div>
                            </div>

                            {/* product area */}
                        </div>
                        <div className="col-md-8 col-xxl-9">
                            {/* search area */}
                            <div className={styles.search_area}>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={handelSearch}
                                    placeholder='search for power bank'
                                    className={`form-control ${styles.search_box}`} />
                            </div>
                            {/* product list area */}
                            <div className="row">
                                {currentProduct?.length > 0 ? (
                                    currentProduct?.map((product) => (
                                        <ProductCard key={product._id} product={product} />
                                    ))
                                ) : (
                                    <div className='d-flex justify-content-center align-items-center'
                                        style={{ minHeight: "45vh" }}>
                                        <h5>no power bank found!</h5>
                                    </div>
                                )}
                            </div>
                            {/* pagination */}
                            <div className={styles.pagination}>
                                {
                                    currentProduct.length > 0 ?
                                        <Pagination data={filterAndSearchData}
                                            productPerPage={productPerPage}
                                            currentPage={currentPage}
                                            handelPaginate={handelPaginate} />
                                        : null
                                }
                            </div>
                        </div>

                        {/* description */}
                        <div className="details-description">
                            <h4 className='fw-bold my-3'>Why choose us?</h4>
                            <hr />
                            <p>
                                Stay connected and powered up on the go with our exceptional collection of cutting-edge power banks. Whether you're a frequent traveler, an outdoor adventurer, or someone who values staying charged in any situation, our Power Bank Category Page is your gateway to uninterrupted power supply.
                            </p>
                            <p>
                                <span className='fw-bold'>Explore and Select: </span>
                                Discover a diverse range of power banks designed to meet a variety of charging needs. Our curated selection ensures that you'll find the perfect portable charger that aligns with your lifestyle. From compact models that slip into your pocket to high-capacity power banks for extended journeys, our Power Bank Category Page is your ultimate destination for exploration and choice.
                            </p>
                            <p>
                                <span className='fw-bold'>Reliable Charging: </span>
                                Elevate your charging experience with power banks equipped with advanced technology. Explore devices featuring fast charging, multiple output ports, and smart power management. Our Power Bank Category Page showcases charging solutions that ensure your devices stay powered up and ready whenever you need them.
                            </p>
                            <p>
                                <span className='fw-bold'>Portable and Practical: </span>
                                Aesthetics meet functionality with the sleek and ergonomic designs of the power banks in our collection. Whether you prefer slim profiles or rugged designs for outdoor use, our Power Bank Category Page offers a variety of options to match your needs. Crafted for convenience, our power banks are your reliable backup power source.
                            </p>
                            <p>
                                <span className='fw-bold'>Comprehensive Capacity: </span>
                                Make informed decisions with comprehensive specifications provided for each power bank. From battery capacity and number of ports to compatibility and charging speed, our detailed information empowers you to select a power bank that aligns seamlessly with your devices. Our Power Bank Category Page ensures you're not only captivated by the design but also equipped with essential details for confident charging.
                            </p>
                            <p>
                                <span className='fw-bold'>Real User Experiences: </span>
                                Benefit from authentic user insights through genuine customer reviews and ratings. Learn from firsthand experiences shared by individuals who have embraced these power banks into their mobile lifestyles. This valuable feedback empowers you to make an informed choice that resonates with your charging needs.
                            </p>
                            <p>
                                <span className='fw-bold'>Effortless Shopping Experience: </span>
                                Navigate our Power Bank Category Page seamlessly. With intuitive filters, you can narrow your search based on capacity, size, and more. Once you've found your perfect power bank, our streamlined checkout process ensures a hassle-free shopping journey, allowing you to quickly acquire your portable power solution.
                            </p>
                            <p>
                                Embark on a journey of reliable power by exploring our Power Bank Category Page. From staying charged during travel to emergency power backup, we're dedicated to providing you with a comprehensive range of power banks that redefine mobile convenience. Your ideal power bank is just a click away. Start browsing now!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PowerBankCategory;
PowerBankCategory.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
export const getStaticProps = async () => {
    const productCategoryResponse = await fetch(`https://tech-mart-server.vercel.app/api/products?category=power-bank`);
    const priceRange = await fetch(`https://tech-mart-server.vercel.app/api/products/price-range`);
    const productResponse = await productCategoryResponse.json();
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