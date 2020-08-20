import React, { Component } from 'react';
import { View,Text, StyleSheet } from 'react-native';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={{flex:.2, flexDirection:'column', backgroundColor:'olive', justifyContent:'center', alignItems:'center'}}>
                <Text>About Page</Text>
            </View>
        );
    }
}

export default About;