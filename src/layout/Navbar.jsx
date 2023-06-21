import { Link, useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";
import { scrollTo } from "../utils/scrollTo";

const Navbar = ({ scrolled }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const targetPaths = ["/stories", "/packages"];

  return (
    <header className={`fixed w-full  ${
      scrolled || targetPaths.some((path) => location.pathname.includes(path))
        ? "drop-shadow-md bg-white text-slate-700"
        : "lg:text-white bg-white lg:bg-inherit"
    } z-50`}>
      <div
        className={`px-5 py-4 max-w-6xl mx-auto font-display flex justify-between items-center list-none `}
      >
        <div>
          {scrolled || targetPaths.some((path) => location.pathname.includes(path)) ? (
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
          <Link to="/packages">
            <li>Packages</li>
          </Link>
          <span className='cursor-pointer' onClick={()=> scrollTo('calltoaction', navigate)}>
            <li>Contact</li>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
