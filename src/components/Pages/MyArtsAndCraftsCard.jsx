import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { useState } from "react";

const MyArtsAndCraftsCard = ({ myItem }) => {
    // const [refetchLoading, setRefetchLoading] = useState(false);
    const [ArtsAndCrafts, setArtsAndCrafts] = useState(myItem);

    const { _id, itemName, customization, photoURL, price, rating, stockStatus } = ArtsAndCrafts;

    const handleDeleteButton = id => {
        fetch(`https://clay-and-co-server.vercel.app/craftItem/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "Deleted",
                        title: "Item deleted from the list",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                setTimeout(() => {
                    location.reload();
                }, 1500);
            })
    }


    return (
        <div>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 border border-primaryColor p-5 rounded-2xl gap-4'>
                    {/* Item image */}
                    <div className='rounded-2xl shadow-2xl flex justify-center'>
                        <img className='w-52 h-52 rounded-2xl' src={photoURL} alt={`photo of ${itemName}`} />
                    </div>

                    {/* Item details */}
                    <div className='lg:col-span-2 flex flex-col'>
                        <div className='grow flex flex-col justify-center'>
                            <h2 className='text-2xl font-bold uppercase text-secondaryColor font-rubic text-center mb-3'>{itemName}</h2>
                            <div className="flex justify-evenly">
                                <div>
                                    <p className='text-xl font-semibold mb-2'>Price: ${price}</p>
                                    <p className='flex items-center gap-1 text-lg font-medium text-secondaryColor mb-2'>Rating: {rating}  <FaStar className='text-primaryColor'></FaStar></p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold mb-2'>Customization: {customization}</p>
                                    <p className='text-xl font-semibold mb-2'>Stock Status: {stockStatus}</p>
                                </div>
                            </div>


                        </div>
                        <div className="flex justify-center gap-4">
                            <Link to="/updatePage">
                                <button className="btn bg-primaryColor text-white font-rubic font-bold text-lg hover:bg-rose-800">Update</button>
                            </Link>
                            <button onClick={() => handleDeleteButton(_id)} className="btn bg-primaryColor text-white font-rubic font-bold text-lg hover:bg-rose-800">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MyArtsAndCraftsCard.propTypes = {
    myItem: PropTypes.object.isRequired
}

export default MyArtsAndCraftsCard;