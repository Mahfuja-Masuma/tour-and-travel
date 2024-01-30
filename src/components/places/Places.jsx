import PlacesCard from "./PlacesCard";
import Img1 from '../../assets/places/boat.jpg'
import Img2 from '../../assets/places/tajmahal.jpg'
import Img3 from '../../assets/places/underwater.jpg'
import Img4 from '../../assets/places/Sydney.jpg'
import Img5 from '../../assets/places/Los Angeles.jpg'
import Img6 from '../../assets/places/Los Vegas.jpg'

const PlaceDate =[
    {
        img:Img1,
        title:"Boat Tour",
        location:"USA",
        Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:100,
        type:"Cultural Relax",
    },
    {
        img:Img2,
        title:"Taj Mahal",
        location:"India",
        Description:"The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the India city of Agre.",
        price:6700,
        type:"Cultural Relax",
    },
    {
        img:Img3,
        title:"Under Water",
        location:"USA",
        Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:100,
        type:"Cultural Relax",
    },
    {
        img:Img4,
        title:"Sydney",
        location:"US",
        Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price:100,
        type:"Cultural Relax",
    },
    {
        img:Img5,
        title:"Los Angles",
        location:"United State",
        Description:"Los Angeles is a sprawling Southern California city and the center of the nation’s film and television industry.",
        price:8900,
        type:"Cultural Relax",
    },
    {
        img:Img6,
        title:"Los vegas",
        location:"California",
        Description:"Las Vegas, often known simply as Vegas, is the 25th-most populous city in the United States.",
        price:7809,
        type:"Cultural Relax",
    },

]



const Places = ({handleOrderPopup}) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places To Visite
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                PlaceDate.map((item,index) => (
                    <PlacesCard handleOrderPopup={handleOrderPopup} key={index}{...item}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Places
