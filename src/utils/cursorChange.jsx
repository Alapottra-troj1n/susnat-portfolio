const cursorChange = function(color){
    document.documentElement.style.setProperty(
      "--cursor-color",
      `rgba(${color})`
    );
    document.documentElement.style.setProperty(
      "--cursor-bg-color",
      `rgba(${color}, 0.5)`
    );
  };

  export default cursorChange;