import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from '../components/MealItem'

function MealsOverviewScreen({ route }) {
  const id = route.params.id;

  const displayMeal = MEALS.filter((ele, idx, arr) => {
    return ele.categoryIds.indexOf(id) >= 0;
  });

  function renderDetailMeal(title){
    return <MealItem title={title}></MealItem>
  }

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={displayMeal}
          keyExtractor={({ id }) => {
            return id;
          }}
          renderItem={({item})=>{
            return renderDetailMeal(item.title)
          }}
        ></FlatList>
      </View>
    </>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
