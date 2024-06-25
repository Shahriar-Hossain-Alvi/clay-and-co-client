import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import CraftItemCard from "./CraftItemCard";
import { JackInTheBox } from "react-awesome-reveal";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useEffect, useState } from "react";

const AllArtsCrafts = () => {
    const allCraftItems = useLoaderData();
    const [allSubCategories, setAllSubCategories] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState('Show All');
    const [sortedItems, setSortedItems] = useState([]);

    const { loading } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://clay-and-co-server.vercel.app/subCategory`)
            .then(res => res.json())
            .then(data => {
                setAllSubCategories(data);
            })
    }, [])



    if (loading) {
        return <div className="flex justify-center mt-40">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    const handleSort = e => {
        const selected = e.target.value;
        setSelectedSubCategory(selected);
        const searchedItems = allCraftItems.filter(someItems => someItems.subCategory === selected
        );
        setSortedItems(searchedItems);
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto px-3 lg:px-0">
                <JackInTheBox>
                    <h2 className="text-center font-rubic font-bold text-2xl mt-5">Here is our all the collections</h2>
                </JackInTheBox>

                <div>
                    <div className="mt-5 text-center flex justify-center items-center gap-3">
                        <h2 className="text-lg font-rubic">Sort By:</h2>
                        <select onChange={handleSort} className="select border-primaryColor w-full max-w-xs font-rubic">
                            <option defaultValue>Show All</option>
                            {
                                allSubCategories.map((subCategory, idx) => <option key={idx}>{subCategory.subCategory}</option>)
                            }
                        </select>
                    </div>

                    <div className="my-10">
                        {/* Craft Item Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {selectedSubCategory === 'Show All' ?
                                allCraftItems.map(singleCraftItem => <CraftItemCard key={singleCraftItem._id} singleCraftItem={singleCraftItem}></CraftItemCard>)
                                :

                                sortedItems.map(singleSortedItems => <CraftItemCard key={singleSortedItems._id} singleCraftItem={singleSortedItems}></CraftItemCard>)
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