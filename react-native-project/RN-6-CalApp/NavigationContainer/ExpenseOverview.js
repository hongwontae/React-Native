import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RecentExpense from "../screens/RecentExpense";
import AllExpense from "../screens/AllExpenses";

import {GlobalStyles} from '../constants/styles'

import {Ionicons} from '@expo/vector-icons'

const BottomTabs = createBottomTabNavigator();

function ExpenseOverview() {
  return (
    <>
      <BottomTabs.Navigator screenOptions={{
        headerStyle : {
            backgroundColor : GlobalStyles.colors.primary500
        },
        headerTintColor : 'white',
        headerTitleAlign : 'center',
        tabBarStyle : {
            backgroundColor : GlobalStyles.colors.primary500
        },
        tabBarActiveTintColor : GlobalStyles.colors.accent500
      }}>
        <BottomTabs.Screen
          name="RecentExpenses"
          component={RecentExpense}
          options={{
            title : 'Recent-Expense',
            tabBarLabel : 'Recent',
            tabBarIcon : ({color, size})=>{
                return <Ionicons name="hourglass" size={size} color={color}></Ionicons>
            }
          }}
        ></BottomTabs.Screen>
        <BottomTabs.Screen
          name="AllExpenses"
          component={AllExpense}
          options={{
            title : 'All-Expense',
            tabBarLabel : 'ALL',
            tabBarIcon : ({color, size})=>{
                return <Ionicons name="calendar" size={size} color={color}></Ionicons>
            }
          }}
        ></BottomTabs.Screen>
      </BottomTabs.Navigator>
    </>
  );
}

export default ExpenseOverview;
