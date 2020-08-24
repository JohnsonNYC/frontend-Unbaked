import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import { View, Text,Icon, Button} from 'native-base';

class Headers extends Component {
  backButton = ()=>{
    console.log(this.props)
  }
  render() { 
 // Use Props to Dynamically Render header title. Pass prop in file that needs Header as "title"
        return ( 
            <View style={styles.view}>
                <Text style={styles.header}>{this.props.title?this.props.title: "UNBAKED"}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  header:{
    top:10,
    fontFamily:"Verdana",
    fontSize:40,
    color:'white'
  },
  view:{
    height:100,
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
  }
})
export default Headers;