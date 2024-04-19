import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ items }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <MealItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
});
