import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View,} from "react-native";
import Homepage from "./components/Homepage";

export default function App() {
  return (
    <View style={{flex:1}}>
      <Homepage/>
    </View>
  );
}
