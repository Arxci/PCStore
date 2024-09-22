import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export interface ProductCardInterface {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  totalReviews: number;
}

const ProductCard: React.FC<ProductCardInterface> = ({
  title,
  image,
  description,
  price,
  rating,
  totalReviews,
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center justify-center">
        <div className="h-auto aspect-square w-full ">
          <Image
            src={image}
            alt="Photo of a computer"
            className="hover:scale-105 w-full h-full"
            isBlurred
            isZoomed
          />
        </div>
      </CardHeader>
      <CardBody className="px-6 pb-2">
        <div className="flex pb-2 items-center gap-2">
          <h3 className="text-large font-bold truncate text-nowrap max-w-full overflow-hidden whitespace-nowrap">
            {title}
          </h3>
          <span className="ml-auto text-foreground-500">{`$${price}.00`}</span>
        </div>
        <p className="text-foreground-500 pb-2 line-clamp-2">{description}</p>
        <ProductReviews totalReviews={totalReviews} rating={rating} />
      </CardBody>
      <CardFooter className="px-6">
        <Button color="success" variant="flat" fullWidth>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ProductCard };

const ProductReviews = ({
  totalReviews,
  rating,
}: {
  totalReviews: number;
  rating: number;
}) => {
  return (
    <div className="flex items-center">
      <ul className="flex items-center">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              {index + 1 < rating ? (
                <svg
                  className="w-4 h-4 text-success me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-default me-1 dark:text-default"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              )}
            </li>
          ))}
      </ul>
      <p className="pl-2 pr-1 text-foreground-500 text-small">4.7</p>
      <span className="text-foreground-500 text-small">({totalReviews})</span>
    </div>
  );
};
