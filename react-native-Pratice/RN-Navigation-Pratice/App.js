import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import StartScreen from "./screens/StartScreen";
import DetailScreen from "./screens/DetailScreen";
import TestOneScreen from "./BottomScreen/TestOneScreen";
import TestTwoScreen from "./BottomScreen/TestTwoScreen";
import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IconButton from "./UI/IconButton";

const NativeStack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function BottomComponent() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="test-one"
        component={TestOneScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <IconButton color={color} size={size} name="star"></IconButton>
            );
          },
        }}
      ></Bottom.Screen>
      <Bottom.Screen
        name="test-two"
        component={TestTwoScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <IconButton color={color} size={size} name="star"></IconButton>
            );
          },
        }}
      ></Bottom.Screen>
    </Bottom.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar hidden></StatusBar>
      <NavigationContainer>
        <NativeStack.Navigator>
          <NativeStack.Screen
            name="start-screen"
            component={StartScreen}
            options={{
              headerTitle: "Today Current-NEWS",
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: "black",
              },
            }}
          ></NativeStack.Screen>
          <NativeStack.Screen
            name="detail-screen"
            component={DetailScreen}
          ></NativeStack.Screen>
          <NativeStack.Screen
            options={{ headerShown: false }}
            name="testBottom"
            component={BottomComponent}
          ></NativeStack.Screen>
        </NativeStack.Navigator>
      </NavigationContainer>
    </>
  );
}
