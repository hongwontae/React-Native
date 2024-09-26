import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  const id = route.params.id;

  const displayMeal = MEALS.filter((ele, idx, arr) => {
    return ele.categoryIds.indexOf(id) >= 0;
  });

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((ele)=>{
      return ele.id === id
    }).title
    navigation.setOptions({
      title : categoryTitle
    })
  }, [id])

  function renderDetailMeal({item}) {

    const mealSingle  = {
      id : item.id,
      title : item.title,
      imageUrl : item.imageUrl,
      duration : item.duration,
      complexity : item.complexity,
      affordability : item.affordability
    }

    return <MealItem {...mealSingle}></MealItem>;
  }

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={displayMeal}
          keyExtractor={({ id }) => {
            return id;
          }}
          renderItem={renderDetailMeal}
        ></FlatList>
      </View>
    </>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
