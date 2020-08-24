import React, {useState} from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Content, Form, Item, Input,Button, Text} from 'native-base';

import { useNavigation } from '@react-navigation/native';

import Headers from './Headers'

const handleSubmit = (e) =>{
    e.preventDefault()
    Alert.alert("Sign in Working")
}

const Login = () => { // passed route and navigation from Auth.js onPress Button function
    
    const [text,setText] = useState('')
    const [password,setPassword] = useState('')
    const [title, setTitle] = useState('Login')
    // const [navigation] = useNavigation();

    return ( 
        <Container>
            <Headers title={title} /> 
            <Content>
                <Form style={styles.form}>
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