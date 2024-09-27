import { Button, Image, StyleSheet, Text, View } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/MealDetail/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((ele) => {
    return ele.id === mealId;
  });

  function pressHandler(){
    console.log('press')
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight : ()=>{
            return <IconButton name='star' color={'white'} onPress={pressHandler}></IconButton>
        }
    })
  }, [navigation, pressHandler])

  return (
    <>
      <View styles={styles.allContainer}>
        <Image
          style={styles.imageStyle}
          source={{ uri: selectedMeal.imageUrl }}
        ></Image>
        <Text style={styles.titleStyle}>{selectedMeal.title}</Text>
        <View style={styles.subtitleContainer}>
          <MealDetails
            styless={styles.detailText}
            textStyle={styles.subTitle}
            affordability={selectedMeal.affordability}
            complexity={selectedMeal.affordability}
            duration={selectedMeal.duration}
          ></MealDetails>
        </View>
        <View style={styles.subtitleContainer}>
          <Text>Ingredients</Text>
          {selectedMeal.ingredients.map((ele) => {
            return <Text key={ele}>{ele}</Text>;
          })}
        </View>
        <View style={styles.subtitleContainer}>
          <Text>Steps</Text>
          {selectedMeal.steps.map((ele) => {
            return <Text key={ele}>{ele}</Text>;
          })}
        </View>
      </View>
    </>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: "100%",
    height: 350,
    marginTop: 10,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    fontSize: 20,
    margin: 4,
  },
  detailText: {
    color: "black",
  },
  subTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
    padding: 6,
  },
  subtitleContainer: {
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 24,
  },
});
