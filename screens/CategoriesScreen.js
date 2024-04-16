import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function pressHandler(id) {
    navigation.navigate("Meals Overview", { categoryId: id });
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTile
          title={item.title}
          color={item.color}
          onPress={() => pressHandler(item.id)}
        />
      )}
      keyExtractor={({ id }) => id}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {},
});
