import { View, Text, StyleSheet } from "react-native";

function MealDetail({ duration, complexity, affordability, style }) {
  return (
    <>
      <View style={[styles.details, style]}>
        <Text style={[styles.detailsItem, style]}>{duration}m</Text>
        <Text style={[styles.detailsItem, style]}>
          {complexity.toUpperCase()}
        </Text>
        <Text style={[styles.detailsItem, style]}>
          {affordability.toUpperCase()}
        </Text>
      </View>
    </>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
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
