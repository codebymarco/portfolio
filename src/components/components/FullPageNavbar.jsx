import { useNavigate } from "react-router-dom";
import "../../styles/fullpagenavbar.css";
import { useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const FullPageNavbar = ({ close }) => {
  const navigate = useNavigate();

  const route = (path) => {
    navigate(path);
    close();
  };

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
    <div className="fullpagenavbar">
      <IoClose className="close-icon" onClick={close} />
      <div onClick={() => route(`/`)}>home</div>
      <div onClick={() => route(`/about`)}>about</div>
      <div onClick={() => route(`/contact`)}>contact</div>
      <div onClick={() => route(`/skills`)}>skills</div>
      <div onClick={() => route(`/apps`)}>projects</div>
    </div>
  );
};

export default FullPageNavbar;
