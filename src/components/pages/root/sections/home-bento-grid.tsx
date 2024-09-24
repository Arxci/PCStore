import { Image } from "@nextui-org/react";
import { Icons } from "../../../icons";
import { PageSection } from "../../../layout/page-section";

const HomeBentoGrid = () => {
  return (
    <div className="bg-foreground-200 dark:bg-foreground-50 ">
      <PageSection>
        <div className="mt-20 mb-24 text-center">
          <h2 className="text-4xl sm:text-5xl pt-10 mb-3 font-medium">
            Choosing the Right PC
          </h2>
          <p className="text-foreground-800 dark:text-foreground-500 text-medium">
            Wondering how to choose a gaming PC? There are a few things to
            consider when buying a gaming PC.
          </p>
        </div>
      </PageSection>
    </div>
  );
};

export { HomeBentoGrid };
