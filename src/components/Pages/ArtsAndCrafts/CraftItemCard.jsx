import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa6";
import { Zoom } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

const CraftItemCard = ({ singleCraftItem }) => {
    const { _id, itemName, photoURL, price, rating } = singleCraftItem;
    return (
        <Zoom>
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
                    <Link to={`/craftItemCard/${_id}`}>
                        <button className="btn btn-block bg-primaryColor text-white font-rubic font-bold text-lg hover:bg-rose-800">View Details</button>
                    </Link>
                </div>
            </div>
        </Zoom>

    );
};

CraftItemCard.propTypes = {
    singleCraftItem: PropTypes.object.isRequired
}

export default CraftItemCard;