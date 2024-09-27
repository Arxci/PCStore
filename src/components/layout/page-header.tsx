import { cn } from "../../lib/utils";

type PageHeader = {
  heading: string;
  subHeading: string;
  classNames?: {
    heading?: string;
    subHeading?: string;
    wrapper?: string;
  };
};

const PageHeader = ({ heading, subHeading, classNames }: PageHeader) => {
  return (
    <div className={cn("max-w-xl mx-auto text-center", classNames?.wrapper)}>
      <h2
        className={cn(
          "text-4xl sm:text-5xl pt-10 mb-3 font-medium",
          classNames?.heading
        )}
      >
        {heading}
      </h2>
      <p
        className={cn(
          "text-foreground-800 dark:text-foreground-500 text-medium",
          classNames?.subHeading
        )}
      >
        {subHeading}
      </p>
    </div>
  );
};

export { PageHeader };
