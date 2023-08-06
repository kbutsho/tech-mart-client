import Image from 'next/image';
import React from 'react';
import styles from '@/styles/home/category.module.css'

const Category = (props) => {
    const { name, coverPhoto } = props.category
    return (
        <div className="col-xxl-2 col-lg-2 col-md-3 col-sm-4 col-xs-6 col-6">
            <div className={`${styles.category_card}`}>
                <div className="text-center">
                    <Image className="mt-2" src={coverPhoto} height={50} width={50} alt="image" />
                    <h6 className="fw-bold text-center mt-3">{name}</h6>
                </div>
            </div>
        </div>
    );
};

export default Category;