import ComputerIcon from "../icons/ComputerIcon";
import GithubIcon from "../icons/GithubIcon";
import SunIcon from "../icons/SunIcon";

const HeroSection = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-wrap justify-between px-4 sm:px-6 md:px-8">
      <div>
        <h2 className="text-lg">Frontend Developer</h2>
        <p>Developing great experiences for web using modern technologies</p>
      </div>
      <div>
        <ComputerIcon />
      </div>
      <div>
        <SunIcon />
        <GithubIcon />
      </div>
    </div>
  );
};

export default HeroSection;
