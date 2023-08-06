import styles from '@/styles/home/brand.module.css'
import Image from 'next/image';
const Brand = (props) => {
    const { coverPhoto } = props.brand
    return (
        <div className={`${styles.brand_card}`}>
            <div className="text-center">
                <Image className={`mt-2 ${styles.brand_image}`} src={coverPhoto} height={60} width={115} alt="image" />
            </div>
        </div>
    );
};

export default Brand;