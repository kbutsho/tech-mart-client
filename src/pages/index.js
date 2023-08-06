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
import Link from 'next/link';
import PhoneCategory from '@/components/Home/PhoneCategory';

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
          <div className="col-md-11 col-9">
            <form className={`d-flex align-items-center`}>
              <input type="text" placeholder='search products' className={`form-control w-100 ${styles.search_input}`} />
              <BsSearch size="26px" style={{ marginLeft: "-50px" }} type='submit' />
            </form>
          </div>
          <div className="col-md-1 col-3">
            <div className={`${styles.cart_area} d-flex justify-content-end pt-1`}>
              <Image className="nav-link me-2" src={favorite} height={36} width={36} alt="img" />
              <Image className="nav-link" src={cart} height={36} width={36} alt="img" />
            </div>
          </div>

        </div>
      </div>

      {/* banner area */}
      <div className={`${styles.banner_area} my-4`}>
        <Banner />
      </div>

      {/* category area */}
      <div className={`${styles.category_area} my-4`}>
        <h5 className='fw-bold text-uppercase'>Featured categories</h5>
        <hr />
        <div className="row">
          {
            data.categories.data.map((category) => <Category key={category._id} category={category} />)
          }
        </div>
      </div>

      {/* brand area */}
      <div className={`${styles.brand_area} my-4`}>
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
      <div className={`${styles.new_arrival_area} my-4`}>
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
      <div className={`${styles.top_selling_area} my-4`}>
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
      <div className={`${styles.top_selling_area} my-4`}>
        <h5 className='fw-bold text-uppercase'>Smart Phones</h5>
        <hr />
        <div className="row">
          {
            data.phoneCategory.data.slice(0, 12).map((phone) => <PhoneCategory key={phone._id} phone={phone} />)
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

  const categories = await categoryResponse.json();
  const brands = await brandResponse.json();
  const newArrival = await newArrivalResponse.json();
  const topSelling = await topSellingResponse.json();
  const phoneCategory = await phoneCategoryResponse.json();
  return {
    props: {
      data: {
        categories, brands, newArrival, topSelling, phoneCategory
      }
    }
  };
};
