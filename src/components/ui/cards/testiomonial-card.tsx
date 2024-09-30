import {
  Card,
  CardBody,
  CardHeader,
  Avatar,
  CardFooter,
} from "@nextui-org/react";

import { format } from "date-fns";
import { Reviews } from "../reviews";
import { cn } from "../../../lib/utils";

type TestimonialType = {
  image: string;
  name: string;
  heading: string;
  review: string;
  rating: number;
  date: Date;
  classNames?: {
    card?: string;
    header?: string;
    body?: string;
    footer?: string;
  };
};

const TestimonialCard = ({
  image,
  name,
  heading,
  review,
  rating,
  date,
  classNames,
}: TestimonialType) => {
  return (
    <Card className={cn("p-6 h-full", classNames?.card)}>
      <CardHeader className={cn("gap-2", classNames?.header)}>
        <div className="flex items-center space-x-4">
          <Avatar src={image} />
          <p className="text-white font-medium">{name}</p>
        </div>
      </CardHeader>
      <CardBody className={cn("space-y-2", classNames?.body)}>
        <h3 className="font-bold text-large">{heading}</h3>
        <p className="text-default-500 text-medium">{review}</p>
      </CardBody>
      <CardFooter className={classNames?.footer}>
        <Reviews
          rating={rating}
          display={{ totalReviews: false, rating: false }}
        />
        <time
          className="ml-auto text-default-500 text-small"
          dateTime={date.toISOString()}
        >
          {format(date, "MM/dd/yyyy")}
        </time>
      </CardFooter>
    </Card>
  );
};

export { TestimonialCard };
