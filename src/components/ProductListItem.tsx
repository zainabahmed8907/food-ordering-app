import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../constants/Colors";
import { Product } from "../types";

export type ProductListProps = {
  product: Product;
};

const defaultProductImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";

  
export default function ProductListItem({ product }: ProductListProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || defaultProductImage }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.light.tint,
  },
  image: {
    width: "90%",
    aspectRatio: 1,
  },
});
