import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useCart } from "../provider/CartProvider";
import CartListItem from "../components/CartListItem";

const Cart = () => {
  const { items } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
