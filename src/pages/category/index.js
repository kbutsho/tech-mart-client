import Breadcrumb from '@/components/Breadcrumb/Index';
import CategoryCard from '@/components/Home/CategoryCard';
import MainLayout from '@/layouts/MainLayout';

const CategoryPage = ({ data }) => {
    return (
        <div className='container'>
            <Breadcrumb />
            <div className='py-4'>
                <div className="row">
                    {
                        data?.categories?.data?.map((category) => <CategoryCard key={category._id} category={category} />)
                    }
                </div>
            </div>
            <div className="details-description pb-4">
                <h4 className='fw-bold my-3'>Discover Innovative Tech Solutions</h4>
                <hr />
                <p>
                    Embark on a journey into the world of the finest technology with our captivating collection of cutting-edge smart gadgets. Whether you're an avid tech enthusiast, a seeker of productivity enhancements, or someone who cherishes seamless convenience, our Smart Gadget Category Page is your gateway to a realm of ingenious solutions.
                </p>
                <p>
                    <span className='fw-bold'>Explore and Unveil: </span>
                    Immerse yourself in a diverse range of smart gadgets meticulously designed to elevate various facets of your life. Our carefully curated selection guarantees that you'll stumble upon the perfect gadgets aligning seamlessly with your lifestyle and preferences. From smart home marvels transforming your living space to wearable wonders that keep you connected, our Smart Gadget Category Page is your ultimate hub for discovery and revelation.
                </p>
                <p>
                    <span className='fw-bold'>Pioneering Technology: </span>
                    Elevate your daily routines with smart gadgets infused with groundbreaking technology. Venture into a world where AI, IoT connectivity, and intuitive interfaces redefine your everyday experiences. Our Smart Gadget Category Page is a showcase of innovations that enable you to grasp the future of convenience and efficiency today.
                </p>
                <p>
                    <span className='fw-bold'>Elegance Meets Functionality: </span>
                    Witness the fusion of aesthetics and practicality through the modern and ergonomic designs of the smart gadgets featured in our collection. Whether you favor sleek minimalism or visionary aesthetics, our Smart Gadget Category Page offers an array of choices to align with your distinctive style. Crafted with meticulous attention, these gadgets seamlessly integrate into your life.
                </p>
                <p>
                    <span className='fw-bold'>Comprehensive Ingenuity: </span>
                    Make enlightened decisions with comprehensive specifications accompanying each smart gadget. From features and compatibility to battery life and connectivity prowess, our detailed insights empower you to select gadgets harmonizing effortlessly with your requirements. Our Smart Gadget Category Page assures that you're captivated by innovation and equipped with essential details for seamless integration.
                </p>
                <p>
                    <span className='fw-bold'>Authentic User Insights: </span>
                    Benefit from firsthand experiences through genuine customer reviews and ratings. Gain knowledge from individuals who have embraced these smart gadgets into their routines. This invaluable feedback empowers you to make informed choices echoing your technological aspirations.
                </p>
                <p>
                    <span className='fw-bold'>Effortless Tech Integration: </span>
                    Seamlessly navigate our Smart Gadget Category Page with intuitive filters. Refine your search based on categories, compatibility, and more. Once you've unearthed your perfect gadget, our streamlined checkout process guarantees a smooth shopping experience. Embrace the future of technology effortlessly.
                </p>
                <p>
                    Embark on an odyssey of innovation and convenience by delving into our Smart Gadget Category Page. From redefining homes to enhancing personal experiences, we're devoted to furnishing you with an extensive array of gadgets that reshape your daily encounters. Your ultimate smart gadget awaits just a click away. Start exploring now!
                </p>
            </div>
        </div>
    );
};

export default CategoryPage;
CategoryPage.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
    const categoryResponse = await fetch("https://tech-mart-server.vercel.app/api/categories");
    const categories = await categoryResponse.json();
    return {
        props: {
            data: {
                categories
            },
            revalidate: 30
        }
    };
};