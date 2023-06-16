export const scrollTo = (id, navigate) => {
  const element = document.getElementById(id);
  if (element) {
    return element.scrollIntoView({ behavior: "smooth" });
  }

  navigate('/')
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 0);
};
