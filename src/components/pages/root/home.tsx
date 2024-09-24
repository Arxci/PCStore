import { HomeBentoGrid } from "./sections/home-bento-grid";
import { HomeHero } from "./sections/home-hero";
import { HomeShowcase } from "./sections/home-showcase";

export default function HomePage() {
  return (
    <div className="min-h-screen h-auto w-full flex flex-col">
      <HomeHero />
      <HomeShowcase />
      <HomeBentoGrid />
    </div>
  );
}
