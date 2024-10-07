import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "./screens/AllPlaces";
import AddPlaces from "./screens/AddPlaces";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/Colors";
import Map from "./screens/Map";
import { useEffect, useState } from "react";
import { init } from "./util/database";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitial, setDbInitial] = useState(false);

  useEffect(() => {
    async function dataLoading() {
      try {
        await SplashScreen.preventAutoHideAsync(); // 스플래시 화면 유지
        init().then(() => {
          setDbInitial(true);
        });
      } catch (error) {
        console.log(error)
      } finally {
        await SplashScreen.hideAsync(); // 스플래시 화면 숨김
      }
    }
    dataLoading();
  }, []);

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => {
            return {
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: Colors.primary500,
              },
              headerTintColor: Colors.gray700,
              contentStyle: {
                backgroundColor: Colors.gray700,
              },
            };
          }}
        >
          <Stack.Screen
            name="All-Places"
            component={AllPlaces}
            options={({ navigation }) => {
              return {
                headerRight: ({ tintColor }) => {
                  return (
                    <IconButton
                      name="add"
                      size={24}
                      color={tintColor}
                      onPress={() => {
                        navigation.navigate("Add-Places");
                      }}
                    ></IconButton>
                  );
                },
              };
            }}
          ></Stack.Screen>
          <Stack.Screen name="Add-Places" component={AddPlaces}></Stack.Screen>
          <Stack.Screen name="Map" component={Map}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
