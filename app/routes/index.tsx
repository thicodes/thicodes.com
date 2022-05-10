import { Link } from "@remix-run/react";
import Button from "~/components/Button/Button";
import HeroSection from "~/components/HeroSection/HeroSection";
import Typography from "~/components/Typography/Typography";

export default function Index() {
  return (
    <div>
      <HeroSection />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Typography as="h1" className="text-xs">
          Frontend Developer
        </Typography>
        <Typography as="h2" className="text-4xl">
          Developing great experiences for web using modern technologies
        </Typography>
        <Button variant="primary">asd</Button>
      </main>
    </div>
  );
}
