import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  NotificationScreen,
  PostScreen,
  ProfileScreen,
  Timeline,
} from "../screens/index";
import { MessageStack } from "../Navigation/MessageTabs";
const Tab = createBottomTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "#90ee90",
        tabBarShowLabel: false,
        gestureEnabled: true,
      }}
      backBehavior="history"
      initialRouteName="Timeline"
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" size={24} color={color} />
          ),
          title: "Profile",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Timeline"
        component={Timeline}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={30} />
          ),
          title: "Timeline",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ios-add-circle"
              color="#E9446A"
              size={48}
              style={{
                shadowColor: "#E9446A",
                shadowOffset: {
                  width: 0,
                  height: 0,
                  ShadowRadius: 10,
                  shadowOpacity: 0.4,
                },
              }}
            />
          ),
          title: "Post",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-chatbubbles" size={30} color={color} />
          ),
          tabBarBadge: 3,
          title: "Message",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-notifications" size={30} color={color} />
          ),
          title: "Notification",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}
