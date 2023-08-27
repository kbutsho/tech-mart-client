import React from 'react';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const Feature = () => {
    const [features, setFeatures] = useState([]);
    const [inputValidity, setInputValidity] = useState([]);
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
        const updatedInputValidity = [...inputValidity];
        updatedInputValidity[featureIndex] = {
            ...updatedInputValidity[featureIndex],
            [key]: value.trim() !== '',
        };
        setInputValidity(updatedInputValidity);
        setFeatures(updatedFeatures);
    };

    const handleRemoveSubFeature = (featureIndex, subFeatureIndex) => {
        const updatedFeatures = [...features];
        updatedFeatures[featureIndex].value.splice(subFeatureIndex, 1);
        setFeatures(updatedFeatures);
    };

    const checkEmptyFields = (data) => {
        for (const feature of data) {
            if (!feature.key.trim() || (!Array.isArray(feature.value) && !feature.value.trim())) {
                return true;
            }
            if (Array.isArray(feature.value)) {
                for (const subFeature of feature.value) {
                    if (!subFeature.key.trim() || !subFeature.value.trim()) {
                        return true;
                    }
                }
            }
        }
        return false;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const hasEmptyFields = checkEmptyFields(features);
        if (hasEmptyFields) {
            toast.error('Please fill out all required fields');
        } else {
            toast.success('Form submitted successfully');

            console.log('Submitting:', features);
        }
    }


    return (
        <div className='container row'>
            <form onSubmit={handleSubmit}>
                <div className="col-md-4">
                    <div className='d-flex justify-content-between'>
                        <label className='fw-bold mb-2'>product features</label>
                        <button className='mb-2 btn btn-sm btn-primary' type='button' onClick={handleAddFeature}>Add Features</button>
                    </div>
                    {
                        features.map((feature, index) => (
                            <div key={index}>
                                <div className='d-flex justify-content-between'
                                    style={{ marginBottom: "6px", fontSize: "14px" }}>
                                    <div className='fw-bold'>
                                        {feature.key ? `${feature.key}` : `feature ${index + 1}`}
                                    </div>
                                    <div>
                                        {(Array.isArray(feature.value) ||
                                            (typeof feature.value !== "string" ||
                                                (typeof feature.value === "string" && feature.value.length === 0))) && (
                                                <button
                                                    className='btn btn-primary me-1 btn-sm'
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
                                <div className='d-flex justify-content-between mb-2'>
                                    <input
                                        // required={true}
                                        type="text"
                                        placeholder="name"
                                        className={`form-control w-25 me-2 ${inputValidity[index]?.value === false ? 'is-invalid' : ''}`}
                                        value={feature.key}
                                        onChange={(e) => handleFeatureChange(index, 'key', e.target.value)}
                                    />
                                    <input
                                        // required={true}
                                        type={Array.isArray(feature.value) && feature.value.length > 0 ? 'hidden' : 'text'}
                                        placeholder="value"
                                        className={`form-control w-75 ${inputValidity[index]?.value === false ? 'is-invalid' : ''}`}
                                        value={feature.value}
                                        onChange={(e) => handleFeatureChange(index, 'value', e.target.value)}
                                    />

                                </div>

                                {Array.isArray(feature.value) &&
                                    feature.value.map((subFeature, subIndex) => (
                                        <div key={subIndex} className='mb-2 ms-4'>
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
                                                    <span className='mb-1' type='button' onClick={() => handleRemoveSubFeature(index, subIndex)}><RxCross2 color='red' size="24" /></span>
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-between mb-2'>
                                                <input
                                                    // required={true}
                                                    type="text"
                                                    placeholder="key"
                                                    className={`form-control w-25 me-2 ${inputValidity[index]?.value === false ? 'is-invalid' : ''}`}
                                                    value={subFeature.key}
                                                    onChange={(e) => handleFeatureChange(index, 'key', e.target.value, subIndex)}
                                                />
                                                <input
                                                    // required={true}
                                                    type="text"
                                                    placeholder="value"
                                                    className={`form-control w-75 ${inputValidity[index]?.value === false ? 'is-invalid' : ''}`}
                                                    value={subFeature.value}
                                                    onChange={(e) => handleFeatureChange(index, 'value', e.target.value, subIndex)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))
                    }
                    <pre>{JSON.stringify(features, null, 2)}</pre>
                </div>

                <input type="submit" className='btn btn-primary w-100' value="submit" />
            </form>
        </div>
    );
};

export default Feature;