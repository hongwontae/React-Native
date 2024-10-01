import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ManageExpenses from "./screens/ManageExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

import { GlobalStyles } from "./constants/styles";

import { Ionicons } from "@expo/vector-icons";

import ButtonIcon from "./components/UI/ButtonIcon";

import ExpenseProvider from "./store/expenses-context";

const NativeStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function DuplicationNavigation() {
  return (
    <>
      <BottomTab.Navigator
        screenOptions={({ navigation }) => {
          return {
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
            headerTitleAlign: "center",
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary400 },
            headerRight: ({ tintColor }) => {
              function navigateManage() {
                navigation.navigate("ManageExpense");
              }
              return (
                <ButtonIcon
                  name="add"
                  size={24}
                  color={tintColor}
                  onPress={navigateManage}
                ></ButtonIcon>
              );
            },
          };
        }}
      >
        <BottomTab.Screen
          name="RecentExpense"
          component={RecentExpenses}
          options={{
            title: "Recent Expense",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons
                  name="hourglass-outline"
                  color={color}
                  size={size}
                ></Ionicons>
              );
            },
          }}
        ></BottomTab.Screen>
        <BottomTab.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: "All Expense",
            tabBarLabel: "All",
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons name="calendar" color={color} size={size}></Ionicons>
              );
            },
          }}
        ></BottomTab.Screen>
      </BottomTab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <ExpenseProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <NativeStack.Navigator>
              <NativeStack.Screen
                name="ExpenseOverview"
                component={DuplicationNavigation}
                options={{ headerShown: false }}
              ></NativeStack.Screen>
              <NativeStack.Screen
                name="ManageExpense"
                component={ManageExpenses}
                options={() => {
                  return {
                    headerStyle: {
                      backgroundColor: GlobalStyles.colors.primary500,
                    },
                    headerTintColor: "white",
                    headerTitleAlign: "center",
                  };
                }}
              ></NativeStack.Screen>
            </NativeStack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </ExpenseProvider>
    </>
  );
}
