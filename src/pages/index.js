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
        slidesToShow: 4,
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
      <div className={`${styles.banner_area} mb-5 mt-4`}>
        <Banner />
      </div>

      {/* category area */}
      <div className={`${styles.category_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>Featured categories</h5>
        <hr />
        <div className="row">
          {
            data.categoryData.data.map((category) => <Category key={category._id} category={category} />)
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
            data.brandData.data.map((brand) => <Brand key={brand._id} brand={brand} />)
          }
        </Slide>
      </div>

      {/* new arrival */}
      <div className={`${styles.new_arrival_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>New arrival</h5>
        <hr />
        <div className="row">
          {
            data.productData.data.slice(0, 12).map((newArrival) => <NewArrival key={newArrival._id} newArrival={newArrival} />)
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
  const categories = await fetch("https://tech-mart-server.vercel.app/api/categories");
  const brands = await fetch("https://tech-mart-server.vercel.app/api/brands");
  const products = await fetch("https://tech-mart-server.vercel.app/api/products");
  const categoryData = await categories.json();
  const brandData = await brands.json();
  const productData = await products.json();
  return {
    props: {
      data: {
        categoryData, brandData, productData
      }
    }
  };
};
