import Breadcrumb from '@/components/Breadcrumb/Index';
import AdminLayout from '@/layouts/admin/AdminLayout';
import Head from 'next/head';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { ImCross } from "react-icons/im";
import { AiFillStar } from 'react-icons/ai';

const AdminBrands = () => {











    const [addModal, setAddModal] = useState(false)
    const toggleAddModal = () => {
        setAddModal(!addModal)
    }
    return (
        <div>
            <Head>
                <title>Brands</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-3 px-2 py-2" style={{ height: "83vh", overflowY: "auto", scrollbarWidth: "none" }}>
                <div className="row py-4" style={{ minHeight: "80vh" }}>
                    <div className="col-md-10">
                        <div className='d-flex'>
                            <input
                                type="text"
                                placeholder='search brand'
                                className='form-control'
                                style={{ borderRadius: "2px" }} />
                            <CiSearch size="24"
                                style={{
                                    marginLeft: "-40px",
                                    marginTop: "6px",
                                    cursor: "pointer"
                                }} />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button
                            onClick={toggleAddModal}
                            className='btn btn-outline-secondary w-100 fw-bold text-uppercase'
                            style={{ borderRadius: "2px" }}>
                            add brand
                        </button>
                    </div>
                </div>
            </div>
            {
                addModal ? (
                    <div>
                        <Modal isOpen={addModal} className="modal-lg">
                            <ModalBody>
                                <div className='p-3'>
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='text-uppercase fw-bold mb-4'>Add Brand</h4>
                                        <ImCross size="24px"
                                            className='pt-2'
                                            style={{ cursor: "pointer", color: "red" }}
                                            onClick={toggleAddModal} />
                                    </div>
                                    <form>
                                        <div className='mb-4'>
                                            <label className='mb-3'>
                                                <span className='fw-bold'>DEPARTMENT NAME</span>
                                                <AiFillStar className='required' />
                                            </label>
                                            {/* <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handelInputChange}
                                                placeholder='write department name'
                                                className={`form-control ${formData.errors?.name ? 'is-invalid' : null}`} />
                                            <small className='validation-error'>
                                                {
                                                    formData.errors?.name ? formData.errors?.name : null
                                                }
                                            </small> */}
                                        </div>
                                        <div className='mb-4'>
                                            <label className='mb-3'>
                                                <span className='fw-bold'>PHOTO</span>
                                                <AiFillStar className='required' />
                                            </label>
                                            {/* <input
                                                type="file"
                                                name="photo"
                                                onChange={handelAddPhotoChange}
                                                className={`form-control ${formData.errors?.photo ? 'is-invalid' : null}`} />
                                            <small className='validation-error'>
                                                {
                                                    formData.errors?.photo ? formData.errors?.photo : null
                                                }
                                            </small> */}
                                        </div>
                                        <div className='mb-4'>
                                            <label className='mb-3'>
                                                <span className='fw-bold'>DESCRIPTION</span>
                                                <AiFillStar className='required' />
                                            </label>
                                            {/* <textarea
                                                rows="4"
                                                type="text"
                                                name="description"
                                                value={formData.description}
                                                onChange={handelInputChange}
                                                placeholder='write department description'
                                                className={`form-control ${formData.errors?.description ? 'is-invalid' : null}`} />
                                            <small className='validation-error'>
                                                {
                                                    formData.errors?.description ? formData.errors?.description : null
                                                }
                                            </small> */}
                                        </div>
                                        {/* {
                                            addLoading ?
                                                <button disabled className='mt-3 fw-bold w-100 btn btn-primary'>submitting...</button> :
                                                <input type="submit" value="submit" className='mt-3 fw-bold w-100 btn btn-primary' />
                                        } */}
                                    </form>
                                </div>
                            </ModalBody>
                        </Modal>
                    </div>
                ) : null
            }
        </div>
    );
};

export default AdminBrands;
AdminBrands.getLayout = function getLayout(page) {
    return <AdminLayout>{page}</AdminLayout>;
};