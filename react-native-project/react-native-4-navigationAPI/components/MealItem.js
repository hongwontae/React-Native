import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";

function MealItem({
  id,
  title,
  imageURL,
  duration,
  complexity,
  affordability,
}) {
  const navi = useNavigation();

  function selectMealItemHandler() {
    navi.navigate("MealDetailScreen", {
      mealId: id,
    });
  }

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
          onPress={selectMealItemHandler}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: imageURL }} style={styles.image}></Image>
              <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetail
              duration={duration}
              affordability={affordability}
              complexity={complexity}
            ></MealDetail>
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
  buttonPressed: {
    opacity: Platform.OS === "android" ? null : 0.5,
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
});
