import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container,Text, View} from 'native-base';


class SummerSpecial extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={styles.view}>
                {/* <View style={styles.view}> */}
                    <Text >Summer Specials</Text>
                {/* </View> */}
                {/* <Container style={styles.container}> */}
                    <Text >In style height is set to 150 dpi.</Text>
                    <Text> Filter through the Doughs with highest ratings?</Text>
                    <Text> </Text>
                {/* </Container> */}
            </View>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'red',
        borderWidth:5
    },
    view:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange',
        height:700
    }
})

export default SummerSpecial;