import React, { useState } from 'react';
import { Container, Content, Form, Item, Input, Label,Button, Text} from 'native-base';

import Header from './Header'
import { Alert } from 'react-native';

const Signup = ()=> {
    const [title] = useState('Signup')
    const [firstName,setFirstName] = useState('Signup')
    const [lastName, setLastName] = useState('Signup')
    const [email, setEmail] = useState('Signup')
    const [password,setPassword] = useState('Signup')
    const [confirmation, setConfirmation] = useState('Signup')

    console.log(firstName,lastName)
        return ( 
            <Container>
                <Header title={title}/>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder='First Name' onChangeText={(firstName)=> setFirstName(firstName)}/>
                        </Item>
                        <Item>
                            <Input placeholder='Last Name' onChangeText={(lastName)=> setLastName(lastName)}/>
                        </Item>
                        <Item>
                            <Input placeholder='Email'onChangeText={(email)=> setEmail(email)}/>
                        </Item>
                        <Item>
                            <Input placeholder='Password'onChangeText={(password)=> setPassword(password)}/>
                        </Item>
                        <Item>
                            <Input placeholder='Confirm Password'onChangeText={(confirmation)=> setConfirmation(confirmation)}/>
                        </Item>
                        <Button full boarded light primary onPress={()=> Alert.alert('Sign Up Working')}><Text>Sign Up</Text></Button>
                    </Form>
                </Content>
            </Container>
        );
}

export default Signup;