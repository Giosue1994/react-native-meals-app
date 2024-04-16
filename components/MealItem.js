import { Pressable, StyleSheet, Text, View, Image } from "react-native";

export default function MealItem({ item }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image
            style={styles.mealImage}
            source={{
              uri: item.imageUrl,
            }}
          />
          <Text>{item.title}</Text>
          <Text>
            {item.duration} {item.complexity} {item.affordability}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
    resizeMode: "contain",
  },
});
