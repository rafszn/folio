import { FaGraduationCap } from "react-icons/fa6";
const SingleExperience = ({ experience, index }) => {
  let rowreverse = "";
  let justifyEnd = "";

  if (index % 2 === 0) {
    rowreverse = "row-reverse";
    justifyEnd = "flex-end";
  }

  return (
    <div
      className={`wrapper`}
      style={{
        flexDirection: rowreverse,
      }}
    >
      <div className="content">
        <h2>{experience.title}</h2>
        <h4>{experience.state}</h4>
        <p>{experience.description}</p>
         <i>{experience.year}</i>
      </div>
      <div className="mid">
        <div className="svgWrapper">
          <FaGraduationCap size={15} />
        </div>
        <div className="line">
          <div />
        </div>
      </div>
      <div
        className={`year`}
        style={{
          justifyContent: justifyEnd,
        }}
      >
        <i>{experience.year}</i>
      </div>
    </div>
  );
};
export default SingleExperience;
