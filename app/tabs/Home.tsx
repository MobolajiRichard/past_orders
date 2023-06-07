import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>H</Text>
      <Link href={'./Orders'}>Go to orders</Link>
    </View>
  )
}

export default Home