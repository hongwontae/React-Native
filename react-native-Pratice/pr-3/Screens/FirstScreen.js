import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useContext } from "react";
import { context } from "../store/StateContext";

function FirstScreen({ navigation }) {
  const nn = useNavigation();

  const state = useContext(context);
  console.log(state);

  function detailScreenMove() {
    navigation.navigate("DetailScreen", {
      name: "HWT",
      age: 27,
    });
  }

  return (
    <>
      <View>
        <View>
          <Text>hello WORLD!</Text>
        </View>
        <View>
          <Text>{state.name}</Text>
        </View>
        <Button title="Change Name" onPress={()=>{
          return state.changeName('Good Man')
        }}></Button>
        <Button title="Button!" onPress={detailScreenMove}></Button>
      </View>
    </>
  );
}

export default FirstScreen;
