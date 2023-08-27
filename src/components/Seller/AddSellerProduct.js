import React from 'react';
import { useState } from 'react';
import styles from '@/styles/product/addProduct.module.css'
import { FadeLoader } from 'react-spinners';
import { PRODUCT_STATUS } from '@/constant/product.constant';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const AddSellerProduct = ({ categories, brands }) => {
    const [loading, setLoading] = useState(false);
    const [brandId, setBrandId] = useState('');
    const [featureCount, setFeatureCount] = useState(0);
    const [categoryId, setCategoryId] = useState('');
    const priceUnit = ["taka", "usd", "euro", "rupee"];
    const productStatus = [
        PRODUCT_STATUS.IN_STOCK,
        PRODUCT_STATUS.LIMITED_STOCK,
        PRODUCT_STATUS.UPCOMING
    ]
    const [data, setData] = useState({
        name: "",
        code: "",
        brand: "",
        brandId: '',
        category: "",
        categoryId: "",
        priceUnit: "",
        price: 0,
        quantity: 0,
        status: "",
        color: "",
        variant: "",
        size: "",
        coverPhoto: "",
        featuredPhoto: [],
        features: {}
    })

    const handleBrandChange = (event) => {
        const selectedBrandName = event.target.value;
        const selectedBrand = brands.find(brand => brand.name === selectedBrandName);
        setBrandId(selectedBrand ? selectedBrand.id : '');
        setData({
            ...data,
            brand: selectedBrandName,
            brandId: selectedBrand ? selectedBrand.id : '',
        });
    }
    const handleCategoryChange = (event) => {
        const selectedCategoryName = event.target.value;
        const selectedCategory = categories.find(category => category.name === selectedCategoryName);
        setCategoryId(selectedCategory ? selectedCategory.id : '');
        setData({
            ...data,
            category: selectedCategoryName,
            categoryId: selectedCategory ? selectedCategory.id : '',
        });
    }
    const handelInputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handelAddFeature = () => {
        setFeatureCount(featureCount + 1);
    }

    const handleFeatureChange = (key, value) => {
        setData({
            ...data,
            features: {
                ...data.features,
                [key]: value,
            },
        });
    };


    const values = Object.values(data.features);
    const pairedObject = {};
    for (let i = 0; i < values.length; i += 2) {
        const key = values[i];
        const value = values[i + 1];
        pairedObject[key] = value;
    }


    return (
        <div className={`${styles.main_area} my-4`}>
            <div className={styles.form_area}>
                <form>
                    <div className="row">

                        <div className="col-md-4">

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product code</label>
                                <input type="text"
                                    placeholder='enter product code'
                                    className='form-control'
                                    name="code"
                                    value={data.code}
                                    onChange={handelInputChange} />
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product name</label>
                                <input type="text"
                                    placeholder='enter product name'
                                    className='form-control'
                                    name="name"
                                    value={data.name}
                                    onChange={handelInputChange} />
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product title</label>
                                <input type="text"
                                    name="title"
                                    value={data.title}
                                    placeholder='enter product title'
                                    className='form-control'
                                    onChange={handelInputChange} />
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product description</label>
                                <textarea style={{ height: "122px" }}
                                    name="description"
                                    placeholder='write product description'
                                    className='form-control'
                                    onChange={handelInputChange} />
                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product brand</label>
                                <select name="brand"
                                    className='form-select'
                                    onChange={handleBrandChange}
                                    value={data.brand}>
                                    <option value="">select brand</option>
                                    {brands.map((brand) => (
                                        <option key={brand.id} value={brand.name}>
                                            {brand.name}
                                        </option>
                                    ))}
                                </select>
                                <input type="hidden"
                                    name="brandId"
                                    value={brandId}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product category</label>
                                <select name="category"
                                    className='form-select'
                                    onChange={handleCategoryChange}
                                    value={data.category}>
                                    <option value="">select category</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.name}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <input type="hidden"
                                    name="categoryId"
                                    value={categoryId}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>price unit</label>
                                <select name="priceUnit"
                                    className='form-select'
                                    onChange={handelInputChange}
                                    value={data.priceUnit}>
                                    <option value="">select price unit</option>
                                    {priceUnit.map((unit, index) => (
                                        <option key={index} value={unit}>
                                            {unit.toUpperCase()}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product price</label>
                                <input type="number"
                                    name="price"
                                    value={data.price}
                                    placeholder='enter product price'
                                    className='form-control'
                                    onChange={handelInputChange} />
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product quantity</label>
                                <input type="number"
                                    name="quantity"
                                    value={data.quantity}
                                    placeholder='enter product quantity'
                                    className='form-control'
                                    onChange={handelInputChange} />
                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product status</label>
                                <select name="status"
                                    className='form-select'
                                    onChange={handelInputChange}
                                    value={data.status}>
                                    <option value="">select product status</option>
                                    {productStatus.map((status, index) => (
                                        <option key={index} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product warranty</label>
                                <input type="text"
                                    name="warranty"
                                    value={data.warranty}
                                    placeholder='enter product warranty'
                                    className='form-control'
                                    onChange={handelInputChange} />
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product color</label>
                                <input type="text"
                                    name="color"
                                    value={data.color}
                                    placeholder='enter product color'
                                    className='form-control'
                                    onChange={handelInputChange} />
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product variant</label>
                                <input type="text"
                                    name="variant"
                                    value={data.variant}
                                    placeholder='enter product variant'
                                    className='form-control'
                                    onChange={handelInputChange} />
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product size</label>
                                <input type="text"
                                    name="size"
                                    value={data.size}
                                    placeholder='enter product size'
                                    className='form-control'
                                    onChange={handelInputChange} />
                            </div>

                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product cover photo</label>
                                <input type="file"
                                    className='form-control'
                                    name="coverPhoto"
                                    value={data.coverPhoto}
                                    onChange={handelInputChange} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product featured photo</label>
                                <input type="file"
                                    className='form-control'
                                    name="featuredPhotos"
                                    value={data.coverPhoto}
                                    onChange={handelInputChange} />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className='d-flex justify-content-between'>
                                <label className='fw-bold mb-2'>product features</label>
                                <button type='button'
                                    className='mb-2 btn btn-sm btn-primary'
                                    onClick={handelAddFeature}>Add Features
                                </button>
                            </div>
                            {
                                Array.from({ length: featureCount }, (_, index) => (
                                    <div key={index}>
                                        <div className='d-flex justify-content-between'
                                            style={{ marginBottom: "6px", fontSize: "14px" }}>
                                            <div className='fw-bold'>
                                                feature {index + 1}
                                            </div>
                                            <div>
                                                <button className='btn btn-primary btn-sm me-1' type='button'><AiOutlinePlus /></button>
                                                <button className='btn btn-danger btn-sm' type='button'><AiOutlineMinus /></button>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2'>
                                            <input
                                                type="text"
                                                placeholder="name"
                                                className='form-control w-25 me-2'
                                                value={data.features[`key${index}`] || ''}
                                                onChange={(e) => handleFeatureChange(`key${index}`, e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                placeholder="value"
                                                className='form-control w-75'
                                                value={data.features[`value${index}`] || ''}
                                                onChange={(e) => handleFeatureChange(`value${index}`, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                            <pre>{JSON.stringify(pairedObject, null, 2)}</pre>
                        </div>
                    </div>

                    <button className='btn btn-primary w-100 fw-bold mt-3' type='submit'>submit</button>
                </form>















            </div>
            {
                loading ? <div className={styles.loading}>
                    <FadeLoader className='mt-5 ms-3' />
                </div> : null
            }

        </div>
    );
};

export default AddSellerProduct;