import React, { Component } from "react";
import {StyleSheet} from 'react-native'
import {Footer, FooterTab,Icon, Button} from 'native-base';

class Navbar extends Component {
  //Goods
  //MyUBG
  //MyBasket
  render() {
    return (
      // <View style={styles.view}>
      //     <Button transparent large>
      //       <Text>Goods</Text>
      //     </Button>
      //     <Button transparent large>
      //       <Text>MyUBG</Text>
      //     </Button>
      //     <Button transparent large>
      //       <Text>MyBasket</Text>
      //     </Button>
          
        <Footer style={styles.footer}>
          <FooterTab style={styles.tab}>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button >
              <Icon name="navigate" />
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
      top:10,
      backgroundColor:'black',
    }
})
export default Navbar;
