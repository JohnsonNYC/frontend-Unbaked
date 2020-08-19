import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Popular extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={{flex:.2,flexDirection:'column',justifyContent:'flex-start'}}>
                <View style={{flex:.4 ,flexDirection:'row',backgroundColor:'blue',justifyContent:'center'}}>
                    <Text style={styles.title}>Popular Dough Portion</Text>
                </View>
                <View style={{flex:.7, flexDirection:'row',backgroundColor:'midnightblue',justifyContent:'center'}}>
                    <Text style={styles.title}>Array of Dough here</Text>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    title:{
        top:20
    },

})
export default Popular;