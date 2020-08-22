import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content,Text, View, Button} from 'native-base';

class Auth extends Component {
    //contentContainerStyle - lets user style the content component 
    render() { 
        return (     
                <View style={styles.container}>
                        <Button style={styles.button} large bordered onPress={()=> this.props.navigation.navigate('Login')}><Text>Login</Text></Button>
                        <Button style={styles.button} large bordered onPress={()=> this.props.navigation.navigate('Signup')}><Text>Join</Text></Button>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        alignSelf:'center'
    },
    container:{
        height:70,
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'lavender'
    }
})

export default Auth;