import { PROJECTS } from "../constants";
import Project from "./Project";
const Projects = () => {
 
  return (
    <section className="projects">
      <div className="wrapper">
        <h2 id="projects">My Projects</h2>

        {PROJECTS.map((project, index) => {
          return (
            <div key={index}>
              <Project index={index} project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
