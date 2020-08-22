import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import { View, Text, Header,Title} from 'native-base';

class Headers extends Component {
    
    render() { 
      // console.log('header',this.props) // Use Props to Dynamically Render header title. Pass prop in file that needs Header as "title"
        return ( 
            <View style={styles.view}>
                <Text style={styles.header}>{this.props.title?this.props.title: "UNBAKED"}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  header:{
    fontFamily:"Verdana",
    fontSize:40
  },
  view:{
    height:100,
    backgroundColor:'lavender',
    justifyContent:'center',
    alignItems:'center',
  }
})
export default Headers;