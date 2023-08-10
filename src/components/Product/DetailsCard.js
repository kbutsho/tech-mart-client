import Image from 'next/image';

const ProductDetailsCard = ({ product }) => {
    return (
        <div className='container py-4'>
            <div className="row">
                <div className="col-md-5 px-5">
                    <div className='px-5'>
                        <Image src={product.data.coverPhoto} height={40} width={40} layout='responsive' alt="img" />
                    </div>
                </div>
                <div className="col-md-7">
                    <h5 className='fw-bold'>{product.data.name}</h5>
                    <h6 className='fw-bold'>৳ {product.data.discountPrice}</h6>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;