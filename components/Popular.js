import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content,Text, View, Button} from 'native-base';

class Popular extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.view}>
                    <Text>Popular Dough Portion</Text>
                    <Text>Array of Dough here. Adjust height</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    view:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'olive',
        width:'100%',
        height: 700
    }
})

export default Popular;