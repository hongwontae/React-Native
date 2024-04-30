import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FirstScreen from "./Screens/FirstScreen";
import DetailScreen from "./Screens/DetailScreen";

// import ContextProvider from "./store/context/StateContext";

import {Provider} from 'react-redux';
import store from './store/redux/store'
import Counter from "./Screens/Counter";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="light"></StatusBar>
      {/* <ContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="FirstScreen"
              component={FirstScreen}
              options={{
                title: "Hello World",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "#bbb1f2",
                },
                headerTintColor: "white",
                headerRight: () => {
                  return <Button title="Go!" color="black"></Button>;
                },
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="DetailScreen"
              component={DetailScreen}
              options={({ navigation, route }) => {
                const value = route.params.name;
                return value;
              }}
            ></Stack.Screen>

              <Stack.Screen name="counter" component={Counter}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      {/* </ContextProvider> */}
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
