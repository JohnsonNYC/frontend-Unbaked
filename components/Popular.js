import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content,Text, View, Button} from 'native-base';

class Popular extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Container>
                    <Text>Popular Dough Portion</Text>
                </Container>
                <Container>
                    <Text>Array of Dough here</Text>
                </Container>
            </Container>
        );
    }
}

export default Popular;