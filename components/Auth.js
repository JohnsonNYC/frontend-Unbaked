import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content,Text, View, Button} from 'native-base';

class Auth extends Component {
    //contentContainerStyle - lets user style the content component 
    render() { 
        return (     
                <Container>
                        <Button full bordered onPress={()=> this.props.navigation.navigate('Login')}><Text>Login</Text></Button>
                        <Button full bordered onPress={()=> this.props.navigation.navigate('Signup')}><Text>Join</Text></Button>
                </Container>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        alignSelf:'center'
    },
    container:{
        backgroundColor:'lavender'
    }
})

export default Auth;