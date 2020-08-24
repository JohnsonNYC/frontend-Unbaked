import React, {useState} from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Container, Content, Form, Item, Input,Button, Text} from 'native-base';

import Headers from './Headers'

const handleSubmit = (e) =>{
    e.preventDefault()
    Alert.alert("Sign in Working")
}

const Login = (props) => { // passed route and navigation from Auth.js onPress Button function
    
    const [text,setText] = useState('')
    const [password,setPassword] = useState('')
    const [title, setTitle] = useState('LOGIN')


    return ( 
        <Container>
            <Headers title={title} navigation={props.navigation}/> 
            <Content>
                <Form style={styles.form}>
                    <Item>
                        <Input placeholder='Email'onChangeText={(text)=> setText(text)}/>
                    </Item>
                    <Item last>
                        <Input placeholder='Password' onChangeText={(password)=> setPassword(password)} secureTextEntry={true}/>
                    </Item>
                    <Button full bordered light primary onPress={handleSubmit}><Text>LOGIN </Text></Button>
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