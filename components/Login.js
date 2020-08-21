// import React, {Component} from 'react';
// import { View,TextInput} from "react-native";

// class Login extends Component{
//     state={
//         email:"",
//         password:""
//     }
//     handleChange=(e)=>{
//         this.setState({ email: e.target.value });
//     }
//     render(){
//         console.log(this.state.email)
//         return(
//             <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
//                 <TextInput type='text' name='email' value={this.state.email} placeholder="email" onChangeText={this.handleChange}/>
//                 <TextInput name='password' value={this.state.email} placeholder="password" onChangeText={this.handleChange}/>
//             </View>
//         )
//     }
// }

// export default Login;
import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

const Login = () => {
    const [text,setText] = useState('')
    const [password,setPassword] = useState('')
    // 'text' is like state key. setText is like setState(text: e.target.value)
    console.log('--------------')
    console.log('email', text)
    console.log('password',password)
    return ( 
        <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Text>Hello</Text>
            <TextInput placeholder="email" onChangeText={(text)=> setText(text)}/>
            <TextInput placeholder="password" onChangeText={(password)=> setPassword(password)}/>
        </View>
    );
}

export default Login;