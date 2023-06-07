import { Tabs } from "expo-router";
import { FontAwesome, MaterialIcons, Ionicons, Octicons, AntDesign } from "@expo/vector-icons";
import { User, Home, Chat, Receipt } from "../../assets/icons";


export default () => {
    return (
    <Tabs screenOptions={{tabBarLabelStyle:false, tabBarShowLabel: false, tabBarStyle:{paddingHorizontal:'10%', paddingVertical:12}}}>
        <Tabs.Screen name='Home' 
        options={{
            tabBarIcon:({focused}) => (
                <Home color={focused ? 'black' : '#b4b4b4'}/>
            )
        }}
        />
        <Tabs.Screen name='Orders' options={{headerShown:false,
        tabBarIcon: ({ focused }) => (
            <Receipt color={focused ? 'black' : '#b4b4b4'}/>
          ),
        }}/>
        <Tabs.Screen name='Chat'
        options={{
            tabBarIcon:({focused}) => (
                <Chat color={focused ? 'black' : '#b4b4b4'}/>
            )
        }}
        />
        <Tabs.Screen name='Profile'
         options={{
            tabBarIcon:({focused}) => (
                <User color={focused ? 'black' : '#b4b4b4'}/>
            )
        }}/>
    </Tabs>)
}