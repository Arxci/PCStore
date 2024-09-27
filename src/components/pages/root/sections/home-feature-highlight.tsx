import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import { Icons } from "../../../icons";
import { PageSection } from "../../../layout/page-section";
import { BundleCard } from "../../../ui/cards/bundle-card";
import { PageHeader } from "../../../layout/page-header";
import { FeatureCard } from "../../../ui/cards/feature-card";

const bundles = [
  {
    id: 0,
    heading: "AMD Ryzen 9000 Series",
    subHeading:
      "Unlock the full potential of your PC with AI-ready AMD Ryzen™ processors. Bring the speed of gaming to every element of your rig with built-in AI acceleration and enhanced AI capabilities for productivity and content creation.",
    href: "#",
    image:
      "https://nzxt.com/assets/cms/34299/1722385718-100-amd-9000-series-amd-ryzen-close-up-lg-bg.png?auto=format&fit=max&h=900&w=1375",
    ctaLabel: "Learn More",
  },
  {
    id: 1,
    heading: "PC gaming just got hassle-free.",
    subHeading:
      "Get a high-performance gaming PC for as low as $59/mo. Cancel at any time.",
    href: "#",
    image:
      "https://nzxt.com/assets/cms/34299/1717610484-flex-promo-banner-2-bg-lg.png?auto=format&fit=max&h=900&w=1375",
    ctaLabel: "Subscribe",
  },
  {
    id: 2,
    heading: "AMD Game Bundles",
    subHeading:
      "Shop AMD Ryzen™ processors, AMD Radeon™ RX Series graphics cards or AMD configured systems and receive both Unknown 9 Awakening™ and Space Marine for free!\nMust be 18+. For full Terms & Conditions: www.amdrewards.com/terms.",
    href: "#",
    image:
      "https://nzxt.com/assets/cms/34299/1722621552-amd-game-bundle-promo-banner-bg-lg.png?auto=format&fit=max&h=900&w=1375",
    ctaLabel: "Learn More",
  },
];

const features = [
  {
    id: 0,
    icon: <Icons.gamepad className="w-8 h-8" />,
    heading: "Gaming",
    subHeading:
      "Whether you want to play popular games, get eye-watering visuals, or hit peak FPS, our Prebuilts got you covered from mid-range to top-of-the-line GPUs and CPUs.",
    href: "#",
    ctaLabel: "Shop Player: One",
    className: "lg:col-span-1 md:col-span-1 sm:col-span-1",
  },
  {
    id: 1,
    icon: <Icons.headset className="w-8 h-8" />,
    heading: "Streaming",
    subHeading:
      "Ready to go live with your stream? We offer powerful CPUs, GPUs, and plenty capacity and performance so you can play and stream without taking a performance hit.",
    href: "#",
    ctaLabel: "Shop Player: Two",
    className: "lg:col-span-1 md:col-span-1 sm:col-span-1",
  },
  {
    id: 2,
    icon: <Icons.wand className="w-8 h-8" />,
    heading: "Creating",
    subHeading:
      "Multitask like a pro with maxed out performance parts in our newest cases, allowing you to tackle more applications and increase your workflow. Our gaming PCs go beyond gaming.",
    href: "#",
    ctaLabel: "Shop Player: Three",
    className: "lg:col-span-1 md:col-span-2 sm:col-span-1",
  },
  {
    id: 3,
    className: "lg:col-span-3 md:col-span-2 sm:col-span-1",
    customCard: (
      <div className="grid md:grid-cols-2 gap-6">
        <FeatureCard
          body={
            <>
              <h3 className="text-2xl font-bold mb-4">Performance</h3>
              <p className="text-default-500">
                The Player PCs are a series of prebuilt gaming desktops with
                three models increasing in performance. The best way to figure
                out which PC suits your needs is to determine your performance
                and settings needs.
              </p>
            </>
          }
          footer={
            <Image
              isBlurred
              src="https://nzxt.com/assets/cms/34299/1677913954-prebuilt-category-performance-primary.png?auto=format&fit=max&h=900&w=672"
              alt="Player PCs"
            />
          }
        />
        <FeatureCard
          body={
            <>
              <h3 className="text-2xl font-bold mb-4">Latest Components</h3>
              <p className="text-default-500">
                Save time sourcing parts—we've done it for you. Player PCs have
                the best of previous and current gen chipsets and graphics
                cards.
              </p>
            </>
          }
          footer={
            <Image
              isBlurred
              src="https://nzxt.com/assets/cms/34299/1677913547-prebuilt-category-latest-components-primary.png?auto=format&fit=max&h=900&w=672"
              alt="Player PCs"
            />
          }
        />
      </div>
    ),
  },
];

const HomeFeatureHighlight = () => {
  return (
    <div className="bg-foreground-200 dark:bg-foreground-50 ">
      <PageSection>
        <ul className="space-y-6 my-8">
          {bundles.map((bundle) => (
            <li key={bundle.id}>
              <BundleCard {...bundle} />
            </li>
          ))}
        </ul>
        <PageHeader
          heading="Choosing the Right PC"
          subHeading="Wondering how to choose a gaming PC? There are a few things to
            consider when buying a gaming PC."
          classNames={{ wrapper: "mt-4 mb-16" }}
        />
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {features.map((feature) => (
            <li key={feature.id} className={feature.className}>
              {feature.customCard ? (
                feature.customCard
              ) : (
                <FeatureCard
                  heading={<>{feature.icon}</>}
                  body={
                    <>
                      <h3 className="text-2xl font-bold mb-4">
                        {feature.heading}
                      </h3>
                      <p className="text-default-500">{feature.subHeading}</p>
                    </>
                  }
                  footer={
                    <Button
                      as={Link}
                      href={feature.href}
                      variant="light"
                      className="w-full"
                      color="success"
                      size="lg"
                    >
                      {feature.ctaLabel}
                    </Button>
                  }
                />
              )}
            </li>
          ))}
        </ul>
      </PageSection>
    </div>
  );
};

export { HomeFeatureHighlight };
