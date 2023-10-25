import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { Message, Chat } from "../screens/index";

export function MessageStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,gestureEnabled:true}}>
      <Stack.Screen name="Messages" component={Message} />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
}
