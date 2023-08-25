import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { config } from "@/config";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Table } from 'react-bootstrap';

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
                        loading ? <div>loading...</div>
                            :
                            <div className='p-3 border mt-3 table-area'>
                                <Table striped hover responsive >
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>CODE</th>
                                            <th>NAME</th>
                                            <th>BRAND</th>
                                            <th>CATEGORY</th>
                                            <th>QUANTITY</th>
                                            <th>PRICE</th>
                                            <th>RATING</th>
                                            <th>STATUS</th>
                                            <th className='text-center'>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data?.slice(0, 5).map((data, index) =>
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{data.code}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.brand}</td>
                                                    <td>{data.category}</td>
                                                    <td className='text-center'>{data.quantity}</td>
                                                    <td>{data.price}</td>
                                                    <td>{data.rating}</td>
                                                    <td>{data.status}</td>
                                                    <td className='d-flex justify-content-center'>
                                                        <button className='btn btn-primary btn-sm mx-1'>Details</button>
                                                        <button className='btn btn-success btn-sm mx-1'>Update</button>
                                                        <button className='btn btn-danger btn-sm mx-1'>Delete</button>
                                                    </td>
                                                </tr>
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