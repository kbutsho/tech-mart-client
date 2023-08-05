import Banner from '@/components/Home/Banner';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/Home.module.css'
import React from 'react';
import { BsSearch } from 'react-icons/bs'
const Home = () => {
  return (
    <div className='container'>
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

      </div>
    </div>
  );
};

export default Home;
Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
