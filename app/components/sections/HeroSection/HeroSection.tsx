import Button from "../../Button/Button";
import ComputerIcon from "../../icons/ComputerIcon";
import Typography from "../../Typography/Typography";

const HeroSection = () => {
  return (
    <div className="flex-column mx-auto flex max-w-6xl justify-between px-4 sm:px-6 md:px-8">
      <div className="flex flex-col justify-center">
        <Typography as="h1" className="pb-2 text-xs">
          Frontend Developer
        </Typography>
        <Typography as="h2" className="mb-14 text-4xl">
          Developing great experiences for web using modern technologies
        </Typography>
        <Button color="primary" className="w-fit">
          Read blog posts
        </Button>
      </div>
      <div>
        <ComputerIcon />
      </div>
    </div>
  );
};

export default HeroSection;
