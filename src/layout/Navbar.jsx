import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { scrollTo } from "../utils/scrollTo";

const Navbar = ({ scrolled }) => {
  const location = useLocation();

 

  return (
    <header>
      <div
        className={`px-5   lg:px-36 py-4 font-display flex justify-between items-center fixed w-full  ${
          scrolled || location.pathname.includes("/stories")
            ? "drop-shadow-md bg-white text-slate-700"
            : "lg:text-white bg-white lg:bg-inherit"
        } list-none z-50`}
      >
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
        <div className="gap-5 text-base lg:text-xl flex">
          <Link to="/stories">
            <li>Stories</li>
          </Link>
          <span className='cursor-pointer' onClick={()=> scrollTo('contact')}>
            <li>Contact</li>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
