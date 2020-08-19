import { StatusBar } from "expo-status-bar";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Auth from "./components/Auth"
import { View, SafeAreaView, ImageBackground, Image, Text } from "react-native";

export default function App() {
  return (
    <View style={{flex:1}}>
      <Header/>
      <Auth/>
    </View>
  );
}
