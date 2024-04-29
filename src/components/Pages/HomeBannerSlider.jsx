import PropTypes from 'prop-types';
import "./HomeBanneer.css"

const HomeBannerSlider = ({ singleCraftItem }) => {
    const { itemName, photoURL, shortDescription } = singleCraftItem;

    return (
        <div className='relative h-96 w-96'>
            <img className='w-full h-full' src={photoURL} alt="" />
            <div className='bg-[#000] absolute w-full h-full top-0 left-0 opacity-50 flex flex-col justify-end px-3 pb-3'>
                <h2 className='text-white font-bold font-rubic text-2xl'>{itemName}</h2>
                <p className='text-white font-semibold text-lg'>{shortDescription}</p>
            </div>
        </div>
    );
};

HomeBannerSlider.propTypes = {
    singleCraftItem: PropTypes.object.isRequired
}

export default HomeBannerSlider;