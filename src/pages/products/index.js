import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const ProductPage = () => {
    return (
        <div className='container'>
            <Breadcrumb />
        </div>
    );
};

export default ProductPage;
ProductPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};