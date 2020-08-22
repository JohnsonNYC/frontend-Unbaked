import React, { Component } from 'react';
import {StyleSheet} from 'react-native'
import { Container, Content,Text, View, Button} from 'native-base';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.view}>
                <Text>About Page</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    view:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'gray',
        height:700
    }
})

export default About;