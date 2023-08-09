import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const ProductPage = () => {
    return (
        <div className='container'>
            <Breadcrumb />
            <div className='d-flex justify-content-center align-items-center' style={{ height: "70vh" }}>
                <h6>welcome to product page</h6>
            </div>
        </div>
    );
};

export default ProductPage;
ProductPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};