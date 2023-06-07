import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import image from "../constant/image";
import Check from "../assets/icons/Check";

const Order = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image.image2} resizeMode="contain" alt="image" />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>Angel R.</Text>
        <Text style={styles.title}>Furniture Assembly</Text>
        <View style={styles.descContainer}>
        <Text style={styles.desc}>
          TV Mounting Apr 24  
        </Text>
        <View style={styles.dot}></View>
        <Text style={styles.desc}>12:30 pm</Text>
        </View>
        
        <Text style={styles.price}>$44.39/hr</Text>
      </View>
      <Check />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom:31
  },
  imageContainer: {
    width: 84,
    height: 72,
    borderRadius: 15,
    marginRight: 8,
  },
  image: {
    borderRadius: 15,
    width: "100%",
  },
  details: {
    flex: 1,
    marginRight:22
  },
  name: {
    fontFamily: "mont_bold",
    fontSize: 14,
    marginBottom: 3,
  },
  title: {
    fontFamily: "mont_medium",
    fontSize: 14,
  },
  descContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  desc: {
    fontFamily: "mont_medium",
    fontSize: 14,
    opacity: 0.5,
    marginBottom: 3,
  },
  price: {
    fontFamily: "mont_medium",
    fontSize: 14,
    opacity: 0.5,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 100,
    opacity: 0.5,
    backgroundColor: "black",
    marginHorizontal:4
  },
});

export default Order;
