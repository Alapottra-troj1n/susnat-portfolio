import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "./features/appSlice/appSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(setLoading(false));
  }, []);

  return (
    <div>
          <RouterProvider router={routes} />
    </div>
  );
}

export default App;
