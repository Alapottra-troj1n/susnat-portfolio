import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";

const Navbar = ({scrolled}) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header>
      <div className={`px-5 lg:px-36 py-4 font-display  flex justify-between items-center fixed w-full ${scrolled ? 'drop-shadow-md': ''} bg-white list-none z-50`}>
        <div className="gap-5 text-xl hidden md:flex">
          <Link to='/'>
            <li>Testomonials</li>
          </Link>
          <Link to='/'>
            <li>About Me</li>
          </Link>
        </div>
        <div>
          <Link to='/'><img src="/logo.svg" className=" w-16 md:w-20" alt="" /></Link>
        </div>
        <div className="flex md:hidden z-40">
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
          <Link to='/'>
            <li>Testomonials</li>
          </Link>
          <Link to='/'>
            <li>About Us</li>
          </Link>
          <Link to='/'>
            <li>Stories</li>
          </Link>
          <Link to='/'>
            <li>Contact</li>
          </Link>
        </div>
        <div className="gap-5 text-xl hidden md:flex">
          <Link to='/'>
            <li>Stories</li>
          </Link>
          <Link to='/'>
            <li>Contact</li>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
