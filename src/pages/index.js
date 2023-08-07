import Banner from '@/components/Home/Banner';
import CategoryCard from '@/components/Home/CategoryCard';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/home/index.module.css'
import Image from 'next/legacy/image'
import React, { useRef } from 'react';
import BrandCard from '@/components/Home/BrandCard';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';;
import topSellingBanner from '@/assets/home/topSelling.png'
import newArrivalBanner from '@/assets/home/newArrival.png'
import phoneCategoryBanner from '@/assets/home/phone.jpeg'
import watchCategoryBanner from '@/assets/home/watch.jpeg'
import earphoneCategoryBanner from '@/assets/home/earphone.jpeg'
import tvCategoryBanner from '@/assets/home/tv.jpeg'
import chargerCategoryBanner from '@/assets/home/charger.jpeg'
import monitorCategoryBanner from '@/assets/home/monitor.jpeg'
import Link from 'next/link';
import ProductCard from '@/components/Home/ProductCard';

const Home = ({ data }) => {

  const slideRef = useRef()
  const responsiveSettings = [
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ];

  return (
    <div className={`${styles.main_area} container`}>

      {/* banner area */}
      <div className={`${styles.banner_area} mb-5`}>
        <Banner />
      </div>

      {/* category area */}
      <div className={`${styles.category_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>Featured categories</h5>
        <hr />
        <div className="row">
          {
            data?.categories?.data?.map((category) => <CategoryCard key={category._id} category={category} />)
          }
        </div>
      </div>

      {/* brand area */}
      <div className={`${styles.brand_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>popular brand</h5>
        <hr />
        <Slide scale={0.4}
          responsive={responsiveSettings}
          easing={"ease"}
          autoplay={true}
          duration={1500}
          ref={slideRef}
          transitionDuration={500}
          nextArrow={<button style={{ display: "none" }}></button>}
          prevArrow={<button style={{ display: "none" }}></button>}
        >
          {
            data?.brands?.data?.map((brand) => <BrandCard key={brand._id} brand={brand} />)
          }
        </Slide>
      </div>

      {/* new arrival */}
      <Link href="/"><Image src={newArrivalBanner} height={467} width={3840} layout='responsive' alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.new_arrival_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>New arrival</h5>
        <hr />
        <div className="row">
          {
            data?.newArrival?.data?.slice(0, 12)?.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>

      {/* top selling */}
      <Link href="/"><Image src={topSellingBanner} height={467} width={3840} layout='responsive' alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.top_selling_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>top selling</h5>
        <hr />
        <div className="row">
          {
            data?.topSelling?.data?.slice(0, 12)?.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>

      {/* phone category*/}
      <Link href="/"><Image src={phoneCategoryBanner} height={467} width={3840} layout='responsive' alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.phone_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>Smart Phones</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data?.phoneCategory?.data?.slice(0, 12)?.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>

      {/* watch category */}
      <Link href="/"><Image src={watchCategoryBanner} height={467} width={3840} layout='responsive' alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.watch_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>Smart watch</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data?.watchCategory?.data?.slice(0, 12)?.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>

      {/* earphone category */}
      <Link href="/"><Image src={earphoneCategoryBanner} height={467} width={3840} layout='responsive' alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.earphone_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>earphone</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data?.earphoneCategory?.data?.slice(0, 12)?.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>

      {/* camera category */}
      <Link href="/"><Image src={phoneCategoryBanner} height={467} width={3840} layout='responsive' alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.camera_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>camera</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data?.cameraCategory?.data?.slice(0, 12)?.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>

      {/* laptop category */}
      <Link href="/"><Image src={topSellingBanner} height={467} width={3840} layout='responsive' alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.laptop_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>laptop</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data?.laptopCategory?.data?.slice(0, 12)?.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>

      {/* monitor category */}
      <Link href="/"><Image src={monitorCategoryBanner} height={467} width={3840} layout='responsive' alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.monitor_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>monitor</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data?.monitorCategory?.data?.slice(0, 12)?.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>

      {/* television category */}
      <Link href="/"><Image src={tvCategoryBanner} height={467} width={3840} layout='responsive' alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.television_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>television</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data?.tvCategory?.data?.slice(0, 12)?.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>

      {/* charger category */}
      <Link href="/"><Image src={chargerCategoryBanner} height={467} width={3840} layout='responsive' alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.charger_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>charger</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data?.chargerCategory?.data?.slice(0, 12)?.map((product) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>

    </div>
  );
};

export default Home;
Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {

  const categoryResponse = await fetch("https://tech-mart-server.vercel.app/api/categories");
  const brandResponse = await fetch("https://tech-mart-server.vercel.app/api/brands");
  const newArrivalResponse = await fetch("https://tech-mart-server.vercel.app/api/products?sortBy=createdAt&sortOrder=desc&limit=12");
  const topSellingResponse = await fetch("https://tech-mart-server.vercel.app/api/products?sortBy=sellCount&limit=12");
  const phoneCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=phone&limit=12");
  const watchCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=watch&limit=12");
  const earphoneCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=earphone&limit=12");
  const laptopCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=laptop&limit=12");
  const cameraCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=camera&limit=12");
  const tvCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=television&limit=12");
  const chargerCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=charger&limit=12");
  const monitorCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=monitor&limit=12");

  const categories = await categoryResponse.json();
  const brands = await brandResponse.json();
  const newArrival = await newArrivalResponse.json();
  const topSelling = await topSellingResponse.json();
  const phoneCategory = await phoneCategoryResponse.json();
  const watchCategory = await watchCategoryResponse.json();
  const earphoneCategory = await earphoneCategoryResponse.json();
  const laptopCategory = await laptopCategoryResponse.json();
  const cameraCategory = await cameraCategoryResponse.json();
  const tvCategory = await tvCategoryResponse.json();
  const chargerCategory = await chargerCategoryResponse.json();
  const monitorCategory = await monitorCategoryResponse.json();
  return {
    props: {
      data: {
        categories, brands, cameraCategory, monitorCategory, tvCategory, chargerCategory, newArrival, topSelling, phoneCategory, watchCategory, earphoneCategory, laptopCategory
      }
    }
  };
};
