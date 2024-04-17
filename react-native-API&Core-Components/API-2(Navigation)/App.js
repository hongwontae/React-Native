import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "./components/StartPage";
import SecondPage from "./components/SecondPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
        // screenOptions={{
        //   headerTitleAlign: "center",
        //   headerStyle: {
        //     backgroundColor: "black",
        //   },
        //   headerTintColor: "white",
        // }}
        >
          <Stack.Screen
            name="StartPage"
            component={StartPage}
            options={{
              title: "Starting Page",
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "black",
              },
              headerTintColor: "white",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="SecondPage"
            component={SecondPage}
            options={({navigation, route}) => {
              const data = route.params.name
              return {
                title : data
              }
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
