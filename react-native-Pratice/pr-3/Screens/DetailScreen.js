import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";

function DetailScreen({ route, navigation }) {

    const route3 = useRoute();
    console.log(route3.params.name);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: "Hello World",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#bbb1f2",
            },
            headerTintColor: "white",
        })
    }, [navigation]);

  return (
    <>
      <View>
        <View>
          <Text>Detilas Page!</Text>
        </View>
        <View>
            <Text>{route.params.name}</Text>
            <Text>{route.params.age}</Text>
        </View>
      </View>
    </>
  );
}

export default DetailScreen;
