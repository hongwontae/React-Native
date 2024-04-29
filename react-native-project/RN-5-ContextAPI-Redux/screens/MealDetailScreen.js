import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useContext } from "react";

import { context } from "../store/context/context";

import { MEALS } from "../data/dummy-data";

import MealDetail from "../components/MealDetail";
import SubTitle from "../components/children/SubTitle";
import List from "../components/children/List";
import IconButton from "../components/children/IconButton";

import { useLayoutEffect } from "react";

function MealDetailScreen({ route, navigation }) {

  const favoriteMealCtx = useContext(context);

  const data = route.params.mealId;

  const selectMeals = MEALS.find((ele, idx, arr) => {
    return ele.id === data;
  });

  const mealIsFavorite = favoriteMealCtx.ids.includes(data);

  function pressCheck(){
    if(mealIsFavorite){
      favoriteMealCtx.removeFavorite(data);
    } else {
      favoriteMealCtx.addFavorite(data);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={pressCheck}
            color="white"
            name={mealIsFavorite ? 'star' : 'star-outline'}
            size={30}
          ></IconButton>
        );
      },
    });
  }, [navigation, pressCheck]);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectMeals.imageUrl }}
        ></Image>
        <Text style={styles.title}>{selectMeals.title}</Text>
        <MealDetail
          duration={selectMeals.duration}
          complexity={selectMeals.complexity}
          affordability={selectMeals.affordability}
          style={styles.detailText}
        ></MealDetail>
        <View style={styles.centerContainer}>
          <View style={styles.subContainer}>
            <SubTitle>Ingredients</SubTitle>
            <List data={selectMeals.ingredients}></List>
            <SubTitle>Steps</SubTitle>
            <List data={selectMeals.steps}></List>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subContainer: {
    maxWidth: "90%",
  },
  centerContainer: {
    alignItems: "center",
  },
});
