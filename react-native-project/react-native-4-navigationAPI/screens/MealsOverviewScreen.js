import { StyleSheet, FlatList, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item, index, arr) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    const summaryData = itemData.item;

    const data = {
      title: summaryData.title,
      imageUrl: summaryData.imageUrl,
      affordability: summaryData.affordability,
      complexity: summaryData.complexity,
      duration: summaryData.duration,
    };

    return (
      <MealItem
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
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
  },

});
