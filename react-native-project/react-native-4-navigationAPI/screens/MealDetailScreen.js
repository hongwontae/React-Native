import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";

import { MEALS } from "../data/dummy-data";

import MealDetail from "../components/MealDetail";
import SubTitle from "../components/children/SubTitle";
import List from "../components/children/List";
import { useLayoutEffect } from "react";

function MealDetailScreen({ route, navigation }) {
  const data = route.params.mealId;

  const selectMeals = MEALS.find((ele, idx, arr) => {
    return ele.id === data;
  });

  function pressCheck() {
    console.log(`PressCheck ${selectMeals.title}`);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
       return  <Button title="Tap Me" onPress={pressCheck}></Button>;
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
