import BrandCard from '@/components/Brand/BrandCard';
import Breadcrumb from '@/components/Breadcrumb/Index';
import MainLayout from '@/layouts/MainLayout';

const BrandPage = ({ data }) => {
    return (
        <div className='container'>
            <Breadcrumb />
            <div className='py-4'>
                <div className="row">
                    {
                        data?.brands?.data?.map((brand) => <BrandCard key={brand._id} brand={brand} />)
                    }
                </div>
            </div>
            <div className="details-description pb-4">
                <h4 className='fw-bold my-3'>Discover the Experience!</h4>
                <hr />
                <p>
                    Immerse yourself in the world of tech mart, where innovation meets everyday life through a captivating collection of cutting-edge products. Whether you're a dedicated tech enthusiast, a seeker of enhanced productivity, or an advocate for seamless convenience, our brand is your gateway to a realm of ingenious solutions.
                </p>
                <p>
                    <span className='fw-bold'>Explore Our Legacy: </span>
                    Dive into a diverse range of smart gadgets, meticulously designed to elevate various facets of your daily routines. Our curated selection ensures you'll discover products that seamlessly align with your lifestyle and preferences. From smart home marvels revolutionizing living spaces to wearable wonders keeping you connected, our brand invites you to explore and unveil innovation.
                </p>
                <p>
                    <span className='fw-bold'>Pioneering Technology: </span>
                    Elevate your routines with smart gadgets infused with groundbreaking technology. Enter a world where AI, IoT connectivity, and intuitive interfaces redefine your experiences. Our brand is a testament to innovations that allow you to grasp the future of convenience and efficiency today.
                </p>
                <p>
                    <span className='fw-bold'>A Fusion of Form and Function: </span>
                    Witness the fusion of aesthetics and practicality through the modern and ergonomic designs of the smart gadgets featured in our collection. Whether your taste leans toward sleek minimalism or visionary aesthetics, our brand offers choices aligning with your distinctive style. Crafted with meticulous attention, our gadgets effortlessly integrate into your life.
                </p>
                <p>
                    <span className='fw-bold'>Comprehensive Ingenuity: </span>
                    Make informed choices with detailed specifications accompanying each smart gadget. From features and compatibility to battery life and connectivity prowess, our brand's commitment to innovation empowers you to select gadgets that harmonize effortlessly with your needs. Our page assures that you're captivated by innovation and equipped with essential details for seamless integration.
                </p>
                <p>
                    <span className='fw-bold'>Real User Insights: </span>
                    Benefit from authentic user experiences through genuine customer reviews and ratings. Gain insights from individuals who've embraced our smart gadgets into their routines. This invaluable feedback empowers you to make informed choices echoing your technological aspirations.
                </p>
                <p>
                    <span className='fw-bold'>Effortless Integration: </span>
                    Seamlessly navigate our brand's offerings with intuitive filters. Refine your search based on categories, compatibility, and more. Once you've uncovered your perfect gadget, our streamlined checkout process guarantees a smooth shopping experience. Embrace the future of technology effortlessly.
                </p>
                <p>
                    Embark on an odyssey of innovation and convenience by delving into the [Brand Name] experience. From redefining homes to enhancing personal experiences, we're devoted to furnishing you with an extensive array of gadgets that reshape your daily encounters. Your ultimate smart gadget awaits just a click away. Start exploring now!
                </p>
            </div>
        </div>
    );
};

export default BrandPage;
BrandPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const brandResponse = await fetch("https://tech-mart-server.vercel.app/api/brands");
    const brands = await brandResponse.json();
    return {
        props: {
            data: {
                brands
            },
            revalidate: 30
        }
    };
};