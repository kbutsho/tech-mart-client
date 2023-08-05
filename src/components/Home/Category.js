import Image from 'next/image';
import React from 'react';
import styles from '@/styles/Home.module.css'

const Category = (props) => {
    const { name, coverPhoto } = props.category
    return (
        <div className="col-md-2 col-12">
            <div className={`${styles.category_card}`}>
                <div className="text-center">
                    <Image className="mt-2" src={coverPhoto} height={50} width={50} alt="image"></Image>
                    <h6 className="fw-bold text-center mt-3">{name}</h6>
                </div>
            </div>
        </div>
    );
};

export default Category;