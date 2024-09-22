import { Badge, Button } from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";

import { Icons } from "../icons";

import { useCartStore } from "../../store/cart-store";
import { useEffect, useState } from "react";

const CartButton = () => {
  const { cart, totalQuantity } = useCartStore();
  const [style, setStyle] = useState({ transform: `scale(1)` });
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1.1, 1],
      transition: { duration: 0.2 },
    });

    return () => {
      controls.stop();
    };
  }, [cart]);

  return (
    <div className="relative">
      <Button isIconOnly variant="faded" href="#" className=" z-10">
        <Icons.cart className="text-success" />
        <span className="sr-only">Add to cart</span>
      </Button>
      <motion.span
        animate={controls}
        className="absolute -top-1 -right-1 h-5 p-1 min-w-[1rem] max-w-[5rem] flex items-center justify-center rounded-full bg-success border border-success-50 text-background text-medium z-20    "
      >
        {totalQuantity}
      </motion.span>
    </div>
  );
};

export { CartButton };
