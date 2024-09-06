import { skills } from "./icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IoMdArrowForward } from "react-icons/io";


const Project = ({ project, index }) => {
  let rowreverse = "";
  let rotate = -3;
  let imagePosition = "left-[9rem]";

  if (index % 2 === 0) {
    rotate = 3;
    rowreverse = "flex-row-reverse";
    imagePosition = "left-[-9rem]";
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scale,
        opacity: scrollYProgress,
      }}
    >
      <article className={rowreverse}>
        <div className="content">
          <h3>{project.title}</h3>
          <img src={project.img} className="rounded-md" alt="" />
          <p className="mt-3">{project.description}</p>

          <i className="tools">tools</i>
          <div className="stack">
            {project.stack.map((item, index) => {
              return (
                <span key={index}>
                  {item}
                  {skills[item]}
                </span>
              );
            })}
          </div>
          <a href={project.demoLink} target="_blank" className="flex items-center justify-center mt-4 font-medium text-[0.74rem] text-gray-500 gap-2 px-3 py-1 border border-gray-300 bg-gray-50 rounded-lg">
            Explore
            <IoMdArrowForward size={20}/>
          </a>
        </div>

        <div className="imageWrapper">
          <motion.img
            src={project.img}
            alt=""
            className={imagePosition}
            initial={{ opacity: 0.9 }}
            whileHover={{
              translateX: 3,
              translateY: 5,
              rotateZ: rotate,
              scale: 1.05,
              opacity: 1,
            }}
          />
        </div>
      </article>
    </motion.div>
  );
};
export default Project;
