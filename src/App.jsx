import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Router from "./components/router/Router";
import AnimationPageOne from "./components/components/AnimationPageOne";
import useTranslationStore from "./hooks/useTranslationStore"

const App = () => {
  const [show, setShow] = useState(false);
  const { setLanguage } = useTranslationStore();

  useEffect(() => {
    // Initialize the language on app load
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);

    // Hide the AnimationPageOne component after 5 seconds
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3600); // 3 seconds for AnimationPageOne + 2 seconds visible

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {show ? (
          <AnimationPageOne key="animation-page-one" />
        ) : (
          <motion.div
            key="router"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Router />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
