import React, { Component } from 'react';
import { Container, Header, Body, Title } from 'native-base';
import {View, Text, StyleSheet} from 'react-native'

class Headers extends Component {
    
    render() { 
      // console.log('header',this.props) // Use Props to Dynamically Render header title. Pass prop in file that needs Header as "title"
        return ( 
            <View style={{flex:0.2, justifyContent:'center', alignItems:'center', backgroundColor:'royalblue'}}>
              <Text style={style.header}>{this.props.title?this.props.title: "UNBAKED"}</Text>
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
export default Headers;