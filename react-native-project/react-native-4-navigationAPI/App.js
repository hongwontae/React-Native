import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen'

import CategoriesScreens from "./screens/CategoriesScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
    <StatusBar style="dark"></StatusBar>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoriesScreens}></Stack.Screen>
        <Stack.Screen name="MealsOverView" component={MealsOverviewScreen}></Stack.Screen>
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
