import React, { Component } from "react";
import {StyleSheet} from 'react-native'
import {Footer, FooterTab,Icon, Button, Text } from 'native-base';

class Navbar extends Component {
  //Goods
  //MyUBG
  //MyBasket
  render() {
    return (
        <Footer style={styles.footer}>
          <FooterTab style={styles.tab}>
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical >
              <Icon name="person" />
              <Text>My UBG</Text>
            </Button>
            <Button vertical>
              <Icon name="cart" />
              <Text>Basket</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

const styles = StyleSheet.create({
    footer:{
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:'black'
    },
    tab:{
      width:'100%',
      height:'100%',
      backgroundColor:'black',
      bottom:1
    }
})
export default Navbar;
