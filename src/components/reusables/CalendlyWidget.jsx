import React, { useEffect } from "react";

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
      className="calendly-inline-widget h-full w-full font-primary"
      data-url="https://calendly.com/stan-visuals01/30min?primary_color=ffa520"
    />
  );
};

export default CalendlyWidget;