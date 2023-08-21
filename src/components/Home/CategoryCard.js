import Image from 'next/image';
import React from 'react';
import styles from '@/styles/home/category.module.css'
import Link from 'next/link';

const CategoryCard = (props) => {
    const { name, coverPhoto } = props.category
    return (
        <div className="col-xxl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
            <Link href={`/categories/${name}`} className={`${styles.category_card}`}>
                <div className="text-center">
                    <Image className="mt-2" src={coverPhoto} height={50} width={50} alt="image" />
                    <h6 className="fw-bold text-center mt-3">{name.split('-').join(' ')}</h6>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;