import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function MealItem({ item }) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("MealDetails", { mealId: item.id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressed : null,
        ]}
        android_ripple={{ color: "#ccc", borderless: true }}
        onPress={pressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.mealImage} source={{ uri: item.imageUrl }} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.description}>
              <Text style={styles.duration}>{item.duration}m</Text>{" "}
              {item.complexity} {item.affordability}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 30,
    marginHorizontal: 30,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  mealImage: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  content: {
    padding: 15,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
  },
  duration: {
    textTransform: "lowercase",
  },
});
