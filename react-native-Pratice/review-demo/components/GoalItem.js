import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ item, dele }) {
  return (
    <>
      <View style={styles.textContainer}>
        <Pressable
        style={({pressed}) =>  pressed && styles.pressItem }
          android_ripple={{ color: "#210644" }}
          onPress={() => {
            return dele(item.id);
          }}
        >
          <Text style={styles.textCSS}>{item.text}</Text>
        </Pressable>
      </View>
    </>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  textContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textCSS: {
    textAlign: "center",
    color: "white",
    padding : 4,
  },
  pressItem : {
    opacity : '0.5'
  }
});
