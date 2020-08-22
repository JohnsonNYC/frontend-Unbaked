import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container,Text, View} from 'native-base';


class SummerSpecial extends Component {
    state = {  }
    render() { 
        return ( 
            <Container style={styles.container}>
                <View style={styles.view}>
                    <Text >Summer Specials</Text>
                </View>
                <Container style={styles.container}>
                    <Text >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt.</Text>
                </Container>
            </Container>
        );
    }
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'gold',
        borderWidth:5
    },
    view:{
        backgroundColor:'orange'
    }
})

export default SummerSpecial;