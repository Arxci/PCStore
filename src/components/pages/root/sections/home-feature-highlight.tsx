import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { Icons } from "../../../icons";
import { PageSection } from "../../../layout/page-section";
import { BundleCard } from "../../../ui/cards/bundle-card";
import { PageHeader } from "../../../layout/page-header";

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
  },
  {
    id: 1,
    icon: <Icons.headset className="w-8 h-8" />,
    heading: "Streaming",
    subHeading:
      "Ready to go live with your stream? We offer powerful CPUs, GPUs, and plenty capacity and performance so you can play and stream without taking a performance hit.",
    href: "#",
    ctaLabel: "Shop Player: Two",
  },
  {
    id: 2,
    icon: <Icons.wand className="w-8 h-8" />,
    heading: "Creating",
    subHeading:
      "Multitask like a pro with maxed out performance parts in our newest cases, allowing you to tackle more applications and increase your workflow. Our gaming PCs go beyond gaming.",
    href: "#",
    ctaLabel: "Shop Player: Three",
    className: "md:col-span-2 lg:col-span-1",
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
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <li key={feature.id} className={feature.className}>
              <Card className="flex flex-col items-center p-10 h-full">
                <CardHeader className="max-w-max pb-0">
                  {feature.icon}
                </CardHeader>
                <CardBody className="max-w-max text-center flex-1">
                  <h3 className="text-2xl font-bold mb-4">{feature.heading}</h3>
                  <p className="text-default-500">{feature.subHeading}</p>
                </CardBody>
                <CardFooter className=" overflow-visible">
                  <Button
                    as={Link}
                    variant="shadow"
                    className="w-full"
                    color="success"
                  >
                    {feature.ctaLabel}
                  </Button>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </PageSection>
    </div>
  );
};

export { HomeFeatureHighlight };
