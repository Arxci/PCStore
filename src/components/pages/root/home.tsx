import { HomeFeatureHighlight } from "./sections/home-feature-highlight";
import { HomeHero } from "./sections/home-hero";
import { HomeShowcase } from "./sections/home-showcase";
import { HomeTestimonials } from "./sections/home-testiomonials";

export default function HomePage() {
  return (
    <div className="min-h-screen h-auto w-full flex flex-col">
      <HomeHero />
      <HomeShowcase />
      <HomeFeatureHighlight />
      <HomeTestimonials />
    </div>
  );
}
