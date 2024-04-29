import { useLoaderData } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import CraftItemCard from "./ArtsAndCrafts/CraftItemCard";
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from "../Providers/AuthProvider";



const Home = () => {
    const allCraftItems = useLoaderData();

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center mt-40">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto">
                <div>This is banner/slider section</div>

                <div className="my-20 App">

                    <h3 className="font-bold text-2xl text-center font-rubic mb-8 block">
                        <Typewriter
                            delaySpeed={2000}
                            deleteSpeed={100}
                            loop={5}
                            typeSpeed={100}
                            words={[
                                'Discover Our Ceramics and  Pottery items'
                            ]} />
                    </h3>


                    {/* Craft Item Cards */}
                    <div className="grid grid-cols-2 gap-6">
                        {
                            allCraftItems.slice(0, 6).map(singleCraftItem => <CraftItemCard key={singleCraftItem._id} singleCraftItem={singleCraftItem}></CraftItemCard>)
                        }
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;