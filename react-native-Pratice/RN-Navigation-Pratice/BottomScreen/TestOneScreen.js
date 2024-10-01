import { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import PressButton from "../components/PressButton";
import axios from "axios";

function TestOneScreen({ route, navigation }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(0);
  const [description, setDescription] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Test-One",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
    });
  }, []);

  async function moveTwoHandler() {


    const response = await fetch("http://172.30.1.72:5000/post/one/item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount : +amount,
        date : new Date(date),
        description : description
      }),
    });

    if(!response.ok){
        throw new Error('Funck')
    }

    navigation.navigate("test-two",{amount : amount, id : id});
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Test One Screen</Text>
        <TextInput
          placeholder="Number"
          keyboardType="decimal-pad"
          style={styles.textInputStyle}
          onChangeText={(target) => {
            setAmount(target);
          }}
        ></TextInput>
        <TextInput
          keyboardType="number-pad"
          placeholder="YYYY-MM-DD"
          style={styles.textInputStyle}
          onChangeText={(target) => {
            setDate(target);
          }}
        ></TextInput>
        <TextInput
          placeholder="Description"
          style={styles.textInputStyle}
          onChangeText={(target) => {
            setDescription(target);
          }}
        ></TextInput>
        <PressButton press={moveTwoHandler}>Move-Two</PressButton>
      </View>
    </>
  );
}

export default TestOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  textInputStyle: {
    backgroundColor: "#fffef4",
    padding: 10,
    width: "80%",
    borderRadius: 10,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 25,
  },
});
