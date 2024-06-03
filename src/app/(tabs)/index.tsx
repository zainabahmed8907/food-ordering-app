import {  ScrollView } from "react-native";

import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function MenuScreen() {

  return (
    <ScrollView>
     <ProductListItem product={products[0]}/>
     <ProductListItem product={products[3]}/>

    </ScrollView>
  );
}

