import { Tabs } from "expo-router";
import { FontAwesome, MaterialIcons, Ionicons, Octicons, AntDesign } from "@expo/vector-icons";


export default () => {
    return (
    <Tabs screenOptions={{tabBarLabelStyle:false, tabBarShowLabel: false, tabBarStyle:{paddingHorizontal:'10%', paddingVertical:24}}}>
        <Tabs.Screen name='Home' 
        options={{
            tabBarIcon:({focused}) => (
                <Octicons name="home" size={27} color={focused ? 'black' : "#B4B4B4"}  />
            )
        }}
        />
        <Tabs.Screen name='Orders' options={{headerShown:false,
        tabBarIcon: ({ focused }) => (
            <MaterialIcons name="receipt" size={27} color={focused ? 'black' : "#B4B4B4"} />
          ),
        }}/>
        <Tabs.Screen name='Chat'
        options={{
            tabBarIcon:({focused}) => (
                <Ionicons name="md-chatbubble-outline" size={27} color={focused ? 'black' : "#B4B4B4"}  />
            )
        }}
        />
        <Tabs.Screen name='Profile'
         options={{
            tabBarIcon:({focused}) => (
                <AntDesign name="user" size={27} color={focused ? 'black' : "#B4B4B4"}  />
            )
        }}/>
    </Tabs>)
}