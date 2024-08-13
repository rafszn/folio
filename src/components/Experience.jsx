import { EXPERIENCES } from "../constants";
import SingleExperience from "./SingleExperience";

const Experience = () => {
  return (
    <div className="experience">
      <h1>My Experience</h1>

      {EXPERIENCES.map((experience, index) => (
        <div key={index}>
          <SingleExperience experience={experience} index={index} />
        </div>
      ))}
    </div>
  );
};
export default Experience;
