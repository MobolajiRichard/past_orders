import {Stack} from 'expo-router'

const StackLayout = () =>{
    //stack screen layout
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name='tabs' />
        </Stack>
    )
}

export default StackLayout