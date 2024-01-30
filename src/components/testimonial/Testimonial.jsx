import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonial1 from '../../assets/images/testimonial1.jpg'
import testimonial2 from '../../assets/images/testimonial2.jpg'
import testimonial3 from '../../assets/images/testimonial3.jpg'

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    image: testimonial1
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    image: testimonial2
  },
  {
    id: 3,
    name: "Bob Johnson",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
    image: testimonial3
  }
];


const Testimonial = () => {
  var setting ={
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase:"linear",
      pauseOnHover:true,
      pauseOnFocus:true,

      responsive: [
        {
          breakpoint: 10000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

  }
  return (
    <div className="py-10">
      <div className="container">
        {/* header secton */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">Testimonial</h1>
          <p className="text-xs text-gray-400">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>
        {/* testimonial section */}
       <Slider {...setting}>
        {
         TestimonialData.map(({id,name,text,image}) => {
           return(
            <div key={id} className="my-6">
             <div className="flex flex-col justify-center items-center gap-6 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative">
              <img src={image} alt="testimonial images" className="rounded-full block mx-auto" />
              <h1 className="text-2xl font-bold ">{name}</h1>
              <p className="text-gray-500 text-sm ">{text}</p>
              <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
             </div>
            </div>
           )

         })
        }

       </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
