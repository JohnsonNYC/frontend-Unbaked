import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label,Button, Text, View, Icon} from 'native-base';

import SummerSpecial from './SummerSpecial'
import Popular from './Popular'
import About from './About'
import Navbar from './Navbar'
import Headers from './Headers'

class Welcome extends Component {
    render() { 
        return ( 
            <Container style={{justifyContent:'center', backgroundColor:'black'}}>
                <Content>
                    <Headers navigation={this.props.navigation}/>
                    {/* This div on click should take you to the profile of the user */}
                    <View style={{height:70, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                        <Icon style={{alignSelf:'flex-start'}} type='SimpleLineIcons' name='user'><Text> Good Afternoon, 'User Name here' </Text> </Icon>
                        <Icon style= {{alignSelf:'flex-start'}} name="star"> <Text>Three Stars</Text> </Icon>
                        
                    </View>
                    <Popular/>
                    <About/>
                </Content>
                    <Navbar/>                  
            </Container>
        );
    }
}

export default Welcome;