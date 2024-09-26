import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function MealItem({id, title, imageUrl, duration, complexity, affordability }) {

  const {navigate} = useNavigation();

  function moveMealDetail(){
    navigate('MealDetail', {
      mealId : id
    });
  }

  return (
    <>
      <View style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => {
            return [pressed ? styles.iosClickEvent : null];
          }}
          onPress={moveMealDetail}
        >
          <View>
            <Image style={styles.imageBox} source={{ uri: imageUrl }}></Image>
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration}m</Text>
            <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailsItem}>
              {affordability.toUpperCase()}
            </Text>
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
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
  },
  imageBox: {
    width: "100%",
    height: 200,
  },
  titleStyle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  iosClickEvent : {
    opacity : 0.3
  }
});
