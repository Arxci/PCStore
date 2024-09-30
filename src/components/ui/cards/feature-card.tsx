import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const FeatureCard = ({
  heading,
  body,
  footer,
}: {
  heading?: React.ReactNode | JSX.Element;
  body?: React.ReactNode | JSX.Element;
  footer?: React.ReactNode | JSX.Element;
}) => {
  return (
    <Card className="flex flex-col items-center p-10 h-full">
      {heading && <CardHeader className="max-w-max pb-0">{heading}</CardHeader>}
      {body && (
        <CardBody className="max-w-max text-center flex-1 pb-0">
          {body}
        </CardBody>
      )}
      {footer && (
        <CardFooter className=" overflow-visible">{footer}</CardFooter>
      )}
    </Card>
  );
};

export { FeatureCard };
