import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import CategoriesScreens from "./screens/CategoriesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

import ContextProvider from "./store/context/context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#3514" },
        drawerInactiveTintColor: "#333aaa",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreens}
        options={{
          title: "All Categories",
        }}
      ></Drawer.Screen>
      <Drawer.Screen name="Favorite" component={FavoriteScreen}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <ContextProvider>
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
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            ></Stack.Screen>

            <Stack.Screen
              name="MealsOverView"
              component={MealsOverviewScreen}
            ></Stack.Screen>
            <Stack.Screen
              name="MealDetailScreen"
              component={MealDetailScreen}
              options={{
                title: "About the Meals",
              }}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </>
  );
}
