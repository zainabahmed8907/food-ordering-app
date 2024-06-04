import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p: any) => p?.id == id);

  return (
    <View>
      <Stack.Screen options={{ title: "Details" }} />
      <Text>{product?.name}</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
