import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto">
                <h2>This is home</h2>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;