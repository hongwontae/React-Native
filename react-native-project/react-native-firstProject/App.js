import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goal, setGoals] = useState([]);

  function buttonHandler(text) {
    setGoals((prevState) => {
      return [...prevState, { text, id: Math.random().toString() }];
    });
  }

  function deleteGoalHandler() {
    console.log("delete!");
  }

  return (
    <View style={styles.addContainer}>
      <GoalInput onAddGoal={buttonHandler}></GoalInput>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              ></GoalItem>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
