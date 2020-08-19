import { StatusBar } from "expo-status-bar";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { View, SafeAreaView, ImageBackground, Image, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={{
          flex: 1,
          flexDirection: "row",
          resizeMode: "cover",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/logo-red.png")}
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            top: 100,
          }}
        />
        <Text style={{ position: "absolute", top: 200 }}>
          Sell What You Need
        </Text>
      </ImageBackground>
      <View style={{ flex: 0.1, backgroundColor: "#fc5c65" }} />
      <View style={{ flex: 0.1, backgroundColor: "#4ECDC4" }} />
    </View>
  );
}
