import Banner from '@/components/Home/Banner';
import Category from '@/components/Home/Category';
import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/home/index.module.css'
import Image from 'next/image';

import NewArrival from '@/components/Home/NewArrival';
import TopSelling from '@/components/Home/TopSelling';

const Home = ({ data }) => {
  const topSelling = data.productData.data.sort((a, b) => b.sellCount - a.sellCount);
  const newArrivals = data.productData.data.sort((productA, productB) => new Date(productB.createdAt) - new Date(productA.createdAt));
  return (
    <div className='container'>
      {/* new arrival */}
      <div className={`${styles.new_arrival_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>New arrival</h5>
        <hr />
        <div className="row">
          {
            newArrivals.slice(0, 12).map((newArrival) => <NewArrival key={newArrival._id} newArrival={newArrival} />)
          }
        </div>
      </div>

      {/* top selling */}
      <div className={`${styles.top_selling_area} my-5`}>
        <h5 className='fw-bold text-uppercase'>top selling</h5>
        <hr />
        <div className="row">
          {
            topSelling.slice(0, 12).map((topSelling) => <TopSelling key={topSelling._id} topSelling={topSelling} />)
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
  const products = await fetch("https://tech-mart-server.vercel.app/api/products");
  const productData = await products.json();
  return {
    props: {
      data: {
         productData
      }
    }
  };
};
