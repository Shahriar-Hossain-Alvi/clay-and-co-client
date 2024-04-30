import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import CraftItemCard from "./CraftItemCard";
import { JackInTheBox } from "react-awesome-reveal";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const AllArtsCrafts = () => {
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

            <div className="container mx-auto px-3 lg:px-0">
                <JackInTheBox>
                    <h2 className="text-center font-rubic font-bold text-2xl mt-5">Here is our all the collections</h2>
                </JackInTheBox>

                <div>
                    <div className="my-10">
                        {/* Craft Item Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {
                                allCraftItems.map(singleCraftItem => <CraftItemCard key={singleCraftItem._id} singleCraftItem={singleCraftItem}></CraftItemCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AllArtsCrafts;