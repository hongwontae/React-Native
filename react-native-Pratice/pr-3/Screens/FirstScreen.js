import { View, Text, Button } from "react-native";


function FirstScreen({ navigation }) {

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

        <Button title="Button!" onPress={detailScreenMove}></Button>
      </View>
    </>
  );
}

export default FirstScreen;
