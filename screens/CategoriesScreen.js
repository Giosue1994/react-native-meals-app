import { StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen() {
  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryGridTile title={item.title} color={item.color} />
        )}
        keyExtractor={({ id }) => id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {},
});
