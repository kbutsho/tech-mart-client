import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { config } from "@/config";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Table } from 'react-bootstrap';
import { FadeLoader } from 'react-spinners';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import Cookies from 'js-cookie';
import styles from '@/styles/home/product.module.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Slider } from '@mui/material';

const SellerProductList = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)
    const token = Cookies.get('token')
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                // const response = await axios.get(`${config.api}/products/seller-products`, {
                //     headers: {
                //         Authorization: `${token}`
                //     }
                // })
                const response = await axios.get(`${config.api}/products`)
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


    //pagination
    //const [currentPage, setCurrentPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(8);
    // const indexOfLastProduct = currentPage * productPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    // const currentProduct = filterAndSearchData.slice(indexOfFirstProduct, indexOfLastProduct)
    // const handelPaginate = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // }
    return (
        <div className="row py-4" >
            <div className="col-md-3">
                {/* show per page */}
                <div className={styles.filter_header}>
                    <span >Show</span>
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
            </div>
            <div className="col-md-9">
                <div className="table-heading">
                    <h6 className='fw-bold text-uppercase mt-2'>Product List</h6>
                    <button className='btn btn-primary fw-bold btn-sm'>Add Product</button>
                </div>
                <div className="list-area">
                    {
                        loading ?
                            <div className='d-flex justify-content-center align-items-center border mt-3'
                                style={{ height: "50vh" }}><FadeLoader /></div>
                            :
                            data?.length === 0 ?
                                <div className='d-flex justify-content-center align-items-center border mt-3'
                                    style={{ height: "50vh" }}><h6>no product found!</h6></div>

                                : <div className='p-3 border mt-3 table-area'>
                                    <Table striped hover responsive>
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
                                                data?.slice(0, 8).map((data, index) => {
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
                                                                <button className='btn btn-danger btn-sm mx-1'><AiFillDelete /></button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }

                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                    }
                </div>
            </div>
        </div >
    );
};

export default SellerProductList;