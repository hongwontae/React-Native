import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

function MealItem({ title, imageURL, duration, complexity, affordability }) {
  return (
    <>
      <View style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
            { margin: 5 },
          ]}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: imageURL }} style={styles.image}></Image>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailsItem}>{duration}m</Text>
              <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
              <Text style={styles.detailsItem}>
                {affordability.toUpperCase()}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "red",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed : {
    opacity : Platform.OS === 'android' ? null : 0.5
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
