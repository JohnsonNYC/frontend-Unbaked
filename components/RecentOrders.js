import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base'

class RecentOrders extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.view}>
                <Text style={styles.text}> Recent Orders </Text>
                <Text style={styles.text}> Don't forget to add Favorites` </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view:{
        width:'100%',
        height: 350,
        backgroundColor:'midnightblue',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white'
    }
})

export default RecentOrders;