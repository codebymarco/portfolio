import "../../styles/fullpagenavbar.css";
import { motion } from "framer-motion";

const AnimationPageOne = () => {
  return (
    <motion.div
      className="anime-page-one"
      initial={{ opacity: 0, backgroundColor: '#fff' }}
      animate={{ opacity: 1, backgroundColor: '#fff' }}
      exit={{ opacity: 0, backgroundColor: '#000' }}
      transition={{ duration: 1.5 }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        MARCO RAMCHARAN
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        DEVELOPER
      </motion.h2>
    </motion.div>
  );
};

export default AnimationPageOne;
