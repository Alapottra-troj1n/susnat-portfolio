export const scrollTo = (id, navigate) => {
  const element = document.getElementById(id);
  if (element) {
    return element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  navigate("/");
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 0);
};
