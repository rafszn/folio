import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Break from "./components/Break";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { motion } from "framer-motion";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const sleep = async function () {
    await new Promise((resolve) => setTimeout(resolve, 2500));
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
        initial={{ opacity: 0,translateX: "-100px" }}
        animate={{ opacity: 1,translateX: 0,}}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <NavigationBar />
        <Hero />
        <Break />
        <About />
        <Skills />
        <Projects />
        <Experience/>
        <Contact/>
        <Footer/>
      </motion.main>
    </div>
  );
};
export default App;
