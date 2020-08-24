import React, { Component } from "react";
import {StyleSheet} from 'react-native'
import {Footer, FooterTab,Icon, Button} from 'native-base';

class Navbar extends Component {
  //Goods
  //MyUBG
  //MyBasket
  render() {
    return (
        <Footer style={styles.footer}>
          <FooterTab style={styles.tab}>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
            <Button >
              <Icon name="cart" />
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
