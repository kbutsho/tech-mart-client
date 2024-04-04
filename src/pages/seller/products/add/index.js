import Breadcrumb from '@/components/Breadcrumb/Index';
import SellerLayout from '@/layouts/seller/SellerLayout';
import Head from 'next/head';
import React from 'react';
import { config } from '@/config';
import AddSellerProduct from '@/components/Seller/AddSellerProduct';


const SellerAddProduct = ({ data }) => {
    const { categories, brands } = data;
    return (
        <div>
            <Head>
                <title>add products</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-3 px-2 py-2"
                style={{
                    height: "83vh",
                    overflowY: "auto",
                    scrollbarWidth: "none"
                }}>
                <AddSellerProduct categories={categories.data} brands={brands.data} />
            </div>
        </div >
    );
};

export default SellerAddProduct;
SellerAddProduct.getLayout = function getLayout(page) {
    return <SellerLayout>{page}</SellerLayout>;
};

export const getStaticProps = async () => {
    const categoryResponse = await fetch(`${config.api}/categories`);
    const brandResponse = await fetch(`${config.api}/brands`);

    const categories = await categoryResponse.json();
    const brands = await brandResponse.json();

    return {
        props: {
            data: {
                categories, brands
            }
        },
        revalidate: 30
    };
};