import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import { useCartStore } from "../../../store/cart-store";
import { ProductCardInterface } from "../../../types/types";
import { Icons } from "../../icons";

const ProductCard: React.FC<ProductCardInterface> = ({
  id,
  title,
  image,
  description,
  price,
  rating,
  totalReviews,
}) => {
  const { addToCart } = useCartStore();

  const addToCartHandler = () => {
    addToCart({
      id,
      quantity: 1,
    });
  };

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
        <Button
          color="success"
          variant="flat"
          fullWidth
          onClick={addToCartHandler}
        >
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
                <Icons.star className="fill-yellow-500 text-yellow-500" />
              ) : (
                <Icons.star className="fill-default-200 text-default-200" />
              )}
            </li>
          ))}
      </ul>
      <p className="pl-2 pr-1 text-foreground-500 text-small">4.7</p>
      <span className="text-foreground-500 text-small">({totalReviews})</span>
    </div>
  );
};
