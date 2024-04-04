import Breadcrumb from "@/components/Breadcrumb/Index";
import SellerProductList from "@/components/Seller/SellerProductList";
import SellerLayout from "@/layouts/seller/SellerLayout";
import Head from "next/head";

const SellerProducts = () => {
    return (
        <div>
            <Head>
                <title>Products</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-3 px-2 py-2" style={{
                height: "83vh",
                overflowY: "auto",
                scrollbarWidth: "none"
            }}>
                <SellerProductList />
            </div>
        </div>
    );
};

export default SellerProducts;
SellerProducts.getLayout = function getLayout(page) {
    return <SellerLayout>{page}</SellerLayout>;
};