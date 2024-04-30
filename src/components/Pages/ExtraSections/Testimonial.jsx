import user1 from "../../../assets/images/user1.jpg";
import user2 from "../../../assets/images/user2.jpg";
import user3 from "../../../assets/images/user3.png";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    // slider settings
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <div className="mb-10">
            <h2 className="font-bold text-2xl text-center font-rubic">TESTIMONIALS</h2>
            <h1 className="text-3xl text-center font-rubic">Our Customers <span className="font-bold text-primaryColor">Are Saying?</span></h1>

            <Slider {...settings}>

                {/* customer 1 */}
                <div className="px-5">
                    {/* user image */}
                    <div className="flex justify-center mb-3">
                        <img className="w-20 h-20" src={user1} />
                    </div>

                    {/* user details */}
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-lg font-medium italic">Customer service is great. I was searching & found exactly what I wanted, was delivered quickly. Very good transaction. Fast shipping. Great quality products and I am planning to buy it in bulk order.</p>

                        <h2 className="font-rubic font-bold text-xl">Elic Semules</h2>

                        <div className="flex gap-1 text-orange-600">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                </div>

                {/* customer 1 */}
                <div className="px-5">
                    {/* user image */}
                    <div className="flex justify-center mb-3">
                        <img className="w-20 h-20" src={user2} />
                    </div>

                    {/* user details */}
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-lg font-medium italic">I realized after I sent in my order that I had ordered a larger quantity than I needed. I emailed and received a quick response, adjustment to my order and a refund. Product was shipped out in a timely manner. Clay & Co. is great!</p>

                        <h2 className="font-rubic font-bold text-xl">Alex Albert Belle</h2>

                        <div className="flex gap-1 text-orange-600">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                </div>

                {/* customer 3 */}
                <div className="px-5">
                    {/* user image */}
                    <div className="flex justify-center mb-3">
                        <img className="w-20 h-20" src={user3} />
                    </div>

                    {/* user details */}
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-lg font-medium italic">The culture is the best at Clay & Co. You can tell that they truly care about the happiness of their employees. It is a really relaxed and calm environment and their quality of product is always best. I refer them for the future.</p>

                        <h2 className="font-rubic font-bold text-xl">Michal Wincent</h2>

                        <div className="flex gap-1 text-orange-600">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </div>
                    </div>
                </div>
            </Slider>

        </div>
    );
};

export default Testimonial;