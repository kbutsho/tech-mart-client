import Breadcrumb from "@/components/Breadcrumb/Index";
import SellerLayout from "@/layouts/seller/SellerLayout";
import Head from "next/head";

const SellerProfile = () => {
    return (
        <div>
            <Head>
                <title>Profile</title>
            </Head>
            <Breadcrumb />
            <div className="px-md-3 px-2 py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam itaque aspernatur rem labore, odio alias explicabo. Eius magni doloremque sit fugiat repellat, illo quod ducimus? Repellat placeat atque incidunt iusto corrupti enim officia maxime architecto ut, minima, possimus, quia quasi distinctio magni. Fugiat rem nesciunt, dolore architecto expedita obcaecati dolorum amet odio perspiciatis eligendi at esse quasi corporis qui molestias eos iste cumque nisi facere quibusdam doloribus dicta vitae modi. Ratione, ad. Quo quisquam eaque eos praesentium officia explicabo sunt aut accusamus aspernatur cupiditate dignissimos voluptatem deserunt culpa expedita itaque ex repellendus, voluptate commodi nihil suscipit voluptatum, accusantium quod veniam.
            </div>
        </div>
    );
};

export default SellerProfile;
SellerProfile.getLayout = function getLayout(page) {
    return <SellerLayout>{page}</SellerLayout>;
};