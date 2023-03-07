import { useRef } from "react";
import Brands from "../components/Home/Brands";
import Contact from "../components/Home/Contact";
import Introduction from "../components/Home/Introduction";
import RecentStories from "../components/Home/RecentStories";
import Testimonials from "../components/Home/Testimonials";


const Home = () => {
  const appointment = useRef(null);

  return (
   <div>
    <Introduction appointment={appointment} />
    <RecentStories/>
    <Brands/>
    <Testimonials/>
    <Contact appointment={appointment}/>
   </div>
  );
};

export default Home;
