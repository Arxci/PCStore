import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";

import { BundleCardType } from "../../../types/types";

const BundleCard = ({
  image,
  heading,
  subHeading,
  href,
  ctaLabel,
}: BundleCardType) => {
  return (
    <Card className="h-auto min-h-[380px] sm:min-h-auto sm:h-[380px] relative">
      <div className="absolute w-full h-full">
        <Image
          src={image}
          alt={heading}
          isBlurred
          classNames={{
            img: "object-cover w-full h-full",
            wrapper: "h-full w-full !max-w-none",
          }}
        />
        <div className="absolute bg-black/20 dark:bg-black/40 w-full h-full z-20 top-0 left-0" />
      </div>
      <CardBody className="p-6 sm:px-20 sm:py-16 max-w-2xl  flex items-start justify-end sm:justify-center z-20">
        <h3 className="text-2xl text-success font-bold pb-4">{heading}</h3>
        <p className="text-default-300 dark:text-default-500 text-medium font-medium pb-6">
          {subHeading}
        </p>
        <Button
          as={Link}
          color="success"
          variant="ghost"
          href={href}
          className="w-full max-w-40"
          size="lg"
        >
          {ctaLabel}
        </Button>
      </CardBody>
    </Card>
  );
};

export { BundleCard };
