import { useEffect } from "react";
import "../../styles/onlyfans.css";

const OnlyFans = () => {
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
    <div className="onlyfans">
      <h1>L &#x1F602; L</h1>
    </div>
  );
};

export default OnlyFans;
