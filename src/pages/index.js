import Banner from '@/components/Home/Banner';
import Category from '@/components/Home/Category';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import React from 'react';
import { BsSearch } from 'react-icons/bs'
const Home = ({ data }) => {
  console.log(data)
  return (

    <div className='container' >
      <div className="search_area py-4">
        <form className={`d-flex align-items-center`}>
          <input type="text" placeholder='search for products' className={`form-control w-100 ${styles.search_input}`} />
          <BsSearch size="30px" style={{ marginLeft: "-50px" }} type='submit' />
        </form>


      </div>
      <div className="banner-area py-4">
        <Banner />
      </div>
      <div className="category-area py-4">
        <h5 className='fw-bold text-uppercase'>Featured category</h5>
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
