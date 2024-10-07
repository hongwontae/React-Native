import { StatusBar } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Inter_900Black } from "@expo-google-fonts/inter";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApproachScreen from "./screens/ApproachScreen";
import IconButton from "./components/UI/IconButton";
import AddScreen from "./screens/AddScreen";
import {Merriweather_700Bold} from '@expo-google-fonts/merriweather'

preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({ Inter_900Black, Merriweather_700Bold });

  useEffect(() => {
    async function prepare() {
      if (loaded || error) {
        await hideAsync();
      }
    }
    prepare();
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Approach-Screen"
            component={ApproachScreen}
            options={({ navigation, route }) => {
              return {
                headerTitle: "To Do Application",
                headerTitleAlign: "center",
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white",
                headerTitleStyle: {
                  fontFamily: "Inter_900Black",
                  fontSize: 25,
                },
                headerRight: ({ tintColor }) => {
                  function iconClickHandler() {
                    navigation.navigate("Add-Screen");
                  }
                  return (
                    <IconButton
                      name="add"
                      color={tintColor}
                      size={30}
                      onPress={iconClickHandler}
                    ></IconButton>
                  );
                },
              };
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="Add-Screen"
            component={AddScreen}
            options={() => {
              return {
                headerTitle: "Add  Plan",
                headerTitleAlign: "center",
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white",
                headerTitleStyle: {
                  fontFamily: "Inter_900Black",
                  fontSize: 25,
                },
              };
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
