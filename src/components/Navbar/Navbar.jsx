import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3} from "react-icons/hi";
import { useState } from "react";
import ResposiveMenu from './ResposiveMenu'

const DropdownLinks = [
 
  {
    name: "Our Services",
    link: "/#services",
  },
  {
      name: "Top Brands",
      link: "/#mobails_brands",
    },
    {
        name: "Location",
      link: "/#location",
    },
];
function Navbar({handleOrderPopup}) {

  const [showMenu, setShowMenu]=useState(false)
  const toggleMenu=() => {
    setShowMenu(!showMenu)
  }
  return (
    <>
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px]  hidden md:block">
            <div className="flex justify-between ">
              <p>20% off on next booking</p>
              <p>Mobile No. +91 123456789</p>
            </div>
          </div>
        </div>

        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* logo Section */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="logo" className="h-16" />
              </Link>
            </div>

            {/* Md to xl devices Navlink section */}
            <div className="hidden md:block">
              <ul className="flex gap-6 items-center">
                <li className="py-4">
                  <NavLink
                    to="/"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/blogs"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/places"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/about"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>

                {/* dropdown Section */}
                <li className="inline-block py-4 relative group cursor-pointer">
                  <div className="dropdown  flex items-center">
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2">
                    <ul>
                      {DropdownLinks.map((data) => {
                        return(

                        <li key={data.name}>
                          <a className=" inline-block w-full rounded-md p-2 hover:bg-primary/20" href={data.link}>
                            {data.name}</a>
                        </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
             
             {/* Book now button section */}
            <div className="flex items-center gap-4">
            <button onClick={()=> handleOrderPopup()} className="btn">Book Now</button>

            {/* mobail humburger menu */}
            <div className="mb:hidden block">
                {
                    showMenu ? (
                        <HiMenuAlt1
                        onClick={toggleMenu}
                        className="cursor-pointer transition-all"
                        size={30}
                         />
                    ) : (
                        <HiMenuAlt3 
                        onClick={toggleMenu}
                        className="cursor-pointer transition-all"
                        size={30}
                         />
                    )}
            </div>
            </div>
          </div>
        </div>
        <ResposiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
      </div>
    </>
  );
}

export default Navbar;
