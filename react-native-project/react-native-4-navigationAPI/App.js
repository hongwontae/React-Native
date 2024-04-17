import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import CategoriesScreens from "./screens/CategoriesScreen";
import MealDetailScreen from './screens/MealDetailScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreens}
            options={{
              title: "All Category",
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealsOverView"
            component={MealsOverviewScreen}
            
          ></Stack.Screen>
          <Stack.Screen name="MealDetailScreen" component={MealDetailScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


