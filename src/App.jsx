import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "./features/appSlice/appSlice";
import LoadWrapper from "./components/wrappers/LoadWrapper";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(false));
  }, []);

  return (
    <div>
      <LoadWrapper>   <RouterProvider router={routes} /></LoadWrapper>
       
    </div>
  );
}

export default App;
