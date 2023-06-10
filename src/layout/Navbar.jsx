import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";
import ReactDOM from "react-dom";
const Navbar = ({ scrolled }) => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const scrollToIntro = (id) => {
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({ behavior: "smooth" });
      console.log(element.scrollIntoView({ behavior: "smooth" }))
    }
  };

  return (
    <header>
      <div
        className={`px-5   lg:px-36 py-4 font-display flex justify-between items-center fixed w-full  ${
          scrolled || location.pathname.includes("/stories")
            ? "drop-shadow-md bg-white text-slate-700"
            : "lg:text-white bg-white lg:bg-inherit"
        } list-none z-50`}
      >
        <div className="gap-5 text-xl hidden md:flex">
          <span className="cursor-pointer" onClick={()=> scrollToIntro('testomonials')}>
            <li>Testomonials</li>
          </span>
          <span className='cursor-pointer' onClick={()=>scrollToIntro('aboutme')}>
            <li>About Me</li>
          </span>
        </div>
        <div>
          {scrolled || location.pathname.includes("/stories") ? (
            <>
              <Link to="/">
                <img src="/logo.svg" className="w-16 md:w-20" alt="" />
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <img
                  src="/logo-white.svg"
                  className="hidden lg:block w-16 md:w-20"
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  src="/logo.svg"
                  className="w-16 md:w-20 lg:hidden"
                  alt=""
                />
              </Link>
            </>
          )}
        </div>
        <div className="flex md:hidden z-40 cursor-pointer">
          {navOpen ? (
            <VscClose
              className="text-3xl"
              onClick={() => setNavOpen(!navOpen)}
            />
          ) : (
            <VscMenu
              className="text-2xl"
              onClick={() => setNavOpen(!navOpen)}
            />
          )}
        </div>
        <div
          className={`${
            navOpen ? "flex " : "hidden"
          } flex-col absolute right-0 md:hidden gap-5 top-5 bg-white px-10 pb-12 pt-14 border rounded-md text-sm items-center`}
        >
          <span className="cursor-pointer" onClick={()=> scrollToIntro('testomonials')}>
            <li>Testomonials</li>
          </span>
          <span className='cursor-pointer' onClick={()=> scrollToIntro('aboutme')}>
            <li>About Me</li>
          </span>
          <Link to="/stories">
            <li>Stories</li>
          </Link>
          <span className='cursor-pointer' onClick={()=> scrollToIntro('contact')}>
            <li>Contact</li>
          </span>
        </div>
        <div className="gap-5 text-xl hidden md:flex">
          <Link to="/stories">
            <li>Stories</li>
          </Link>
          <span className='cursor-pointer' onClick={()=> scrollToIntro('contact')}>
            <li>Contact</li>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
