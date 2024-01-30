import React from "react"

function Hero() {
  const [priceValue, setPriceValue] = React.useState(40)
  return (
    <div className="bg-black/20 h-full">
        <div className="h-full flex justify-center items-center p-4 bg-primary/10 ">
          <div className="container grid grid-cols-1 gap-4">

            {/* text content section */}
            <div className="text-white">
              <p data-aos="fade-up">Our packeges</p>
              <p data-aos="fade-up" className="font-bold text-3xl">Search Your Destination</p>
            </div>
             {/* form section */}
             <div data-aos="fade-up" data-aos-delay="300"
             className="space-y-4 bg-white rounded-md p-4 relative">
              <div className="grid grid-cols-1 sm:grid-cols-3 py-3 gap-4 items-center">
                <div>
                  <label htmlFor="destination " className="opacity-70">Search your Destination</label>
                  <input type="text" name="destination" id="destination" placeholder="Dubai" className="w-full bg-gray-100 
                  my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2" />
                </div>
                <div>
                  <label htmlFor="destination " className="opacity-70">Date</label>
                  <input type="date" name="destination" id="destination"  className="w-full !placeholder-slate-400 bg-gray-100 
                  my-2  focus:outline-primary focus:outline outline-1 rounded-full p-2" />
                </div>

                <div>
                  <label htmlFor="destination " className="opacity-70 block">
                    <div className="w-full flex justify-between items-center">
                      <p>Max price</p>
                      <p className="font-bold text-xl">${priceValue}</p>
                    </div>
                  </label>
                  <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">

                  <input type="range" name="destination" id="destination"  className="appearance-none w-full  bg-gradient-to-r h-2
                  from-primary to-secondary my-2 rounded-full"
                  min="150" max="1000" value={priceValue} step="10" onChange={(e) => setPriceValue(e.target.value)}/>
                 </div>
                </div>                
                </div> 

            {/* button section */}
               <button className="btn2">Search Now</button>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Hero