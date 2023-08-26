import React from 'react';
import { useState } from 'react';
import styles from '@/styles/product/addProduct.module.css'
import { FadeLoader } from 'react-spinners';
import { PRODUCT_STATUS } from '@/constant/product.constant';


const AddSellerProduct = ({ categories, brands }) => {
    const [loading, setLoading] = useState(false);
    const [brandId, setBrandId] = useState('');
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
        features: []
    })

    const [newFeatureKey, setNewFeatureKey] = useState('');
    const [newFeatureValue, setNewFeatureValue] = useState('');

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
        setBrandId(selectedCategory ? selectedCategory.id : '');
        setData({
            ...data,
            category: selectedCategoryName,
            categoryId: selectedCategory ? selectedCategory.id : '',
        });
    }
    const handelInputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const addNewFeature = () => {
        if (newFeatureKey && newFeatureValue) {
            const newFeature = { key: newFeatureKey, value: newFeatureValue };
            setData({
                ...data,
                features: [...data.features, newFeature]
            });
            setNewFeatureKey('');
            setNewFeatureValue('');
        }
    };
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
                                            <span>{unit.toUpperCase()}</span>
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
                                            <span>{status}</span>
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

                        </div>
                    </div>
                </form>


                <div className="form-group">
                    <label className='fw-bold mb-2'>Features</label>
                    <button className="btn btn-primary" onClick={addNewFeature}>Add Feature</button>
                    {data.features.map((feature, index) => (
                        <div key={index} className="mb-2">
                            <strong>{feature.key}:</strong> {feature.value}
                        </div>
                    ))}
                    <div>
                        <input
                            type="text"
                            placeholder="Feature Key"
                            value={newFeatureKey}
                            onChange={(e) => setNewFeatureKey(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Feature Value"
                            value={newFeatureValue}
                            onChange={(e) => setNewFeatureValue(e.target.value)}
                        />
                    </div>
                </div>












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