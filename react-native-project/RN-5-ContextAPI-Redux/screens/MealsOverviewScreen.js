import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect} from "react";
import {CATEGORIES, MEALS} from '../data/dummy-data'

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item, index, arr) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((ele, idx, arr)=>{
      return  ele.id === catId;
    }).title;

    navigation.setOptions({
      title : categoryTitle
    })

  }, [catId, navigation])


}

export default MealsOverviewScreen;

