import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "./screens/Editprofile";
import {
  Login,
  Signup,
  Welcome,
  FetchData,
  VerifyOtp,
  Counter,
} from "./screens/index";
import {HomeTabs} from './Navigation/HomeTabs'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
          
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{
              title: "Chat App",
            }}
          />
          <Stack.Screen name="Edit-Profile" component={EditProfile} />

          <Stack.Screen
            name="Verify"
            component={VerifyOtp}
            options={{
              headerShown: true,
              headerTitle: "Verify OTP",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
