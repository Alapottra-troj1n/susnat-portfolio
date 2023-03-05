import Brands from "../components/Home/Brands";
import Contact from "../components/Home/Contact";
import Introduction from "../components/Home/Introduction";
import RecentStories from "../components/Home/RecentStories";
import Testimonials from "../components/Home/Testimonials";


const Home = ({scrolled}) => {
  
  return (
   <div>
    <Introduction/>
    <RecentStories/>
    <Brands/>
    <Testimonials/>
    <Contact/>
   </div>
  );
};

export default Home;
