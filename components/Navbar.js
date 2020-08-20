import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <View
        style={{
          flex: 0.1,
          flexDirection: "row", // primary axis is horizontal
          backgroundColor: "midnightblue",
          justifyContent: "space-evenly", // align along main axis
          alignItems: "center", // align alond the secondary axis, in this case the vertical
        }}
      >
          <Button title="Goods"></Button>
          <Button title="My UBG"></Button>
          <Button title="Basket"></Button>
      </View>
    );
  }
}

export default Navbar;
