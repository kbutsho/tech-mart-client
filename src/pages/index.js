import Banner from '@/components/Home/Banner';
import Category from '@/components/Home/Category';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/home/index.module.css'
import Image from 'next/image';
import React, { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'
import cart from '@/assets/navbar/cart.png'
import favorite from '@/assets/navbar/favourite.png'
import Brand from '@/components/Home/Brand';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import NewArrival from '@/components/Home/NewArrival';
import TopSelling from '@/components/Home/TopSelling';
import topSellingBanner from '@/assets/home/topSelling.png'
import newArrivalBanner from '@/assets/home/newArrival.png'
import phoneCategoryBanner from '@/assets/home/phone.jpeg'
import watchCategoryBanner from '@/assets/home/watch.jpeg'
import earphoneCategoryBanner from '@/assets/home/earphone.jpeg'
import tvCategoryBanner from '@/assets/home/tv.jpeg'
import chargerCategoryBanner from '@/assets/home/charger.jpeg'
import monitorCategoryBanner from '@/assets/home/monitor.jpeg'
import Link from 'next/link';
import PhoneCategory from '@/components/Home/PhoneCategory';
import WatchCategory from '@/components/Home/WatchCategory';
import EarphoneCategory from '@/components/Home/EarphoneCategory';
import LaptopCategory from '@/components/Home/LaptopCategory';
import CameraCategory from '@/components/Home/CameraCategory';
import TvCategory from '@/components/Home/TvCategory';
import ChargerCategory from '@/components/Home/ChargerCategory';
import MonitorCategory from '@/components/Home/MonitorCategory';

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
    <div className='container'>

      {/* product search */}
      <div className={`${styles.search_area} container py-2`}>
        <div className="row">
          <div className="col-md-11 col-8">
            <form className={`d-flex align-items-center`}>
              <input type="text" placeholder='search products' className={`form-control w-100 ${styles.search_input}`} />
              <BsSearch size="26px" style={{ marginLeft: "-50px" }} type='submit' />
            </form>
          </div>
          <div className="col-md-1 col-4">
            <div className={`${styles.cart_area} d-flex justify-content-end`} style={{ paddingTop: "11px" }}>
              <div className='d-flex me-2'>
                <Image className="nav-link me-2" src={favorite} height={30} width={30} alt="img" />
                <span className={styles.cart_count}>2</span>
              </div>
              <div className='d-flex'>
                <Image className="nav-link me-2" src={cart} height={30} width={30} alt="img" />
                <span className={styles.cart_count}>2</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* banner area */}
      <div className={`${styles.banner_area} mt-4 mb-5`}>
        <Banner />
      </div>

      {/* category area */}
      <div className={`${styles.category_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>Featured categories</h5>
        <hr />
        <div className="row">
          {
            data.categories.data.map((category) => <Category key={category._id} category={category} />)
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
            data.brands.data.map((brand) => <Brand key={brand._id} brand={brand} />)
          }
        </Slide>
      </div>

      {/* new arrival */}
      <Link href="/"><Image src={newArrivalBanner} layout='responsive' height={100} width={100} alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.new_arrival_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>New arrival</h5>
        <hr />
        <div className="row">
          {
            data.newArrival.data.slice(0, 12).map((newArrival) => <NewArrival key={newArrival._id} newArrival={newArrival} />)
          }
        </div>
      </div>

      {/* top selling */}
      <Link href="/"><Image src={topSellingBanner} layout='responsive' height={100} width={100} alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.top_selling_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>top selling</h5>
        <hr />
        <div className="row">
          {
            data.topSelling.data.slice(0, 12).map((topSelling) => <TopSelling key={topSelling._id} topSelling={topSelling} />)
          }
        </div>
      </div>

      {/* phone category*/}
      <Link href="/"><Image src={phoneCategoryBanner} layout='responsive' height={100} width={100} alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.phone_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>Smart Phones</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data.phoneCategory.data.slice(0, 12).map((phone) => <PhoneCategory key={phone._id} phone={phone} />)
          }
        </div>
      </div>

      {/* watch category */}
      <Link href="/"><Image src={watchCategoryBanner} layout='responsive' height={100} width={100} alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.watch_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>Smart watch</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data.watchCategory.data.slice(0, 12).map((watch) => <WatchCategory key={watch._id} watch={watch} />)
          }
        </div>
      </div>

      {/* earphone category */}
      <Link href="/"><Image src={earphoneCategoryBanner} layout='responsive' height={100} width={100} alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.earphone_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>earphone</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data.earphoneCategory.data.slice(0, 12).map((earphone) => <EarphoneCategory key={earphone._id} earphone={earphone} />)
          }
        </div>
      </div>

      {/* camera category */}
      <Link href="/"><Image src={phoneCategoryBanner} layout='responsive' height={100} width={100} alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.camera_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>camera</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data.cameraCategory.data.slice(0, 12).map((camera) => <CameraCategory key={camera._id} camera={camera} />)
          }
        </div>
      </div>

      {/* laptop category */}
      <Link href="/"><Image src={topSellingBanner} layout='responsive' height={100} width={100} alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.laptop_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>laptop</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data.laptopCategory.data.slice(0, 12).map((laptop) => <LaptopCategory key={laptop._id} laptop={laptop} />)
          }
        </div>
      </div>

      {/* monitor category */}
      <Link href="/"><Image src={monitorCategoryBanner} layout='responsive' height={100} width={100} alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.monitor_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>monitor</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data.monitorCategory.data.slice(0, 12).map((monitor) => <MonitorCategory key={monitor._id} laptop={monitor} />)
          }
        </div>
      </div>

      {/* television category */}
      <Link href="/"><Image src={tvCategoryBanner} layout='responsive' height={100} width={100} alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.television_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>television</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data.tvCategory.data.slice(0, 12).map((tv) => <TvCategory key={tv._id} tv={tv} />)
          }
        </div>
      </div>

      {/* charger category */}
      <Link href="/"><Image src={chargerCategoryBanner} layout='responsive' height={100} width={100} alt="img" className={styles.bannerImage} /></Link>
      <div className={`${styles.charger_category_area} my-5`}>
        <div className='d-flex justify-content-between align-items-center'>
          <h5 className='fw-bold text-uppercase mt-2'>charger</h5>
          <button className='btn btn-primary btn-sm px-3 fw-bold'>view all</button>
        </div>
        <hr />
        <div className="row">
          {
            data.chargerCategory.data.slice(0, 12).map((charger) => <ChargerCategory key={charger._id} charger={charger} />)
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
  const newArrivalResponse = await fetch("https://tech-mart-server.vercel.app/api/products?sortBy=createdAt&sortOrder=desc");
  const topSellingResponse = await fetch("https://tech-mart-server.vercel.app/api/products?sortBy=sellCount");
  const phoneCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=phone");
  const watchCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=watch");
  const earphoneCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=earphone");
  const laptopCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=laptop");
  const cameraCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=camera");
  const tvCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=television");
  const chargerCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=charger");
  const monitorCategoryResponse = await fetch("https://tech-mart-server.vercel.app/api/products?category=monitor");

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
