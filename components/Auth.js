import React, { Component } from 'react';
import { View,Button,Alert } from 'react-native';

class Auth extends Component {
    state = {  }
    render() { 
        return (     
            <View style={{flex:.1,flexDirection:"row" ,justifyContent:'center',alignItems:'center', backgroundColor:'midnightblue'}}>
                <Button title="Login" onPress={()=> this.props.navigation.navigate('Login')}/>
                <Button title="Sign Up" onPress={()=> Alert.alert("Create SignUp and Post Request")}></Button>
            </View>
        );
    }
}


export default Auth;