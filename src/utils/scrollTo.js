export const scrollTo = (id) => {
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({ behavior: "smooth" });
      console.log(element.scrollIntoView({ behavior: "smooth" }))
    }
  };