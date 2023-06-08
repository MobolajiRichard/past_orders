import {View, Text, SafeAreaView, StyleSheet, Pressable, Image, FlatList, Platform, StatusBar } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import image from "../../constant/image";
import Order from "../../components/Order";
import ArrowBack from "../../assets/icons/ArrowBack";
import { data } from "../../utils/data";
import { OrderProp } from "../../types";
import {StatusBar as Bar} from 'expo-status-bar'

const Orders = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Bar backgroundColor="white" style="dark" />
      <View style={styles.container}>
        <View style={styles.back}>
          <ArrowBack />
        </View>
        <Text style={styles.headerText}>Finished orders</Text>

        {/* order card */}
        <View style={styles.container2}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={image.image1}
              alt="hero"
            />
          </View>
          <Text style={styles.name}>Angel R.</Text>
          <Text style={styles.orderInfo}>TV Mounting 2:00 pm</Text>
          <View style={styles.orderDetails}>
            <Text style={styles.orderPrice}>$80.73/hr</Text>
            <Text style={styles.orderTime}>1:14:59</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.button, { backgroundColor: "#D9D9D9" }]}>
              <Text style={[styles.orderTime, { opacity: 1 }]}>
                Report issue
              </Text>
            </Pressable>
            <Pressable style={[styles.button, { backgroundColor: "#58C0DB" }]}>
              <Text style={[styles.orderTime, { color: "white", opacity: 1 }]}>
                Done
              </Text>
            </Pressable>
          </View>
        </View>
        
        {/* orders list */}
        <FlatList
          data={data}
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 8 }}
          renderItem={({ item }: { item: OrderProp }) => (
            <Order orders={item} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(order: OrderProp) => order.id.toString()}
        />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper:{
    paddingTop: Platform.OS === 'android' ? StatusBar?.currentHeight : 0,
    flex: 1, 
    backgroundColor: "white" 
  },
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingHorizontal: 30,

  },

  back: {
    width: 38,
    height: 48,
    backgroundColor: "#f2f2f2",
    borderRadius: 9,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "800",
    fontFamily: "raleway",
    marginBottom: 28,
  },
  container2: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 15,
    paddingHorizontal: "8.6%",
    paddingVertical: 27,
    marginBottom: 32,
  },
  orderDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 37,
    borderRadius: 10,
  },
  name: {
    fontFamily: "mont_semibold",
    fontSize: 18,
  },
  orderInfo: {
    fontFamily: "mont_medium",
    opacity: 0.5,
    marginBottom: 5,
  },
  orderPrice: {
    fontFamily: "mont_semibold",
    fontSize: 14,
    opacity: 0.5,
  },
  orderTime: {
    fontFamily: "mont_medium",
    fontSize: 14,
    opacity: 0.4,
  },
  imageContainer: {
    marginBottom: 29,
    marginTop: 12,
    borderRadius: 15,
  },
  image: {
    borderRadius: 15,
    width: "100%",
  },
});

export default Orders;
