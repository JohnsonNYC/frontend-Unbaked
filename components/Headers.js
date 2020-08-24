import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import { View, Text, Button} from 'native-base';


class Headers extends Component {

  getCancel = ()=>{
    return(
      <Button onPress={()=>this.props.navigation.goBack()} transparent style={{top:50}}><Text>Cancel</Text></Button>
    )
  }
  render() { 
 // Use Props to Dynamically Render header title. Pass prop in file that needs Header as "title"
 
        return ( 
            <View style={styles.view}>
              {this.props.title? this.getCancel():null}
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