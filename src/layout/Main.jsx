import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect,useState } from "react";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { setScroll } from "../features/appSlice/appSlice";

const Main = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollTop)
      dispatch(setScroll(window.pageYOffset))
      if (scrollTop > 802) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
