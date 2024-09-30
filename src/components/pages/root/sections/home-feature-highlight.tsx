import { Button, Image, Link } from "@nextui-org/react";

import { PageSection } from "../../../layout/page-section";
import { BundleCard } from "../../../ui/cards/bundle-card";
import { PageHeader } from "../../../layout/page-header";
import { FeatureCard } from "../../../ui/cards/feature-card";

import { Icons } from "../../../icons";

const bundles = [
  <li key={0}>
    <BundleCard
      heading="AMD Ryzen 9000 Series"
      subHeading="Unlock the full potential of your PC with AI-ready AMD Ryzen™ processors. Bring the speed of gaming to every element of your rig with built-in AI acceleration and enhanced AI capabilities for productivity and content creation."
      href="#"
      image="https://nzxt.com/assets/cms/34299/1722385718-100-amd-9000-series-amd-ryzen-close-up-lg-bg.png?auto=format&fit=max&h=900&w=1375"
      ctaLabel="Learn More"
    />
  </li>,
  <li key={1}>
    <BundleCard
      heading="PC gaming just got hassle-free."
      subHeading="Get a high-performance gaming PC for as low as $59/mo. Cancel at any time."
      href="#"
      image="https://nzxt.com/assets/cms/34299/1717610484-flex-promo-banner-2-bg-lg.png?auto=format&fit=max&h=900&w=1375"
      ctaLabel="Subscribe"
    />
  </li>,
  <li key={2}>
    <BundleCard
      heading="AMD Game Bundles"
      subHeading="Shop AMD Ryzen™ processors, AMD Radeon™ RX Series graphics cards or AMD configured systems and receive both Unknown 9 Awakening™ and Space Marine for free!\nMust be 18+. For full Terms & Conditions: www.amdrewards.com/terms."
      href="#"
      image="https://nzxt.com/assets/cms/34299/1722621552-amd-game-bundle-promo-banner-bg-lg.png?auto=format&fit=max&h=900&w=1375"
      ctaLabel="Learn More"
    />
  </li>,
];

const features = [
  <li key={0}>
    <FeatureCard
      heading={<Icons.gamepad className="w-8 h-8" />}
      body={
        <>
          <h3 className="text-2xl font-bold mb-4">Gaming</h3>
          <p className="text-default-500">
            Whether you want to play popular games, get eye-watering visuals, or
            hit peak FPS, our Prebuilts got you covered from mid-range to
            top-of-the-line GPUs and CPUs.
          </p>
        </>
      }
      footer={
        <Button
          as={Link}
          href="#"
          variant="light"
          className="w-full"
          color="success"
          size="lg"
        >
          Shop Player: One
        </Button>
      }
    />
  </li>,
  <li key={1}>
    <FeatureCard
      heading={<Icons.headset className="w-8 h-8" />}
      body={
        <>
          <h3 className="text-2xl font-bold mb-4">Streaming</h3>
          <p className="text-default-500">
            Ready to go live with your stream? We offer powerful CPUs, GPUs, and
            plenty capacity and performance so you can play and stream without
            taking a performance hit.
          </p>
        </>
      }
      footer={
        <Button
          as={Link}
          href="#"
          variant="light"
          className="w-full"
          color="success"
          size="lg"
        >
          Shop Player: Two
        </Button>
      }
    />
  </li>,
  <li key={2} className="lg:col-span-1 md:col-span-2 sm:col-span-1">
    <FeatureCard
      heading={<Icons.wand className="w-8 h-8" />}
      body={
        <>
          <h3 className="text-2xl font-bold mb-4">Creating</h3>
          <p className="text-default-500">
            Multitask like a pro with maxed out performance parts in our newest
            cases, allowing you to tackle more applications and increase your
            workflow. Our gaming PCs go beyond gaming.
          </p>
        </>
      }
      footer={
        <Button
          as={Link}
          href="#"
          variant="light"
          className="w-full"
          color="success"
          size="lg"
        >
          Shop Player: Three
        </Button>
      }
    />
  </li>,
  <li
    key={3}
    className="grid md:grid-cols-2 gap-6 lg:col-span-3 md:col-span-2 sm:col-span-1"
  >
    <FeatureCard
      body={
        <>
          <h3 className="text-2xl font-bold mb-4">Performance</h3>
          <p className="text-default-500">
            The Player PCs are a series of prebuilt gaming desktops with three
            models increasing in performance. The best way to figure out which
            PC suits your needs is to determine your performance and settings
            needs.
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
            Save time sourcing parts—we've done it for you. Player PCs have the
            best of previous and current gen chipsets and graphics cards.
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
  </li>,
];

const HomeFeatureHighlight = () => {
  return (
    <div className="bg-foreground-200 dark:bg-foreground-50 ">
      <PageSection>
        <ul className="space-y-6 my-8">{bundles}</ul>
        <PageHeader
          heading="Choosing the Right PC"
          subHeading="Wondering how to choose a gaming PC? There are a few things to
            consider when buying a gaming PC."
          classNames={{ wrapper: "mt-4 mb-14" }}
        />
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {features}
        </ul>
      </PageSection>
    </div>
  );
};

export { HomeFeatureHighlight };
