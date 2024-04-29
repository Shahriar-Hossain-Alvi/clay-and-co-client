import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa6";

const CraftItemCard = ({ singleCraftItem }) => {
    const { itemName, photoURL, price, rating } = singleCraftItem;
    return (
        <div className='grid grid-cols-3 border border-primaryColor p-5 rounded-2xl gap-4'>
            {/* Item image */}
            <div className='rounded-2xl shadow-2xl'>
                <img className='w-52 h-52 rounded-2xl' src={photoURL} alt={`photo of ${itemName}`} />
            </div>

            {/* Item details */}
            <div className='col-span-2 flex flex-col'>
                <div className='grow flex flex-col justify-center'>
                    <h2 className='text-2xl font-bold uppercase text-secondaryColor font-rubic mb-3'>{itemName}</h2>
                    <p className='text-xl font-semibold mb-2'>${price}</p>
                    <p className='flex items-center gap-1 text-lg font-medium text-secondaryColor mb-2'><FaStar className='text-primaryColor'></FaStar> {rating}</p>
                </div>
                <button className="btn btn-block bg-primaryColor text-white font-rubic font-bold text-lg">View Details</button>
            </div>
        </div>
    );
};

CraftItemCard.propTypes = {
    singleCraftItem: PropTypes.object.isRequired
}

export default CraftItemCard;