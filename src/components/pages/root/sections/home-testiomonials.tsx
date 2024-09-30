import { PageSection } from "../../../layout/page-section";
import { TestimonialCard } from "../../../ui/cards/testiomonial-card";

const testimonials = [
  <TestimonialCard
    key={0}
    name="Michael R"
    heading="A BEAST"
    image="https://i.pravatar.cc/150?u=a042581f4e29026704d"
    date={new Date(2023, 12, 27)}
    review="This beast runs everything I throw at it with ease. I see myself purchasing from NZXT in the future!"
    rating={5}
  />,
  <TestimonialCard
    key={1}
    name="Lee P"
    heading="A perfect gaming computer purchase"
    image="https://i.pravatar.cc/150?u=a04258114e29026702d"
    date={new Date(2023, 11, 22)}
    review="It arrived carefully packaged and was very easy to set up. It worked perfectly from the get-go."
    rating={5}
  />,
  <div key={2} className="md:col-span-2 lg:col-span-1 flex justify-center">
    <TestimonialCard
      name="Marc C"
      heading="I am extremely happy."
      image="https://i.pravatar.cc/150?u=a042581f4e29026024d"
      date={new Date(2023, 11, 13)}
      review="I did not want to build a PC, and NZXT's Player: One, Two and Three configurations were perfect for figuring out what I wanted and what I could afford."
      rating={5}
    />
  </div>,
];

const HomeTestimonials = () => {
  return (
    <div className="bg-foreground-200 dark:bg-foreground-50 ">
      <PageSection className="pt-10">
        <div className="bg-success-400 dark:bg-success py-14 px-8 rounded-lg text-black flex items-center flex-col text-center space-y-4 shadow-lg shadow-success/40">
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
        <ul className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {testimonials}
        </ul>
      </PageSection>
    </div>
  );
};

export { HomeTestimonials };
