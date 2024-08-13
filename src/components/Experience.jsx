import { FaGraduationCap } from "react-icons/fa6";
import { EXPERIENCES } from "../constants";
import SingleExperience from "./SingleExperience";

const Experience = () => {
  return (
    <div className="experience">
      <h2 id="experience">My Experience</h2>

      {EXPERIENCES.map((experience, index) => (
        <div key={index}>
          <SingleExperience  experience={experience} index={index}/>
        </div>
      ))}

      <div className="wrapper">
        <div className="content">
          <h2>Graduated bootcamp</h2>
          <h4>Awka, Anambra</h4>
          <p>
            i graduated after six months of studying, immediately found a job as
            a frontend developer.
          </p>
        </div>
        <div className="mid">
          <div className="svgWrapper">
            <FaGraduationCap size={15} />
          </div>
          <div className="line">
            <div />
          </div>
        </div>
        <div className="year">
          <i>2022 - present</i>
        </div>
      </div>
    </div>
  );
};
export default Experience;
