import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  OnboardingFlow,
  HomeScreen,
  AuthScreen,
  AuthProvider,
} from "./src/routers/router";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingFlow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false, gestureEnabled: true }}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            headerShown: false,
            gestureEnabled: true,
            presentation: "transparentModal",
          }}
        />
        <Stack.Screen
          name="AuthProvider"
          component={AuthProvider}
          options={{ headerShown: false, gestureEnabled: true }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
