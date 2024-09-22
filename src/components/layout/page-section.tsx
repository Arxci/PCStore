import { cn } from "../../lib/utils";

const PageSection = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn("max-w-[1200px] px-6 w-full py-4 mx-auto", className)}
    >
      {children}
    </section>
  );
};

export { PageSection };
