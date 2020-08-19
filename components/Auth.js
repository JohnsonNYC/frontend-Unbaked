import React, { Component } from 'react';
import { View,Text,Button,Alert, StyleSheet,TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

class Auth extends Component {
    state = {  }
    render() { 
        return (     
            // <TouchableOpacity onPress={()=> console.log('Boats Boats Boats')}>
            //     <LinearGradient start={[0, 0.5]}
            //         end={[1, 0.5]}
            //         colors={['#EFBB35', '#4AAE9B']}
            //         style={{borderRadius: 5}}>
            //             <View style={styles.circleGradient}>
            //             <Text style={styles.visit}>Login</Text>
            //             </View>
            //     </LinearGradient>
            // </TouchableOpacity>

            <View style={{flex:.1,flexDirection:"row" ,justifyContent:'center',alignItems:'center', backgroundColor:'midnightblue'}}>
                <Button title="Login" onPress={()=> Alert.alert("Create Logic and Get Request")}></Button>
                <Button title="Sign Up" onPress={()=> Alert.alert("Create SignUp and Post Request")}></Button>
            </View>
        );
    }
}
// const styles = StyleSheet.create({
//     circleGradient: {
//         margin:1,
//         backgroundColor: "white",
//         borderRadius: 5
//     },
//     visit: {
//         margin: 4,
//         paddingHorizontal: 6,
//         textAlign: "center",
//         backgroundColor: "white",
//         color: '#008f68',
//         fontSize: 12
//     }
// })

export default Auth;