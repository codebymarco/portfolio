import "../../styles/fullpagenavbar.css";
import { useEffect } from "react";

const AnimationPageOne = () => {
  useEffect(() => {
    // Set the body height and overflow when the component mounts
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";

    // Cleanup function to reset the body overflow when the component unmounts
    return () => {
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="anime-page-one">
      <h1>MARCO RAMCHARAN</h1>
      <h2>DEVELOPER</h2>
    </div>
  );
};

export default AnimationPageOne;
