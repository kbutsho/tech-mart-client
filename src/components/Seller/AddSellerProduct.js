import React, { useEffect, CSSProperties } from 'react';
import { useState } from 'react';
import styles from '@/styles/product/addProduct.module.css'
import { FadeLoader, PropagateLoader } from 'react-spinners';
import { PRODUCT_STATUS } from '@/constant/product.constant';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import axios from 'axios';
import { config } from "@/config";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const AddSellerProduct = ({ categories, brands }) => {
    const router = useRouter()
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
        price: "",
        quantity: "",
        status: "",
        color: "",
        variant: "",
        size: "",
        coverPhoto: "",
        featuredPhoto: [],
        errors: []
    })
    const [features, setFeatures] = useState([]);

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

    const handleAddFeature = () => {
        setFeatures([...features, { key: "", value: "" }]);
    };
    const handleRemoveFeature = (index) => {
        const updatedFeatures = features.filter((_, i) => i !== index);
        setFeatures(updatedFeatures);
    };

    const handleAddSubFeature = (index) => {
        const updatedFeatures = [...features];
        updatedFeatures[index].value = [...(updatedFeatures[index].value || []), { key: '', value: undefined }];
        setFeatures(updatedFeatures);
    };
    const handleFeatureChange = (featureIndex, key, value, subFeatureIndex,) => {
        const updatedFeatures = [...features];
        if (subFeatureIndex !== undefined) {
            updatedFeatures[featureIndex].value[subFeatureIndex] = {
                ...updatedFeatures[featureIndex].value[subFeatureIndex],
                [key]: value
            };
        } else {
            updatedFeatures[featureIndex] = {
                ...updatedFeatures[featureIndex],
                [key]: value
            };
        }
        setFeatures(updatedFeatures);
    };
    const handleRemoveSubFeature = (featureIndex, subFeatureIndex) => {
        const updatedFeatures = [...features];
        updatedFeatures[featureIndex].value.splice(subFeatureIndex, 1);
        setFeatures(updatedFeatures);
    };

    const [obj, setObj] = useState({});
    useEffect(() => {
        const handelFormSubmit = () => {
            let transformedFeatures = {};
            features.forEach(feature => {
                if (Array.isArray(feature.value)) {
                    const subFeatureObj = {};
                    feature.value.forEach(subFeature => {
                        subFeatureObj[subFeature.key] = subFeature.value;
                    });
                    transformedFeatures[feature.key] = subFeatureObj;
                } else {
                    transformedFeatures[feature.key] = feature.value;
                }
            });

            const newObj = {
                code: data.code,
                name: data.name,
                title: data.title,
                description: data.description,
                brand: data.brand,
                brandId: data.brandId,
                category: data.category,
                categoryId: data.categoryId,
                priceUnit: data.priceUnit,
                price: data.price,
                quantity: data.quantity,
                status: data.status,
                warranty: data.warranty,
                color: data.color,
                variant: data.variant,
                size: data.size,
                features: transformedFeatures
            };
            setObj(newObj);
        }
        handelFormSubmit()
    }, [data, features])

    const handelFormSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let transformedFeatures = {};
            features.forEach(feature => {
                if (Array.isArray(feature.value)) {
                    const subFeatureObj = {};
                    feature.value.forEach(subFeature => {
                        subFeatureObj[subFeature.key] = subFeature.value;
                    });
                    transformedFeatures[feature.key] = subFeatureObj;
                } else {
                    transformedFeatures[feature.key] = feature.value;
                }
            });
            const newObj = {
                code: data.code,
                name: data.name,
                title: data.title,
                description: data.description,
                brand: data.brand,
                brandId: data.brandId,
                category: data.category,
                categoryId: data.categoryId,
                priceUnit: data.priceUnit,
                price: parseInt(data.price),
                quantity: parseInt(data.quantity),
                status: data.status,
                warranty: data.warranty,
                color: data.color,
                variant: data.variant,
                size: data.size,
                features: transformedFeatures,
                coverPhoto: "photo",
                featuredPhotos: ["photo1", "photo2"],
            };
            const token = Cookies.get('token');
            const response = await axios.post(`${config.api}/products`, newObj, {
                headers: {
                    Authorization: `${token}`
                }
            });
            if (response.data) {
                router.push('/seller/products')
                toast.success(response.data.message)
            }
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error)
            if (error.response.data) {
                const errorMessages = error.response.data.errorMessages;
                const formattedErrors = {};
                errorMessages.forEach(err => {
                    formattedErrors[err.path] = err.message;
                });
                setData(previousData => ({
                    ...previousData,
                    errors: formattedErrors
                }));
                toast.error(error.response.data.message)
            }
        }
    }

    return (
        <div
            className={`${styles.main_area} my-4`}
            style={{
                backgroundColor: loading ? "#EEEEEE" : "",
            }}
        >
            <div className={`${styles.form_area} add-product`}>
                <form onSubmit={handelFormSubmit}>
                    <div className="row">

                        <div className="col-md-4">

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>product code</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <input type="text"
                                    disabled={loading}
                                    placeholder='enter product code'
                                    className={`${data.errors.code ? 'is-invalid' : ''} form-control`}
                                    name="code"
                                    value={data.code}
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.code ? data.errors?.code : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>product name</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <input type="text"
                                    disabled={loading}
                                    placeholder='enter product name'
                                    className={`${data.errors.name ? 'is-invalid' : ''} form-control`}
                                    name="name"
                                    value={data.name}
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.name ? data.errors?.name : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>product title</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <input type="text"
                                    disabled={loading}
                                    name="title"
                                    value={data.title}
                                    placeholder='enter product title'
                                    className={`${data.errors.title ? 'is-invalid' : ''} form-control`}
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.title ? data.errors?.title : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>product description</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <textarea style={{ height: "122px" }}
                                    name="description"
                                    disabled={loading}
                                    placeholder='write product description'
                                    className={`${data.errors.description ? 'is-invalid' : ''} form-control`}
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.description ? data.errors?.description : null
                                    }
                                </small>
                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>product brand</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <select name="brand"
                                    disabled={loading}
                                    className={`${data.errors.brand ? 'is-invalid' : ''} form-control`}
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
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.brand ? data.errors?.brand : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>product category</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <select name="category"
                                    disabled={loading}
                                    className={`${data.errors.category ? 'is-invalid' : ''} form-control`}
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
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.category ? data.errors?.category : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>price unit</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <select name="priceUnit"
                                    disabled={loading}
                                    className={`${data.errors.priceUnit ? 'is-invalid' : ''} form-control`}
                                    onChange={handelInputChange}
                                    value={data.priceUnit}>
                                    <option value="">select price unit</option>
                                    {priceUnit.map((unit, index) => (
                                        <option key={index} value={unit}>
                                            {unit.toUpperCase()}
                                        </option>
                                    ))}
                                </select>
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.priceUnit ? data.errors?.priceUnit : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>product price</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <input type="number"
                                    disabled={loading}
                                    name="price"
                                    value={data.price}
                                    placeholder='enter product price'
                                    className={`${data.errors.price ? 'is-invalid' : ''} form-control`}
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.price ? data.errors?.price : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>product quantity</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <input type="number"
                                    disabled={loading}
                                    name="quantity"
                                    value={data.quantity}
                                    placeholder='enter product quantity'
                                    className={`${data.errors.quantity ? 'is-invalid' : ''} form-control`}
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.quantity ? data.errors?.quantity : null
                                    }
                                </small>
                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>product status</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <select name="status"
                                    disabled={loading}
                                    className={`${data.errors.status ? 'is-invalid' : ''} form-control`}
                                    onChange={handelInputChange}
                                    value={data.status}>
                                    <option value="">select product status</option>
                                    {productStatus.map((status, index) => (
                                        <option key={index} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.status ? data.errors?.status : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>product warranty</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <input type="text"
                                    disabled={loading}
                                    name="warranty"
                                    value={data.warranty}
                                    placeholder='enter product warranty'
                                    className={`${data.errors.warranty ? 'is-invalid' : ''} form-control`}
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.warranty ? data.errors?.warranty : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product color</label>
                                <input type="text"
                                    disabled={loading}
                                    name="color"
                                    value={data.color}
                                    placeholder='enter product color'
                                    className='form-control'
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.color ? data.errors?.color : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product variant</label>
                                <input type="text"
                                    disabled={loading}
                                    name="variant"
                                    value={data.variant}
                                    placeholder='enter product variant'
                                    className='form-control'
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.variant ? data.errors?.variant : null
                                    }
                                </small>
                            </div>

                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2'>product size</label>
                                <input type="text"
                                    disabled={loading}
                                    name="size"
                                    value={data.size}
                                    placeholder='enter product size'
                                    className='form-control'
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.size ? data.errors?.size : null
                                    }
                                </small>
                            </div>

                        </div>

                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>cover photo</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <input type="file"
                                    disabled={loading}
                                    className={`${data.errors.coverPhoto ? 'is-invalid' : ''} form-control`}
                                    name="coverPhoto"
                                    value={data.coverPhoto}
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.coverPhoto ? data.errors?.coverPhoto : null
                                    }
                                </small>
                            </div>
                            <div className="form-group mb-3">
                                <label className='fw-bold mb-2 d-flex'>
                                    <span>featured photos</span>
                                    <div className='required_field'>*</div>
                                </label>
                                <input type="file"
                                    disabled={loading}
                                    className={`${data.errors.featuredPhotos ? 'is-invalid' : ''} form-control`}
                                    name="featuredPhotos"
                                    value={data.coverPhoto}
                                    onChange={handelInputChange} />
                                <small className={styles.error_message}>
                                    {
                                        data.errors?.featuredPhotos ? data.errors?.featuredPhotos : null
                                    }
                                </small>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className='d-flex justify-content-between'>
                                <label className=' fw-bold'>
                                    <span className='fw-bold d-flex'>
                                        <span>product features</span>
                                        <div className='required_field'>*</div>
                                    </span>
                                </label>
                                <div className=" d-flex justify-content-end mb-2">
                                    <button
                                        disabled={loading}
                                        className='btn btn-sm btn-success mb-2  fw-bold'
                                        type='button'
                                        style={{ padding: " 5px 20px" }}
                                        onClick={handleAddFeature}
                                    >Add
                                    </button>
                                </div>
                            </div>
                            {
                                features.map((feature, index) => (
                                    <div key={index}>
                                        <div className='d-flex justify-content-between mb-2'
                                            style={{ fontSize: "14px" }}>
                                            <div className='fw-bold'>
                                                {feature.key ? `${feature.key}` : `feature ${index + 1}`}
                                            </div>
                                            <div>
                                                {(Array.isArray(feature.value) ||
                                                    (typeof feature.value !== "string" ||
                                                        (typeof feature.value === "string" && feature.value.length === 0))) && (
                                                        <button
                                                            className='btn btn-primary me-2 btn-sm'
                                                            type='button'
                                                            onClick={() => handleAddSubFeature(index)}
                                                        >
                                                            <AiOutlinePlus />
                                                        </button>
                                                    )}
                                                <button
                                                    className='btn btn-danger btn-sm'
                                                    type='button'
                                                    onClick={() => handleRemoveFeature(index)}>
                                                    <AiOutlineMinus />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <span className='col-md-3 mb-2'>
                                                <input
                                                    disabled={loading}
                                                    type="text"
                                                    placeholder="feature name"
                                                    className={`${data.errors.features ? 'is-invalid' : ''} form-control`}
                                                    value={feature.key}
                                                    onChange={(e) => handleFeatureChange(index, 'key', e.target.value)}
                                                />
                                            </span>
                                            <span className='col-md-9 mb-2'>
                                                <input
                                                    disabled={loading}
                                                    type={Array.isArray(feature.value) && feature.value.length > 0 ? 'hidden' : 'text'}
                                                    placeholder="feature value"
                                                    className={`${data.errors.features ? 'is-invalid' : ''} form-control`}
                                                    value={feature.value}
                                                    onChange={(e) => handleFeatureChange(index, 'value', e.target.value)}
                                                />
                                            </span>

                                        </div>

                                        {Array.isArray(feature.value) &&
                                            feature.value.map((subFeature, subIndex) => (
                                                <div key={subIndex} className='mb-2'>
                                                    <div className='d-flex justify-content-between'>
                                                        <div className='fw-bold'
                                                            style={{ fontSize: "14px" }}>
                                                            <div>
                                                                {
                                                                    subFeature.key ?
                                                                        feature.key ?
                                                                            `${feature.key}: ${subFeature.key}` :
                                                                            `feature ${index + 1}: ${subFeature.key}`
                                                                        :
                                                                        feature.key ?
                                                                            `${feature.key}: sub feature ${subIndex + 1}` :
                                                                            `feature ${index + 1}: sub feature ${subIndex + 1}`
                                                                }
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className='mb-2' type='button' onClick={() => handleRemoveSubFeature(index, subIndex)}><RxCross2 color='red' size="24" /></span>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <span className='col-md-3 mb-2'>
                                                            <input
                                                                disabled={loading}

                                                                type="text"
                                                                placeholder="sub feature name"
                                                                className={`${data.errors.features ? 'is-invalid' : ''} form-control`}
                                                                value={subFeature.key}
                                                                onChange={(e) => handleFeatureChange(index, 'key', e.target.value, subIndex)}
                                                            />
                                                        </span>
                                                        <div className="col-md-9 mb-2">
                                                            <input
                                                                disabled={loading}

                                                                type="text"
                                                                placeholder="sub feature value"
                                                                className={`${data.errors.features ? 'is-invalid' : ''} form-control`}
                                                                value={subFeature.value}
                                                                onChange={(e) => handleFeatureChange(index, 'value', e.target.value, subIndex)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                ))
                            }
                            <small className={styles.error_message}>
                                {
                                    data.errors?.features ? data.errors?.features : null
                                }
                            </small>
                            {/* <pre>{JSON.stringify(obj, null, 2)}</pre> */}
                        </div>



                    </div>

                    <div className='my-3'>
                        {
                            loading ? <div className='d-flex justify-content-center'>
                                <PropagateLoader color={"green"} />
                            </div>
                                :
                                <button className='btn btn-primary w-100 fw-bold' type='submit'>submit</button>
                        }
                    </div>
                </form>















            </div >
            {/* {
                loading ? <div className={styles.loading}>
                    <FadeLoader className='mt-5 ms-3' />
                </div> : null
            } */}

        </div >
    );
};

export default AddSellerProduct;