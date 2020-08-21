import React, {useState} from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Label,Button, Text} from 'native-base';

import Header from './Header'

const handleSubmit = (e) =>{
    e.preventDefault()
    Alert.alert("Sign in Working")
}

const Login = () => {
    const [text,setText] = useState('')
    const [password,setPassword] = useState('')
    const [title, setTitle] = useState('Login')
    // 'text' is like state key. setText is like setState(text: e.target.value)
    // console.log('--------------')
    // console.log('email', text)
    // console.log('password',password)

    return ( 
        <Container>
            <Header title={title}/>
            <Content>
                <Form style={styles.form}>
                    {/* <View style={{flex:.8,flexDirection:'column', backgroundColor:'tan', justifyContent:'center'}}>
                        <TextInput style={styles.textInput} placeholder="email" onChangeText={(text)=> setText(text)}/>
                        <TextInput style={styles.textInput} placeholder="password" onChangeText={(password)=> setPassword(password)} secureTextEntry={true}/>
                        <Text> Enable Face ID Slider</Text>
                    </View> */}
                    <Item>
                        <Input placeholder='Email'onChangeText={(text)=> setText(text)}/>
                    </Item>
                    <Item last>
                        <Input placeholder='Password' onChangeText={(password)=> setPassword(password)} secureTextEntry={true}/>
                    </Item>
                    <Button full bordered light primary onPress={handleSubmit}><Text>Sign In</Text></Button>
                </Form>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    form:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Login;