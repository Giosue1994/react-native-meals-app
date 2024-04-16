import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({
      title: mealTitle,
    });
  }, []);

  const meal = MEALS.find((meal) => meal.id === mealId);

  return <MealDetails meal={meal} />;
}

const styles = StyleSheet.create({});
