import { useRef } from 'react';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
const Brand = (props) => {
    const { coverPhoto, name } = props.brand
    return (
        <div className={`${styles.brand_card}`}>
            <div className="text-center">
                <Image className="mt-2" src={coverPhoto} height={50} width={50} alt="image" />
                <h6 className="fw-bold text-center mt-3">{name}</h6>
            </div>
        </div>
    );
};

export default Brand;