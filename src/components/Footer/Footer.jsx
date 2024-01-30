import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerlogo from "../../assets/images/footerlogo.png";
import footervid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const Footerlinks = [
  { id:1,
    title: "Home",
    link: "/",
  },
  { id:2,
    title: "About",
    link: "/about",
  },
  { id:3,
    title: "Best Places",
    link: "/best-place",
  },
  { id:4,
    title: "Blogs",
    link: "/blogs",
  },
];

function Footer() {
  return (
    <footer className="py-10 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
      >
        <source src={footervid} type="video/mp4" />
      </video>
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
          <div className="py-8 px-4">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img
                src={footerlogo}
                alt="footer logo"
                className="max-h-[60px]"
              />
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              facere ab hic accusamus omnis dolor voluptatibus illo, tempore eum
              tenetur.
            </p>
            <br />
            <div className="flex items-center gap-3 mt-3">
              <FaLocationArrow/>
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt/>
              <p>+123 456 789</p>
            </div>

            {/* social handles */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl"/>
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl"/>
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl"/>
                </a>
              </div>
            </div>
          </div>
          {/* footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {/* first cal link */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl text-black font-bold mb-4">Important Links</h1>
                <ul>
                  {
                    Footerlinks.map(({id,title,link}) =>(
                      <li key={id} className="cursor-pointer hover:translate-x-1 duration-100 hover:!text-primary space-x-1 text-gray-700">
                        <Link to={link} onClick={() => {
                          window.scrollTo(0,0)
                        }}>
                          <span className="mr-1">⮚</span>
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
                 
              </div>
            </div>

            {/* second cal link */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl text-black font-bold mb-4">Important Links</h1>
                <ul>
                  {
                    Footerlinks.map(({id,title,link}) =>(
                      <li key={id} className="cursor-pointer hover:translate-x-1 duration-100 hover:!text-primary space-x-1 text-gray-700">
                        <Link to={link} onClick={() => {
                          window.scrollTo(0,0)
                        }}>
                          <span className="mr-1">⮚</span>
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
                 
              </div>
            </div>

            {/* third cal link */}
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl text-black font-bold mb-4">Important Links</h1>
                <ul>
                  {
                    Footerlinks.map(({id,title,link}) =>(
                      <li key={id} className="cursor-pointer hover:translate-x-1 duration-100 hover:!text-primary space-x-1 text-gray-700">
                        <Link to={link} onClick={() => {
                          window.scrollTo(0,0)
                        }}>
                          <span className="mr-1">⮚</span>
                          <span>{title}</span>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
                 
              </div>
            </div>

          </div>
        </div>
        {/* footer copyright Section */}
        <div>
          <div className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
          @copyright 2024 All rights reserved || Made with ❤️ by Tgo
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
