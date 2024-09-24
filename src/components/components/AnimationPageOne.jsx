import "../../styles/fullpagenavbar.css";
import { motion } from "framer-motion";

const AnimationPageOne = () => {
  return (
    <motion.div
      className="anime-page-one"
      initial={{ opacity: 0, backgroundColor: "#0d0d0d" }}
      animate={{ opacity: 1, backgroundColor: "#0d0d0d" }}
      exit={{ opacity: 0, backgroundColor: "#0d0d0d" }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0 }}
      >
        MARCO RAMCHARAN
      </motion.h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0 }}
        >
          SOFTWARE
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0 }}
        >
          DEVELOPER
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default AnimationPageOne;
