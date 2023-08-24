import Image from 'next/image';
import React from 'react';
import styles from '@/styles/home/category.module.css'
import Link from 'next/link';
import { isValidURL } from '@/helper';
import notFoundImage from "@/assets/product/not-found.png";

const CategoryCard = (props) => {
    const { name, coverPhoto } = props.category
    return (
        <div className="col-xxl-2 col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
            <Link href={`/category/${name}`} className={`${styles.category_card}`}>
                <div className="text-center">
                    {isValidURL(coverPhoto) ? (
                        <Image className="mt-2" src={coverPhoto} height={50} width={50} alt="image" />
                    ) : (
                        <Image className="mt-2" src={notFoundImage} height={50} width={50} alt="image" />
                    )}
                    <h6 className="fw-bold text-center mt-3">{name.split('-').join(' ')}</h6>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;