import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";


function CategoryGridTile({ color, title, onPress }) {
  return (
    <>
      <View style={styles.gridItem}>
        <Pressable
          style={
            ({ pressed }) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
              {margin : 5}
            ]
          }
          android_ripple={{ color: "#ccc" }}
          onPress={onPress}
        >
          <View style={[styles.innerContainer, {backgroundColor : color}]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "white",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius : 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
