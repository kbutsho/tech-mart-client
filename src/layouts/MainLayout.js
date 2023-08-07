import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
    const handleContextMenu = (event) => {
        if (process.env.NODE_ENV === 'production') {
            event.preventDefault();
        }
    };
    return (
        <div>
            <Navbar />
            <div>
                <div style={{ marginTop: "150px" }}
                    className='main_area'
                    onContextMenu={handleContextMenu}>
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