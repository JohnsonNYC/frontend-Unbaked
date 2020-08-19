import React, { Component } from 'react';
import { View,Text,Button,Alert } from 'react-native';

class Auth extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={{flex:.1, flexDirection:'row',backgroundColor:'gold', justifyContent:'space-evenly'}}>
                <Button title="Sign In" onPress={()=>Alert.alert("Create Sign in Logic and Route")}></Button>
                <Button title="Join" onPress={()=>Alert.alert("Persist to backend as POST, create logic, and Routes")}></Button>
            </View>
        );
    }
}

export default Auth;