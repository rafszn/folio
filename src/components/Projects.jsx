import { PROJECTS } from "../constants";
import Project from "./Project";
const Projects = () => {
  return (
    <section className="projects">
      <div className="wrapper">
        <h2 id="projects">My Works</h2>

        {PROJECTS.map((project, index) => {
          return (
            <div key={index}>
              <Project index={index} project={project} />
            </div>
          );
        })}

        <p id="experience"></p>
      </div>
    </section>
  );
};
export default Projects;
