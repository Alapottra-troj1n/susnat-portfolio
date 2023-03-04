import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect,useState } from "react";

const Main = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollTop)
      if (scrollTop > 309) {
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
    <div>
      <Navbar scrolled={scrolled} />
      <Outlet />
    </div>
  );
};

export default Main;
