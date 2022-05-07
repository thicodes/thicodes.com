import { Link } from "@remix-run/react";
import HeroSection from "~/components/HeroSection/HeroSection";
import Typography from "~/components/Typography/Typography";

export default function Index() {
  return (
    <div>
      <HeroSection />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Typography>asdasd</Typography>
      </main>
    </div>
  );
}
