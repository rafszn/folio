import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Break from "./components/Break";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { motion } from "framer-motion";

const App = () => {
  const [loading, setLoading] = useState(true);
  const sleep = async function () {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  };

  useEffect(() => {
    async function run() {
      await sleep();
      setLoading(false);
    }
    run();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <motion.main
        id="home"
        className="app"
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <NavigationBar />
        <Hero />
        <Break />
        <About />
        <Skills />
        <Projects />
      </motion.main>
    </div>
  );
};
export default App;
