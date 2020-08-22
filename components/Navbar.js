import React, { Component } from "react";
import {StyleSheet} from 'react-native'
import { Container,Text, Button,View} from 'native-base';

class Navbar extends Component {
  //Goods
  //MyUBG
  //MyBasket
  render() {
    return (
      <View style={styles.view}>
          <Button>
            <Text>Goods</Text>
          </Button>
          <Button>
            <Text>MyUBG</Text>
          </Button>
          <Button>
            <Text>MyBasket</Text>
          </Button>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
    view:{
      height:70,
      flexDirection: "row", // primary axis is horizontal
      backgroundColor: "midnightblue",
      justifyContent: "center", // align along main axis
      alignItems: "flex-end", // align alond the secondary axis, in this case the vertical
    }
})
export default Navbar;
