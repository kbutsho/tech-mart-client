import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>
                <div className='main_area'>
                    {children}
                </div>
                <div className='footer_area'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;