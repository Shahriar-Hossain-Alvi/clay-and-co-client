import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
           <h2>This is home</h2>

           <Footer></Footer>
        </div>
    );
};

export default Home;