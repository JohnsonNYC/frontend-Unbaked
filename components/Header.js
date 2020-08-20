import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={{flex:0.2, justifyContent:'center', alignItems:'center', backgroundColor:'royalblue'}}>
              <Text style={style.header}>U n b a k e d</Text>
            </View>
        );
    }
}
const style = StyleSheet.create({
  header:{
    top:10,
    fontFamily:"Verdana",
    fontSize:40
  }
})
export default Header;