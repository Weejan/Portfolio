import { useEffect } from "react";
import Contact from "./components/contact";
import Header from "./components/header";
import Intro from "./components/intro";
import ProjectContainer from "./components/projectContainer";

export default function App() {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const target = event.target;
      if (
        target.tagName === "A" &&
        target.getAttribute("href").startsWith("#")
      ) {
        event.preventDefault();
        const targetId = target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
  return (
    <>
      <Header />
      <Intro />
      <ProjectContainer />
      <Contact />
    </>
  );
}
