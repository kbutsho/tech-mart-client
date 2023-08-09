import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import banner from '@/assets/category/camera-banner.jpeg'
import Image from 'next/image';
import ProductCard from '@/components/Category/ProductCard';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import styles from '@/styles/home/product.module.css'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { PRICE_SORT_ORDER, PRODUCT_BRAND, PRODUCT_STATUS } from '@/constant/product.constant';
import Pagination from '@/components/Pagination/Pagination';
import { AiFillStar } from 'react-icons/ai';

const CameraCategory = ({ data }) => {
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
        PRODUCT_BRAND.SONY,
        PRODUCT_BRAND.CANON,
        PRODUCT_BRAND.NIKON,
        PRODUCT_BRAND.GO_PRO,
        PRODUCT_BRAND.LEICA,
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
                                    placeholder='search for camera'
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
                                        <h5>no camera found!</h5>
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
                                Capture the world around you in stunning detail with our exceptional collection of cutting-edge cameras. Whether you're a photography enthusiast, a content creator, or someone who values preserving memories in high quality, our Camera Category Page is your gateway to a world of visual storytelling.
                            </p>
                            <p>
                                <span className='fw-bold'>Explore and Select: </span>
                                Discover a diverse range of cameras meticulously designed to cater to a variety of skill levels and creative aspirations. Our carefully curated selection ensures that you'll find the perfect visual companion that aligns with your unique perspective. From compact point-and-shoot cameras to advanced mirrorless systems, our Camera Category Page is your ultimate destination for exploration and choice.
                            </p>
                            <p>
                                <span className='fw-bold'>Innovative Imaging Technology: </span>
                                Elevate your photography with cameras equipped with cutting-edge imaging technology. Explore devices featuring high-resolution sensors, advanced autofocus systems, and impressive low-light capabilities. Our Camera Category Page showcases visual marvels that deliver the future of image quality and creativity, allowing you to capture moments in breathtaking detail.
                            </p>
                            <p>
                                <span className='fw-bold'>Versatile Designs: </span>
                                Functionality meets style with the aesthetically pleasing and ergonomic designs of the cameras in our collection. Whether you prefer sleek minimalism or robust professional aesthetics, our Camera Category Page offers a variety of options to match your photographic vision. Crafted with attention to detail, usability, and durability, our cameras empower you to capture with ease and precision.
                            </p>
                            <p>
                                <span className='fw-bold'>Comprehensive Features: </span>
                                Make informed decisions with comprehensive specifications provided for each camera. From sensor size and megapixels to video recording capabilities and connectivity options, our detailed information empowers you to select a camera that aligns seamlessly with your photographic goals. Our Camera Category Page ensures you're not only captivated by the design but also equipped with essential details for confident shooting.
                            </p>
                            <p>
                                <span className='fw-bold'>Real User Experiences: </span>
                                Benefit from authentic user insights through genuine customer reviews and ratings. Gain firsthand knowledge from individuals who have embraced these cameras into their creative journeys. This invaluable feedback empowers you to make an informed choice that resonates with your artistic aspirations and photography style.
                            </p>
                            <p>
                                <span className='fw-bold'>Effortless Shopping Experience: </span>
                                Navigate our Camera Category Page seamlessly. With intuitive filters, you can refine your search based on camera type, features, and more. Once you've discovered your perfect camera, our streamlined checkout process ensures a hassle-free shopping journey, allowing you to swiftly acquire your new visual storyteller.
                            </p>
                            <p>
                                Embark on a photographic journey of discovery by exploring our Camera Category Page. From capturing candid moments to creating masterpieces, we're dedicated to providing you with a comprehensive range of cameras that redefine visual expression. Your ideal camera is just a click away. Start browsing now!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CameraCategory;
CameraCategory.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};
export const getStaticProps = async () => {
    const productCategoryResponse = await fetch(`https://tech-mart-server.vercel.app/api/products?category=camera`);
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