import { IoClose } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup &&  (
      <div className="fixed top-0 left-0 h-screen w-screen bg-black/50 z-[999] backdrop-blur-sm">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md w-full max-w-xs sm:max-w-md lg:max-w-lg">
        {/* header section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg sm:text-xl">Book Your Trip</h1>
          </div>
          <div>
            <IoClose className="text-xl cursor-pointer" onClick={() => setOrderPopup(false)} />
          </div>
        </div>
        {/* Body section */}
        <div className="mt-4">
          <input type="text" placeholder="Name" className="w-full rounded-full border-gray-300 px-2 py-1 mb-4" />
          <input type="email" placeholder="Email" className="w-full rounded-full border-gray-300 px-2 py-1 mb-4" />
          <input type="text" placeholder="Address" className="w-full rounded-full border-gray-300 px-2 py-1 mb-4" />
          <div className="flex items-center justify-center">
            <button className="btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
    
      )}
    </>
  );
};

export default Popup;
