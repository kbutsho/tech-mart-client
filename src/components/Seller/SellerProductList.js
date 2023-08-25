import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { config } from "@/config";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Table } from 'react-bootstrap';
import { FadeLoader } from 'react-spinners';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';

const SellerProductList = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
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
                console.log(error)
                toast.error("internal server error")
            }
        }
        fetchData()
    }, [setData])
    return (
        <div className="row py-4" >
            <div className="col-md-3">
                <h5 className='fw-bold text-uppercase'>Filter</h5>
            </div>
            <div className="col-md-9">
                <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='fw-bold text-uppercase'>Product List</h5>
                    <button className='btn btn-primary fw-bold btn-sm'>Add Product</button>
                </div>
                <div className="list-area">
                    {
                        loading ? <div className='d-flex justify-content-center align-items-center border mt-3' style={{ height: "50vh" }}><FadeLoader /></div>
                            :
                            <div className='p-3 border mt-3 table-area'>
                                <Table striped hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>CODE</th>
                                            <th>NAME</th>
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
                                            data?.slice(0, 50).map((data, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className='fw-bold'>{(index + 1).toString().padStart(2, '0')}</td>
                                                        <td>{data.code}</td>
                                                        <td>{data.name}</td>
                                                        <td>{data.brand}</td>
                                                        <td>{data.category}</td>
                                                        <td className='text-center'>{data.quantity}</td>
                                                        <td className='text-center'>{data.price}</td>
                                                        <td className='text-center'>{data.rating}</td>
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
        </div>
    );
};

export default SellerProductList;