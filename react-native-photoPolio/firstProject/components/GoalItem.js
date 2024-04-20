import { Pressable, View, Text, StyleSheet } from "react-native";

function GoalItem(props) {
  console.log(props);

  return (
    <Pressable
      onPress={props.onDelete.bind(this, props.id)}
      android_ripple={{ color: "blue" }}
      style={styles.pContainer}
    >
      <View>
        <Text style={styles.textSize}>{props.item}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  pContainer: {
    backgroundColor: "red",
    height: 40,
    justifyContent: "center",
  },
  textSize: {
    fontSize: 20,
    textAlign: "center",
  },
  prC: {
    opacity: 0.7,
    backgroundColor: "white",
  },
});
