import React, { Component } from 'react';
import { Container, Content} from "native-base";
import Header from "./Header";
import Auth from "./Auth"
import SummerSpecial from './SummerSpecial'
import Popular from './Popular'
import About from './About'
import Navbar from './Navbar'

class Homepage extends Component {
    // Use <View> to controll the dimensions of each Component 
    render() { 
        return ( 
            <Container style={{justifyContent:'center', backgroundColor:'lavender'}}>
                <Content>
                    <Header/> 
                    <Auth navigation={this.props.navigation}/>
                    <SummerSpecial/>
                    <Popular/>
                    <About/>
                </Content>
                    <Navbar/>                  
            </Container>
        );
    }
}

export default Homepage;