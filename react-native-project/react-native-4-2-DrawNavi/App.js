import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

import { Ionicons } from "@expo/vector-icons";

const bottom = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <NavigationContainer>
        <bottom.Navigator>
          <bottom.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, focused, size }) => {
                return (
                  <Ionicons name="home" color={focused ? color : 'red'} size={size}></Ionicons>
                );
              },
            }}
          ></bottom.Screen>
          <bottom.Screen
            name="Welcone"
            component={WelcomeScreen}
            options={{
              tabBarIcon: ({ color, focused, size }) => {
                return (
                  <Ionicons name="person" color={color} size={size}></Ionicons>
                );
              },
            }}
          ></bottom.Screen>
        </bottom.Navigator>
      </NavigationContainer>
    </>
  );
}
