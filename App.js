import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image} from "react-native";

export default function App() {
  console.log("App has been executed")

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React</Text>
      <Image source={require('./assets/icon.png')}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // view is flexible. Will grow to fill the entire space 
    backgroundColor: "beige", // can be code color or by name 
    alignItems: "center",
    justifyContent: "center",
  },
});
