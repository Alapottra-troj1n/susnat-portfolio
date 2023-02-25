import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "./features/appSlice/appSlice";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(setLoading(false));
  }, []);

  return (
    <div>
      <AnimatedCursor
        innerSize={5}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        trailingSpeed={5}
        clickables={["li", "a", ".click", "button", "img", ".cursor-hover"]}
        outerStyle={{
          borderWidth: "1px",
          borderColor: "black",
          backgroundColor: "var(--cursor-bg-color)",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
      />
          <RouterProvider router={routes} />
    </div>
  );
}

export default App;
