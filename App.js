import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {useFonts} from 'expo-font'
import {
  Login,
  Signup,
  Welcome,
  NotificationScreen,
  MessageScreen,
  ProfileScreen,
  PostScreen,
  Home,
  Counter,
  Timeline,
  FetchData,
} from "./screens/index";
import { Provider } from "react-redux";
import store from "./store/store"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import EditProfile from "./screens/Editprofile";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#161F3D",
        tabBarInactiveTintColor: "#B8BBC4",
        tabBarShowLabel: false,
      }}
      initialRouteName="Timeline"
    >
    
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-person" size={24} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Timeline"
        component={Timeline}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-home" color={tintColor} size={30} />
          ),
        }}
      />
        <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-add-circle" color='#E9446A' size={48} style={{shadowColor:'#E9446A',shadowOffset:{width:0,height:0,ShadowRadius:10,shadowOpacity:0.4}}} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-chatbubbles" size={30} color={tintColor} />
          ),
          tabBarBadge:3,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-notifications" size={30} color={tintColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
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
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Edit-Profile" component={EditProfile} />
        <Stack.Screen name="Counter" component={Counter}/>
        <Stack.Screen name="Fetch" component={FetchData}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
