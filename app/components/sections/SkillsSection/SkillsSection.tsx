import { useState } from "react";
import Typography from "~/components/Typography/Typography";

const SKILLS = {
  react: {
    name: "React",
    source: `
      query {
        User() {
          name
          age
          hobbies
      }
    }
    `,
    render: `
      lalal
    `,
  },
};

const SkillsSection = () => {
  const [playground, set] = useState(PLAYGROUND.react);

  return (
    <div className="flex">
      <div>
        <Typography>Skills</Typography>
      </div>
      <div>adasd</div>
    </div>
  );
};

export default SkillsSection;
