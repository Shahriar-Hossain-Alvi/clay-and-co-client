import { useLoaderData } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import CraftItemCard from "./ArtsAndCrafts/CraftItemCard";

const Home = () => {
    const allCraftItems = useLoaderData();
    console.log(allCraftItems);

    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto">
                <div>This is banner/slider section</div>
                
                <div className="my-20">
                    <h3 className="font-bold text-2xl text-center font-rubic text-secondaryColor">Discover Our <span>Ceramics and Pottery</span> items </h3>
                    
                    {/* Craft Item Cards */}
                    <div className="grid grid-cols-2 gap-3">
                        {
                            allCraftItems.slice(0,6).map(singleCraftItem=><CraftItemCard key={singleCraftItem._id} singleCraftItem={singleCraftItem}></CraftItemCard>)
                        }
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;