import React, { Component } from 'react';
import { Text,View, StyleSheet } from 'react-native';

class SummerSpecial extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={{flex:.2,flexDirection:'column',backgroundColor:'grey', justifyContent:'center'}}>
                <View style={{flex:.5, flexDirection:'row' ,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.title}>Summer Specials</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', backgroundColor:'red'}}>
                    <Text style={styles.description}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt.</Text>
                </View>
            </View>
        );
    }
}
const styles= StyleSheet.create({
    title:{
        fontFamily:'Times New Roman',
        fontWeight:"200",
        fontSize: 20,
        top:10
    },
    description:{
        fontFamily:'Arial',
        alignSelf:'center'
        // top:50
    }
})

export default SummerSpecial;