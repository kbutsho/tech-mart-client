import Image from 'next/image';

const ProductDetailsCard = ({ product }) => {
    return (
        <div className="row">
            <div className="col-md-4 col-12">
                <div className='px-5'>
                    <Image src={product.data.coverPhoto} height={40} width={40} layout='responsive' alt="img" />
                </div>
            </div>
            <div className="col-md-8 col-12">
                <h5 className='fw-bold'>{product.data.name}</h5>
                <h6 className='fw-bold'>৳ {product.data.discountPrice}</h6>
            </div>
        </div>
    );
};

export default ProductDetailsCard;