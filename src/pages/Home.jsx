import Brands from "../components/Home/Brands";
import Introduction from "../components/Home/Introduction";
import RecentStories from "../components/Home/RecentStories";
import Testimonials from "../components/Home/Testimonials";


const Home = () => {
  
  return (
   <div>
    <Introduction/>
    <RecentStories/>
    <Brands/>
    <Testimonials/>
   </div>
  );
};

export default Home;
