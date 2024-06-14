import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import Colors from "../constants/Colors";
import { Product } from "../types";
import { Link, useSegments } from "expo-router";

export type ProductListProps = {
  product: Product;
};

export const defaultProductImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png";

export default function ProductListItem({ product }: ProductListProps) {
  const segments=useSegments();

  return (
    <Link href={`${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image || defaultProductImage }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: "50%",
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
  imageContainer: {
    width: "100%",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
