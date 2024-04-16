import { StyleSheet, Text, View } from "react-native";

export default function List({ items, title }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.list}>
        {items.map((item) => (
          <View style={styles.itemContainer}>
            <Text key={item} style={styles.item}>
              {item}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
  },
  titleContainer: {
    borderBottomWidth: 2,
    borderColor: "#cea4a4",
    paddingVertical: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "#cea4a4",
  },
  list: {
    alignItems: "center",
  },
  itemContainer: {
    width: "100%",
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#cea4a4",
  },
  item: {
    textAlign: "center",
    color: "#3f2f25",
  },
});
