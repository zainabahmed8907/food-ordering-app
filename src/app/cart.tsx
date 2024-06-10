import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useCart } from "../provider/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const Cart = () => {
  const { items,total } = useCart();

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
      <View style={{marginVertical:20}}>
        <Text style={{fontSize:20, fontWeight:"600"}}>Total: ${total}</Text>
      </View>

      <Button text="checkout"/>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
