import { Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarInactiveTintColor: "coral"}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused}) => {
            return focused ? (
              <AntDesign name="home" size={24} color={color} />
            ) : (
              <FontAwesome5 name="home" size={24} color={color} />
            )
          },
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color}) => (
            <FontAwesome5 name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
