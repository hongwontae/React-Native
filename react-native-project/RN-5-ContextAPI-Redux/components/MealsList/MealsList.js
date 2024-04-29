import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../MealItem";

function MealsList({items}) {
  const summaryData = itemData.item;

  const data = {
    id: summaryData.id,
    title: summaryData.title,
    imageUrl: summaryData.imageUrl,
    affordability: summaryData.affordability,
    complexity: summaryData.complexity,
    duration: summaryData.duration,
  };

  return (
    <MealItem
      id={data.id}
      title={data.title}
      imageURL={data.imageUrl}
      affordability={data.affordability}
      duration={data.duration}
      complexity={data.complexity}
    ></MealItem>
  );
}

return (
  <View style={styles.container}>
    <FlatList
      data={displayedMeals}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      renderItem={renderMealItem}
    ></FlatList>
  </View>
);


export default MealsList;




