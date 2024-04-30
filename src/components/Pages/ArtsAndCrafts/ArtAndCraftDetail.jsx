import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { FaStar } from "react-icons/fa";

const ArtAndCraftDetail = () => {
    const singleDynamicCraftItem = useLoaderData();
    console.log(singleDynamicCraftItem);

    const { itemName, customization, photoURL, price, processingTime, rating, shortDescription, stockStatus, subCategory } = singleDynamicCraftItem;

    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto my-5">
                <div className="grid grid-cols-2 gap-8">
                    <div className="max-h-[500px]">
                        <img className="h-full w-full" src={photoURL} alt={`photo of ${itemName}`} />
                    </div>

                    <div className="flex flex-col justify-center">
                        {/* name. price, rating, description */}
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold font-rubic mb-4">{itemName}</h2>
                            <h3 className="font-bold text-lg mb-2">Price: ${price}</h3>
                            <h3 className="text-lg font-bold mb-4 flex items-center">
                                Rating: {rating}
                                <FaStar className="text-orange-600 ml-1"></FaStar>
                            </h3>
                            <p className="text-lg font-bold">About Item:
                                <span className="font-medium ml-1">
                                    {shortDescription}
                                </span>
                            </p>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold">More Info:</h1>

                            <div className="overflow-x-auto">
                                <table className="table">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td className="font-bold text-xl">Sub Category</td>
                                            <td className="font-medium text-xl">{subCategory} Days</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td className="font-bold text-xl">Processing Time</td>
                                            <td className="font-medium text-xl">{processingTime} Days</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td className="font-bold text-xl">Customization</td>
                                            <td className="font-medium text-xl">{customization}</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <td className="font-bold text-xl">Stock Status</td>
                                            <td className="font-medium text-xl">{stockStatus}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ArtAndCraftDetail;