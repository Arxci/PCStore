import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Skeleton,
} from "@nextui-org/react";

const ProductCardLoading = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <Skeleton className="rounded-lg w-full h-full p-0">
          <div className="h-auto aspect-square w-full rounded-lg bg-secondary" />
        </Skeleton>
      </CardHeader>
      <CardBody className="pb-2 px-6">
        <div className="flex pb-2 items-center gap-2">
          <Skeleton className="w-full rounded-lg">
            <div className="h-4 w-full rounded-lg bg-secondary" />
          </Skeleton>
          <Skeleton className="w-20 rounded-lg p-0">
            <div className="h-4 w-full rounded-lg bg-secondary" />
          </Skeleton>
        </div>
        <Skeleton className="w-full rounded-lg mb-2">
          <div className="h-4 w-full rounded-lg bg-secondary" />
        </Skeleton>
        <Skeleton className="w-2/4 rounded-lg mb-2">
          <div className="h-4 w-full rounded-lg bg-secondary" />
        </Skeleton>
      </CardBody>
      <CardFooter className="px-6">
        <Skeleton className="w-full rounded-xl">
          <div className="h-10 w-full rounded-xl bg-secondary" />
        </Skeleton>
      </CardFooter>
    </Card>
  );
};

export { ProductCardLoading };
