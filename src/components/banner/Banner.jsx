import TravelImg from "../../assets/images/travelImage.png";
import { MdFlight, MdHotel  } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h[550px] bg-gray-100">
      <div className="min-h-[550px] flex justify-between items-center backdrop-blur-xl py-12 sm:py-0 ">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* images section */}
            <div data-aos>
              <img
                data-aos="flip-up"
                src={TravelImg}
                alt="travel images"
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] 
                    object-cover"
              />
            </div>
            {/* text content section */}
            <div>
              <h1 data-aos="fade-up" className="text-3xl font-bold sm:text-4xl">Explore all corners of the world with us</h1>
              <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Veritatis doloremque in mollitia dicta deleniti molestiae itaque
                nostrum
              </p>
              <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 "/>
                     <p>Flight</p>
                    </div>

                    <div className="flex items-center gap-4">
                    <MdHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 "/>
                     <p>Hotel</p>
                    </div>

                </div>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                    <FaWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 "/>
                     <p>Wi-Fi</p>
                    </div>

                    <div className="flex items-center gap-4">
                    <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100-100 "/>
                     <p>Foods</p>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
