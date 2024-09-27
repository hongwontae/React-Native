import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import StartScreen from './screens/StartScreen';
import DetailScreen from './screens/DetailScreen';
import { StatusBar } from "react-native";

const NativeStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar hidden></StatusBar>
      <NavigationContainer>
        <NativeStack.Navigator>
          <NativeStack.Screen name="start-screen" component={StartScreen} options={{
            headerTitle : 'Today Current-NEWS',
            headerTitleAlign : 'center',
            headerTintColor : 'white',
            headerStyle : {
              backgroundColor : 'black'
            }

          }}></NativeStack.Screen>
          <NativeStack.Screen name="detail-screen" component={DetailScreen}></NativeStack.Screen>
        </NativeStack.Navigator>
      </NavigationContainer>
    </>
  );
}

