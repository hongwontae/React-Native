import { useState } from "react";
import { StyleSheet, View, FlatList, Button, StatusBar } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [showData, setShowData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function goalHandler(enteredData) {
    setShowData((prev) => {
      return [...prev, { text: enteredData, id: Math.random().toString() }];
    });
  }

  function deleteHandler(id) {
    setShowData((prev) => {
      const filteredData = prev.filter((ele) => {
        return ele.id !== id;
      });
      return filteredData;
    });
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function downModalHandler() {
    setShowModal(false);
  }

  return (
    <>
    <StatusBar></StatusBar>
      <View style={styles.addContainer}>
        <GoalInput
          goalHandler={goalHandler}
          visible={showModal}
          noneVisible={downModalHandler}
        ></GoalInput>
        <View style={{ width: "80%" }}>
          <Button
            title="Add New Goal"
            onPress={showModalHandler}
            color={"#5e0acc"}
          ></Button>
        </View>
        <View style={styles.goalsContainer}>
          <FlatList
            data={showData}
            renderItem={({ item }) => {
              return <GoalItem item={item} dele={deleteHandler}></GoalItem>;
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

// react-native도 row일 떄 자식들은 width은 컨텐츠, height 컨테이너 높이
// column일 떄 width는 100%, height은 컨텐츠
// => 다만 height이 명시적으로 설정되어 있지 않으면 전체 높이를 따라간다. 그러나 %, flex : 1이런 작업을 해야 나타난다.

const styles = StyleSheet.create({
  addContainer: {
    paddingTop: 70,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});
