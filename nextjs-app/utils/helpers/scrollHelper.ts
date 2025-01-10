export const scrollToSection = (targetId: string) => {
    window.scrollTo({
      top: document.getElementById(targetId)?.offsetTop,
      behavior: "smooth",
    });
  };