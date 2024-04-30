import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import {  useLoaderData } from "react-router-dom";
import MyArtsAndCraftsCard from "./MyArtsAndCraftsCard";

const MyArtsCrafts = () => {
    const { user } = useContext(AuthContext);
    const allCraftItems = useLoaderData();

    //get user info
    const loggedInUserName = user.displayName;
    const loggedInUserEmail = user.email;

    //get items
    const myAddedItems = allCraftItems.filter(item => item.email == loggedInUserEmail)


    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto my-10">
                <h2 className="text-2xl font-bold font-rubic text-center">This is the list of items that is added by : {loggedInUserName}</h2>
                <h3 className="text-xl font-semibold font-rubic text-center">Email Address: {loggedInUserEmail}</h3>


                {/* my added items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 lg:px-0">
                    {
                        myAddedItems.map(myItem => <MyArtsAndCraftsCard key={myItem._id} myItem={myItem}></MyArtsAndCraftsCard>)
                    }
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyArtsCrafts;