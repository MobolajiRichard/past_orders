import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const Orders = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Finished Orders</Text>
      <View style={styles.container2}>
        <view></view>
        <Text>Angel R.</Text>
        <Text>Tv Mounting 2:00 pm</Text>
        <View style={styles.orderDetails}>
        <Text>$80.73/hr</Text>
        <Text>1:14:59</Text>    
        </View>    
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, {backgroundColor:'#D9D9D9'}]}>Report Issue</Pressable>
          <Pressable style={[styles.button, {backgroundColor:'#58C0DB', color:'white'}]}>Done</Pressable>
        </View> 
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:30,
    width:Dimensions.get('window').width
  },
  headerText:{
    fontSize:28,
    fontWeight:'800'
  },
  container2:{
    width:'100%',
    borderWidth:1,
    borderColor:'#d9d9d9',
    borderRadius:15,
    height:346,
    paddding:30
  },
  orderDetails:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginRight:66,
    marginTop:5,


  },
  buttonContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:15,
  },
  button:{
    paddingVertical:5,
    paddingHorizontal:49,
    borderRadius:10,
  }
})

export default Orders