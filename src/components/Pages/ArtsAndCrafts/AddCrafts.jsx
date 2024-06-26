import { AuthContext } from "../../Providers/AuthProvider";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Swal from 'sweetalert2';
import { useContext } from "react";

const AddCrafts = () => {

    const { user } = useContext(AuthContext);

    const handleAddCrafts = e => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const photoURL = form.photoURL.value;
        const subCategory = form.subCategory.value;
        const shortDescription = form.shortDescription.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const email = form.email.value;
        const name = form.name.value;

        const newCraftItem = { itemName, photoURL, subCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, name }

        //send data to the server
        fetch('https://clay-and-co-server.vercel.app/craftItem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraftItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // sweet alert
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Your item is added to the database successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                form.reset();
            })

    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="mx-auto container my-10">
                <div className="mb-6">
                    <h2 className="text-center font-raleway text-2xl font-semibold mb-2">Add a New Craft</h2>

                    <p className="text-center text-lg font-medium px-3 md:px-0 lg:px-0">Try Adding your desired Arts and Crafts items using the form below. Its EASY!</p>
                </div>


                {/* Add Crafts Form */}
                <div className="px-3 lg:px-0">
                    <form className="space-y-3 shadow-2xl p-6 border rounded-2xl" onSubmit={handleAddCrafts}>
                        {/* name and photo url */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-8">
                            <label className="input input-bordered flex items-center gap-2">
                                Item Name:
                                <input name="itemName" type="text" className="grow" placeholder="Craft Item Name" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Photo URL:
                                <input name="photoURL" type="text" className="grow" placeholder="Link of your items photo" />
                            </label>
                        </div>


                        {/* sub category and short description */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-8">
                            <select name="subCategory" className="select select-bordered join-item" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Sub Category</option>
                                <option value="Clay-made pottery">Clay-made pottery</option>
                                <option value="Stoneware">Stoneware</option>
                                <option value="Porcelain">Porcelain</option>
                                <option value="Terra Cotta">Terra Cotta</option>
                                <option value="Ceramics & Architectural">Ceramics & Architectural</option>
                                <option value="Home decor pottery">Home decor pottery</option>
                            </select>

                            <label className="input input-bordered flex items-center gap-2">
                                Short Description:
                                <input name="shortDescription" type="text" className="grow" placeholder="Add a short description" />
                            </label>
                        </div>


                        {/* price and rating */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-8">
                            <label className="input input-bordered flex items-center gap-2">
                                Price:
                                <input name="price" type="text" className="grow" placeholder="Price of your item" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Rating:
                                <input name="rating" type="text" className="grow" placeholder="Current rating of your item" />
                            </label>
                        </div>


                        {/* customization and processing time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-8">
                            <select name="customization" className="select select-bordered join-item" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>customization</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>

                            <label className="input input-bordered flex items-center gap-2 h-20 md:h-12 lg:h-12">
                                Processing Time (Max Days):
                                <input name="processingTime" type="text" className="grow" placeholder="Item process time" />
                            </label>
                        </div>


                        {/* stock status and user email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-8">
                            <select name="stockStatus" className="select select-bordered join-item" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Stock Status</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>

                            <label className="input input-bordered flex items-center gap-2">
                                Your Email:
                                <input name="email" type="text" className="grow" placeholder="Enter your email" defaultValue={user?.email == null ? "Enter your email correctly" : user.email} />
                            </label>
                        </div>


                        {/* user name and button */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-8">
                            <label className="input input-bordered flex items-center gap-2">
                                Your Name:
                                <input name="name" type="text" className="grow" placeholder="Enter your Name" defaultValue={user ? user?.displayName : "Enter your name"} />
                            </label>

                            <input className="btn bg-primaryColor hover:bg-lime-700 text-white w-full" type="submit" value="Add" />
                        </div>
                    </form>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default AddCrafts;