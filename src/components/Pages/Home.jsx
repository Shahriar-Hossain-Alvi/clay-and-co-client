import { useLoaderData } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import CraftItemCard from "./ArtsAndCrafts/CraftItemCard";
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from "../Providers/AuthProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBannerSlider from "./HomeBannerSlider";



const Home = () => {
    const allCraftItems = useLoaderData();

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center mt-40">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    // slider settings
    var settings = {
        dots: true,
        infinite: true,
        // className: "center",
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToScroll: 1,
        speed: 1000,
        slidesToShow: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto">
                <div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {
                                allCraftItems.map(singleCraftItem => <HomeBannerSlider key={singleCraftItem._id} singleCraftItem={singleCraftItem}></HomeBannerSlider>)
                            }
                        </Slider>
                    </div>
                </div>

                <div className="my-20 App">

                    <h3 className="font-bold text-2xl text-center font-rubic mb-8 block">
                        <Typewriter
                            delaySpeed={2000}
                            deleteSpeed={100}
                            loop={5}
                            typeSpeed={100}
                            words={[
                                'Discover Our Ceramics and  Pottery items'
                            ]} />
                    </h3>


                    {/* Craft Item Cards */}
                    <div className="grid grid-cols-2 gap-6">
                        {
                            allCraftItems.slice(0, 6).map(singleCraftItem => <CraftItemCard key={singleCraftItem._id} singleCraftItem={singleCraftItem}></CraftItemCard>)
                        }
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;