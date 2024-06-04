import { useEffect, useState } from "react";
import Router from "./components/router/Router";
import AnimationPageOne from "./components/components/AnimationPageOne";

const App = () => {
  const [show, setShow] = useState(true);

  const hide = () => {
    setShow(false);
  };

  useEffect(() => {
    // Show the value for 2 seconds
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {show ? <AnimationPageOne /> : null}
      <Router />
    </div>
  );
};

export default App;
