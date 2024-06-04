import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../types";

const CardProviderContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
});

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
};
export const CardProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    //if already exists, then increment
    const newItem: CartItem = {
      product,
      size,
      quantity: 1,
      product_id: product.id,
      id: "1",
    };
    setItems((prev) => [...prev, newItem]);
  };

  // updateQuantity
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    setItems(
      items
        .map((item) =>
          item.id !== itemId
            ? item
            : { ...item, quantity: item.quantity + amount }
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CardProviderContext.Provider value={{ items, addItem, updateQuantity }}>
      {children}
    </CardProviderContext.Provider>
  );
};

export const useCart = () => useContext(CardProviderContext);
