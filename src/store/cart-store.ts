import { create } from "zustand";
import { ProductCardInterface } from "../components/ui/product-card";

interface CartType extends ProductCardInterface {
  quantity: number;
}

export interface CartState {
  cart: CartType[];
  totalQuantity: number;
  addToCart: (product: CartType) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cart: [],
  totalQuantity: 0,
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      state.totalQuantity += product.quantity;

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          ),
        };
      }

      return { cart: [...state.cart, product] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  clearCart: () => set(() => ({ cart: [] })),
}));
