import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";

const CardProviderContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number;
};
export const CardProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

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
  
  const addItem = (product: Product, size: CartItem["size"]) => {
    const existingItem = items.find(
      (item: CartItem) => item.product == product && item.size == size
    );
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }
    //if already exists, then increment
    const newItem: CartItem = {
      product,
      size,
      quantity: 1,
      product_id: product.id,
      id: randomUUID(),
    };
    setItems((prev) => [...prev, newItem]);
  };

  const total = items.reduce(
    (sum, item) => (sum += item.product.price * item.quantity),
    0
  );

  return (
    <CardProviderContext.Provider
      value={{ items, addItem, updateQuantity, total }}
    >
      {children}
    </CardProviderContext.Provider>
  );
};

export const useCart = () => useContext(CardProviderContext);
