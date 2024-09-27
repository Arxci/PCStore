import { PageSection } from "../../../layout/page-section";

const HomeTestimonials = () => {
  return (
    <div className="bg-foreground-200 dark:bg-foreground-50">
      <PageSection className="pt-20">
        <div className="bg-success-400 dark:bg-success py-14 px-8 rounded-lg text-black flex items-center flex-col text-center space-y-4">
          <h2 className="font-bold text-3xl">What Others Say</h2>
          <div className="max-w-xl">
            <blockquote className="font-medium">
              "As PC business owners, we like to see companies that have{" "}
              <strong className="italic">quality customer service</strong>,{" "}
              <strong className="italic">good build quality</strong>, and{" "}
              <strong className="italic">everything else</strong>. NZXT has
              always been on our shortlist for those."
            </blockquote>
            <span className="font-bold ">-Toasty Bros</span>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export { HomeTestimonials };
