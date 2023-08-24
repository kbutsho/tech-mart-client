import Image from 'next/image';
import styles from '@/styles/home/brand.module.css'
import Link from 'next/link';
import { isValidURL } from '@/helper';
import notFoundImage from "@/assets/product/not-found.png"

const BrandCard = (props) => {
    const { name, coverPhoto } = props.brand
    return (
        <div className="col-xxl-2 col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4">
            <Link href={`/brand/${name}`} className={`${styles.brand_page_card}`}>
                <div className="text-center">
                    {
                        isValidURL(coverPhoto) ? (
                            <Image className="mt-2" src={coverPhoto} height={35} width={120} alt="image" layout='responsive' />
                        ) : (
                            <Image className="mt-2" src={notFoundImage} height={35} width={120} alt="image" layout='responsive' />
                        )
                    }
                </div>
            </Link>
        </div>
    );
};

export default BrandCard;