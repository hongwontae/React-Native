import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState(false);
  const [item, setItem] = useState([]);

  function registerItem(text) {
    setItem((prevState) => {
      return [...prevState, {text, id: Math.random().toString()},];
    });
    modalDelete();
  }

  function deleteItem(id) {
    setItem((prevState) => {
      return prevState.filter((ele, idx, arr) => {
        return ele.id !== id;
      });
    });
  } 

  function modalShow() {
    setInput(true);
  }
  function modalDelete() {
    setInput(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.acButto}>
        <Button title="Achieve your goals!!" onPress={modalShow}></Button>
      </View>
      <View>
        <GoalInput
          onRe={registerItem}
          visi={input}
          onDelete={modalDelete}
        ></GoalInput>
      </View>
      <View style={styles.itemC}>
        <FlatList
          data={item}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(item) => {
            return (
              <GoalItem
                item={item.item.text}
                id={item.item.id}
                onDelete={deleteItem}
              ></GoalItem>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  acButto: {
    padding: 16,
  },
  itemC: {
    felx: 5,
  },
});
