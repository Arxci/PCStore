import { motion } from "framer-motion";

import { HeroHighlight, Highlight } from "../../../ui/hero-highlight";
import { PageSection } from "../../../layout/page-section";
import { Button } from "@nextui-org/react";

const HomeHero = () => {
  return (
    <HeroHighlight>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-foreground"
      >
        <PageSection className="text-4xl sm:text-6xl lg:text-7xl px-4  font-bold text-center">
          <div>
            <span className="text-medium font-normal text-foreground-500">
              NZXT PLAYER PC
            </span>
            <h1>POWERFULLY PREBUILT </h1>
            <Highlight className="text-lg sm:text-3xl lg:text-4xl text-foreground">
              We curate. We build. You play.
            </Highlight>
          </div>
          <div className="gap-2 flex flex-col sm:flex-row mt-10 justify-center">
            <Button
              href="/shop"
              className="w-full  sm:w-1/3"
              variant="light"
              color="success"
            >
              Contact
            </Button>
            <Button
              href="/shop"
              className="w-full sm:w-1/3"
              variant="shadow"
              color="success"
            >
              Shop Now
            </Button>
          </div>
        </PageSection>
      </motion.div>
    </HeroHighlight>
  );
};

export { HomeHero };
