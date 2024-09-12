import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [showData, setShowData] = useState([]);

  function textInputHandler(textData) {
    setEnteredText(textData);
  }

  function goalHandler() {
    setShowData((prev) => {
      return [...prev, enteredText];
    });
  }

  return (
    <View style={styles.addContainer}>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.textInputBoxStyle}
          placeholder="Your course goals"
          onChangeText={textInputHandler}
        ></TextInput>
        <Button onPress={goalHandler} title="Add Goal"></Button>
      </View>
      <View style={styles.goalsContainer}>
        {showData.map((ele) => {
          return (
            <View style={styles.textContainer} key={ele}>
              <Text style={styles.textCSS}>{ele}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

// react-native도 row일 떄 자식들은 width은 컨텐츠, height 컨테이너 높이
// column일 떄 width는 100%, height은 컨텐츠
// => 다만 height이 명시적으로 설정되어 있지 않으면 전체 높이를 따라간다. 그러나 %, flex : 1이런 작업을 해야 나타난다.

const styles = StyleSheet.create({
  addContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    flex: 1,
  },
  textInputBoxStyle: {
    borderWidth: 2,
    width: "70%",
    padding: 4,
    borderColor: "#cccccc",
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  textContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textCSS: {
    textAlign: "center",
    color: "white",
  },
});
