import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);

  const favoritesMeals = MEALS.filter((meal) => {
    return ids.includes(meal.id);
  });

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorites yet!</Text>
      </View>
    );
  }

  return <MealsList items={favoritesMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
