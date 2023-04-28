import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import StoryPage from "../pages/StoryPage";
import Stories from "../pages/Stories";
import Wedding from "../pages/stories/Wedding";
import Birthday from "../pages/stories/Birthday";
import Product from "../pages/stories/Product";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/stories",
          element: <Stories/>,
        },
        {
          path: "/stories/wedding",
          element: <Wedding/>,
        },
        {
          path: "/stories/birthday",
          element: <Birthday/>,
        },
        {
          path: "/stories/product",
          element: <Product/>,
        },
        {
          path: "/story/:slug",
          element: <StoryPage />,
        },
     
    
      ],
    },
  
  ]);

export default routes;