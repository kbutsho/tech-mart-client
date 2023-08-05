import Banner from '@/components/Home/Banner';
import Category from '@/components/Home/Category';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import React from 'react';
import { BsSearch } from 'react-icons/bs'
import cart from '@/assets/navbar/cart.png'
import favorite from '@/assets/navbar/favourite.png'

const Home = ({ data }) => {
  return (
    <div className='container' >
      <div className="search_area py-2">
        <div className="row">
          <div className="col-md-11 col-9">
            <form className={`d-flex align-items-center`}>
              <input type="text" placeholder='search products' className={`form-control w-100 ${styles.search_input}`} />
              <BsSearch size="26px" style={{ marginLeft: "-50px" }} type='submit' />
            </form>
          </div>
          <div className="col-md-1 col-3 bg-success">
            <div className={`${styles.cart_area} d-flex justify-content-between pt-1`}>
              <Image className="nav-link" src={favorite} height={36} width={36} alt="img" />
              <Image className="nav-link" src={cart} height={36} width={36} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-area py-4">
        <Banner />
      </div>
      <div className="category-area py-4">
        <h5 className='fw-bold text-uppercase'>Featured categories</h5>
        <hr />
        <div className="row">
          {
            data.data.map((category) => <Category key={category._id} category={category} />)
          }
        </div>
      </div>
    </div >
  );
};

export default Home;
Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  const categories = await fetch("https://tech-mart-server.vercel.app/api/categories");
  const data = await categories.json();
  return {
    props: {
      data: data
    }
  };
};
