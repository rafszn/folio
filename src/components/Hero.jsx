import { MdArrowRightAlt } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoMdHand } from "react-icons/io";
import Button from "./Button";
import { FaX } from "react-icons/fa6";
import "animate.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="image-wrapper">
          <div className="wrapper">
            <span className="animate__animated animate__wobble">
              <IoMdHand />
            </span>
            <img src="/assets/images/Raphael.jpg" alt="" />
          </div>
        </div>

        <div className="content">
          <h2>
            <span> Hello, Raphael here.</span> I&apos;m a{" "}
            <span>full-stack engineer</span> with <span>3 years</span> of
            experience. I enjoy building <i>sites & apps. </i> My focus is{" "}
            <span className="underline">Node & React.js</span>
          </h2>
        </div>

        <div className="buttons">
          <Button
            icon={<MdArrowRightAlt />}
            text={"Contact me here"}
            pulse={{
              animation: "pulse 1s infinite",
              animationDelay: "4s",
            }}
            bg={"bg-[#1b1c1d]"}
            textColor={"text-white"}
            href={"https://wa.me/2347082201180"}
          />
          <Button
            icon={<CiSaveDown2 color="black" />}
            text={"Download CV"}
            bg={"bg-white"}
            textColor={"text-black"}
          />
          <Button icon={<FaGithub color="black" />} bg={"bg-white"} 
          href={"https://www.github.com/rafszn"}/>
          <Button icon={<FaX color="black" />} bg={"bg-white"} />
        </div>
      </div>
    </section>
  );
};
export default Hero;
