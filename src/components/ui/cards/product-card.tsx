import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import { Reviews } from "../reviews";

import { useCartStore } from "../../../store/cart-store";
import { ProductCardType } from "../../../types/types";

const ProductCard: React.FC<ProductCardType> = ({
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
        <Reviews totalReviews={totalReviews} rating={rating} />
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
