import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import StoryPage from "../pages/StoryPage";


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
          path: "/story/:slug",
          element: <StoryPage />,
        },
    
      ],
    },
  
  ]);

export default routes;