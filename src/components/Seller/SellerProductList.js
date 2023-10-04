import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { config } from "@/config";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Table } from 'react-bootstrap';
import { FadeLoader } from 'react-spinners';
import { AiFillDelete, AiFillEdit, AiFillEye, AiFillStar } from 'react-icons/ai';
import Cookies from 'js-cookie';
import styles from '@/styles/home/product.module.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Slider } from '@mui/material';
import { PRICE_SORT_ORDER, PRODUCT_BRAND, PRODUCT_STATUS } from '@/constant/product.constant';
import Link from 'next/link';
import Pagination from '../Pagination/Pagination';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useRouter } from 'next/router';

const SellerProductList = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)
    const token = Cookies.get('token')
    const router = useRouter()
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${config.api}/products/seller-products`, {
                    headers: {
                        Authorization: `${token}`
                    }
                })
                // const response = await axios.get(`${config.api}/products`)
                if (response.data.data) {
                    setData(response.data.data)
                    setLoading(false)
                } else {
                    setLoading(false)
                    toast.error("internal server error")
                }
            } catch (error) {
                setLoading(false)
                toast.error(error.response.data.message)
            }
        }
        fetchData()
    }, [setData, token])


    // filter by price range
    const [priceRange, setPriceRange] = useState([]);
    useEffect(() => {
        const getPriceRange = async () => {
            try {
                const res = await axios.get(`${config.api}/products/price-range`)
                setPriceRange(res.data.data)
                Cookies.set('min', res.data.data[0], { expires: 7 })
                Cookies.set('max', res.data.data[1], { expires: 7 })
            } catch (error) {
                console.log(error)
                toast.error('price range not found!')
            }
        }
        getPriceRange()
    }, [])
    const handlePriceRangeChange = (event, newValue) => {
        setPriceRange(newValue);
    }
    const [priceToggle, setPriceToggle] = useState(true)
    const handelPriceToggle = () => {
        setPriceToggle(!priceToggle)
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

    // filter by status
    const productStatus = [
        PRODUCT_STATUS.IN_STOCK,
        PRODUCT_STATUS.STOCK_OUT,
        PRODUCT_STATUS.UPCOMING,
        PRODUCT_STATUS.DISCONTINUE,
        PRODUCT_STATUS.LIMITED_STOCK,
        PRODUCT_STATUS.SHOW_ALL

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
        PRODUCT_BRAND.AMAZFIT,
        PRODUCT_BRAND.HAYLOU,
        PRODUCT_BRAND.IMILAB,
        PRODUCT_BRAND.LENOVO,
        PRODUCT_BRAND.BASEUS,
        PRODUCT_BRAND.JBL,
        PRODUCT_BRAND.ASUS,
        PRODUCT_BRAND.ACER,
        PRODUCT_BRAND.MSI,
        PRODUCT_BRAND.GIGABYTE,
        PRODUCT_BRAND.HP,
        PRODUCT_BRAND.DELL,
        PRODUCT_BRAND.ANKER,
        PRODUCT_BRAND.SONY,
        PRODUCT_BRAND.CANON,
        PRODUCT_BRAND.GO_PRO,
        PRODUCT_BRAND.NIKON,
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
    const filterAndSearchData = data?.filter((item) => {
        // filter
        const statusMatch = filterByStatus ? item.status.includes(filterByStatus) : true;
        const brandMatch = filterByBrand ? item.brand.includes(filterByBrand) : true;
        const priceRangeMatch = item.price >= priceRange[0] && item.price <= priceRange[1];
        const ratingRangeMatch = item.rating >= ratingRange[0] && item.rating <= ratingRange[1];
        // search 
        const searchMatch = searchTerm === '' ||
            item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
    const currentProduct = filterAndSearchData?.slice(indexOfFirstProduct, indexOfLastProduct)
    const handelPaginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // delete
    const [modal, setModal] = useState(false)
    const toggleModal = (id) => {
        setModal(!modal)
        Cookies.set('delete_item', id);
    }
    const closeModal = () => {
        setModal(!modal)
        Cookies.remove('delete_item')
    }
    const handleDelete = async () => {
        const productId = Cookies.get('delete_item')
        const token = Cookies.get('token')
        try {
            setLoading(true)
            const response = await axios.delete(`${config.api}/products/${productId}`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            if (response.data.data) {
                setLoading(false)
                toast.success("product delete successfully!")
                window.location.href = '/seller/products'
            }
            else {
                setLoading(false)
                toast.error("internal server error")
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
            // toast.error(error.response.data.message)
        }
        Cookies.remove('delete_item')
    }
    return (
        <div className="row py-4" style={{ minHeight: "80vh" }}>
            <div className="col-md-3">
                <Link href="/seller/products/add" className={`${styles.filter_header} bg-secondary py-2`}
                    style={{ marginBottom: "10px", textDecoration: "none", color: "black" }}>
                    <span className='bg-secondary text-white text-uppercase'> Add Product</span>
                </Link>
                {/* show per page */}
                <div className={styles.filter_header}>
                    <span className='text-uppercase'>Show</span>
                    <select
                        value={productPerPage}
                        className={`${styles.custom_select} form-select`}
                        onChange={(e) =>
                            setProductPerPage(parseInt(e.target.value))
                        }>
                        <option value="8" defaultValue={productPerPage === 8}>08</option>
                        <option value="12" defaultValue={productPerPage === 12}>12</option>
                        <option value="24" defaultValue={productPerPage === 24}>24</option>
                        <option value="36" defaultValue={productPerPage === 36}>36</option>
                        <option value="48" defaultValue={productPerPage === 48}>48</option>
                        <option value="96" defaultValue={productPerPage === 96}>96</option>
                    </select>
                </div>

                {/* filter by price range */}
                <div className={styles.filter_area}>
                    <button className='text-uppercase' onClick={handelPriceToggle}>Price Range
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
                        {
                            priceRange.length > 0 && (
                                <>
                                    <Slider
                                        value={priceRange}
                                        onChange={handlePriceRangeChange}
                                        valueLabelDisplay="auto"
                                        min={parseInt(Cookies.get('min')) ?? 100}
                                        max={parseInt(Cookies.get('max')) ?? 200000}
                                    />
                                    <div className='d-flex justify-content-between pb-2'>
                                        <small>{priceRange[0]}</small>
                                        <small>{priceRange[1]}</small>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>

                {/* price sort order */}
                <div className={styles.filter_area}>
                    <button className='text-uppercase' onClick={handelSortOrderToggle}>Sort Order
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
                    <button className='text-uppercase' onClick={handelStatusToggle}>Status
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
                    <button className='text-uppercase' onClick={handelBrandToggle}>Brand
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
                    <button className='text-uppercase' onClick={handelRatingToggle}>Rating
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

            </div>
            <div className="col-md-9">
                <div className={`${styles.search_area}`}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handelSearch}
                        placeholder={`search for product`}
                        className={`form-control ${styles.search_box}`} />
                </div>
                <div className="list-area">
                    {
                        loading ?
                            <div className='d-flex justify-content-center align-items-center border'
                                style={{ height: "50vh" }}><FadeLoader /></div>
                            :
                            currentProduct?.length === 0 ?
                                <div className='d-flex justify-content-center align-items-center border mt-3'
                                    style={{ height: "50vh" }}><h6>no product found!</h6></div>

                                : <div className='p-3 border mt-3 table-area'>
                                    <Table striped hover responsive >
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>CODE</th>
                                                <th className='name-column'>NAME</th>
                                                <th>BRAND</th>
                                                <th>CATEGORY</th>
                                                <th className='text-center'>STOCK</th>
                                                <th className='text-center'>PRICE</th>
                                                <th className='text-center'>RATING</th>
                                                <th className='text-center'>SELL</th>
                                                <th className='text-center'>STATUS</th>
                                                <th className='text-center'>ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                currentProduct?.map((data, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className='fw-bold'>{(index + 1).toString().padStart(2, '0')}</td>
                                                            <td>{data.code}</td>
                                                            <td className='name-column'>{data.name}</td>
                                                            <td>{data.brand}</td>
                                                            <td>{data.category}</td>
                                                            <td className='text-center'>{data.quantity}</td>
                                                            <td className='text-center'>{data.price}</td>
                                                            <td className='text-center'>{data.rating ?? 0}</td>
                                                            <td className='text-center'>{data.sellCount ?? 0}</td>
                                                            <td className='text-center'>{data.status.split('-').join(' ')}</td>
                                                            <td className='d-flex justify-content-center'>
                                                                <button className='btn btn-primary btn-sm mx-1'><AiFillEye /></button>
                                                                <button className='btn btn-success btn-sm mx-1'><AiFillEdit /></button>
                                                                <button onClick={() => toggleModal(data._id)} className='btn btn-danger btn-sm mx-1'><AiFillDelete /></button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }

                                                )
                                            }
                                        </tbody>
                                    </Table>
                                    {/* pagination */}
                                    <div className={`${styles.pagination}`} style={{ marginTop: "0px" }}>
                                        {
                                            currentProduct?.length > 0 ?
                                                <Pagination data={filterAndSearchData}
                                                    productPerPage={productPerPage}
                                                    currentPage={currentPage}
                                                    handelPaginate={handelPaginate} />
                                                : null
                                        }
                                    </div>
                                </div>
                    }
                </div>
            </div>
            {modal ? (
                <div>
                    <Modal isOpen={modal} className="modal-md" onClick={toggleModal} >
                        <ModalBody>
                            <h5 className='py-5 text-center'>are you sure want to delete this product?</h5>
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={handleDelete} className="btn btn-danger btn-sm fw-bold">delete</button>
                            <button onClick={closeModal} className='btn btn-sm btn-primary fw-bold'>not Now</button>
                        </ModalFooter>
                    </Modal>
                </div>
            ) : null}
        </div>
    );
};

export default SellerProductList;