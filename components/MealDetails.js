import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import List from "./List";

export default function MealDetails({ meal }) {
  return (
    <ScrollView style={styles.screen}>
      <View>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
        <View>
          <Text style={styles.title}>{meal.title}</Text>
          <Text style={styles.description}>
            <Text style={styles.duration}>{meal.duration}m</Text>{" "}
            {meal.complexity} {meal.affordability}
          </Text>
          <View>
            <List title="Ingredients" items={meal.ingredients} />
            <List title="Steps" items={meal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  description: {
    marginTop: 10,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
  },
  duration: {
    textTransform: "lowercase",
  },
});
