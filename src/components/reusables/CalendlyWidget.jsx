import React, { useEffect } from "react";
import cursorChange from "../../utils/cursorChange";

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget h-full w-full"
      data-url="https://calendly.com/stan-visuals01/30min?primary_color=ffa520"
    />
  );
};

export default CalendlyWidget;