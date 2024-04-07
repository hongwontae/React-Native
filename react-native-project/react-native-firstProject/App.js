import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import {StatusBar} from 'expo-status-bar';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modal, showModal] = useState(false); 
  const [goal, setGoals] = useState([]);

  function modalShow(){
    showModal(true);
  }

  function modalStop(){
    showModal(false);
  }

  function buttonHandler(text) {
    setGoals((prevState) => {
      return [...prevState, { text, id: Math.random().toString()}];
    });
    modalStop();
  }
  

  function deleteGoalHandler(id) {
    setGoals((prevState)=>{
      return  prevState.filter((ele, idx, arr)=>{
        return ele.id !== id;
      })
    })
  }

  return (
    <>
    <StatusBar style="light"></StatusBar>
    <View style={styles.addContainer}>
      <Button title="do you want plus goals?" color={'red'} onPress={modalShow}></Button>
      <GoalInput onVisible={modal} onAddGoal={buttonHandler} onCancel={modalStop}></GoalInput>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData.item.text}
                id = {itemData.item.id}
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
    </>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor : '#1e085a'
  },
  goalsContainer: {
    flex: 5,
  },
});
