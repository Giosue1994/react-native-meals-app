import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Pressed!");
  }

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => (
        <IconButton
          icon="star"
          color="white"
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

  return <MealDetails meal={meal} />;
}

const styles = StyleSheet.create({});
