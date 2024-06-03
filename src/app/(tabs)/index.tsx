import { ScrollView, FlatList, SafeAreaView } from "react-native";

import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function MenuScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductListItem product={item} />}
          numColumns={2}
          scrollEnabled
          contentContainerStyle={{ gap: 10, padding: 20 }}
          columnWrapperStyle={{ gap: 10 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
