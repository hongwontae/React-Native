import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import AuthCtxProvider from "./store/auth-store";
import { useContext, useEffect } from "react";

import * as SecureStore from 'expo-secure-store'

import { AuthCtx } from "./store/auth-store";

import { logoutHandler } from "./util/http";

import IconButton from "./components/ui/IconButton";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const { isLogout } = useContext(AuthCtx);

  async function logoutTotal() {
    const status = await logoutHandler();
    if(status === true){
      isLogout()
    } else {
      console.log('Token 유효하지 않습니다.')
      isLogout();
    }

  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        options={{
          headerRight: ({ tintColor }) => {
            return (
              <IconButton
                icon="exit"
                color={tintColor}
                size={24}
                onPress={logoutTotal}
              ></IconButton>
            );
          },
        }}
        name="Welcome"
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
}


function Navigation() {
  const { isAuth, setAuth } = useContext(AuthCtx);

  useEffect(()=>{
    async function ggg(){
      const token = await SecureStore.getItemAsync('token')
      if(token){
        setAuth(true)
      } else {
        setAuth(false)
      }
    }
    ggg();
  }, [])

  return (
    <NavigationContainer>
      {isAuth ? (
        <AuthenticatedStack></AuthenticatedStack>
      ) : (
        <AuthStack></AuthStack>
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthCtxProvider>
        <Navigation />
      </AuthCtxProvider>
    </>
  );
}
