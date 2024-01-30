import main from '../assets/video/main.mp4'
import Hero from '../components/Hero'
import Banner from '../components/banner/Banner'
import BannerImg from '../components/bannerimg/BannerImg'

import Blogs from './Blogs'
import Banner2 from '../assets/images/banner2.jpg'
import Banner1 from '../assets/images/banner1.jpg'
import Testimonial from '../components/testimonial/Testimonial'
import React from 'react'
import Popup from '../components/Popup/Popup'
import Places from '../components/places/Places'



function Home() {
  const [orderPopup, setOrderPopup] =React.useState(false)

  const handleOrderPopup =() => {
    setOrderPopup(!orderPopup);
  };
  return (
   <>
    <div>
      <div className='relative h-[700px]'>

        <video 
        autoPlay 
        loop 
        muted
        className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
        >
          <source src={main} type='video/mp4' />

        </video>
        <Hero/>
      </div>
      <Places handleOrderPopup={handleOrderPopup}/>
      <BannerImg img={Banner1} />
      <Blogs/>
      <Banner />
      <BannerImg img={Banner2}/>
      <Testimonial/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
   </>
  )
}

export default Home