import { useNavigate } from "react-router-dom";
import "../../styles/fullpagenavbar.css";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="fullpagenavbar"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <IoClose className="close-icon" onClick={close} />
      <motion.div variants={itemVariants} onClick={() => route(`/`)}>
        home
      </motion.div>
      <motion.div variants={itemVariants} onClick={() => route(`/about`)}>
        about
      </motion.div>
      <motion.div variants={itemVariants} onClick={() => route(`/contact`)}>
        contact
      </motion.div>
      <motion.div variants={itemVariants} onClick={() => route(`/skills`)}>
        skills
      </motion.div>
      <motion.div variants={itemVariants} onClick={() => route(`/apps`)}>
        projects
      </motion.div>
      <motion.div variants={itemVariants} onClick={() => route(`/career`)}>
        career
      </motion.div>
    </motion.div>
  );
};

export default FullPageNavbar;
