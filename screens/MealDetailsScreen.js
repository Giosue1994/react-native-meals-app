import { useContext, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { favoritesActions } from "../store/redux/favorites";

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  // const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const ids = useSelector((state) => state.favorites.ids);
  const dispatch = useDispatch();

  const mealIsFavorite = ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // removeFavorite(mealId);
      dispatch(favoritesActions.removeFavorite(mealId));
    } else {
      // addFavorite(mealId);
      dispatch(favoritesActions.addFavorite(mealId));
    }
  }

  useLayoutEffect(() => {
    // const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({
      // title: mealTitle,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return <MealDetails meal={meal} />;
}

const styles = StyleSheet.create({});
