import React, { Component } from 'react';
import { View, Text} from "react-native";
import Header from "./Header";
import Auth from "./Auth"
import SummerSpecial from './SummerSpecial'
import Popular from './Popular'
import About from './About'
import Navbar from './Navbar'

class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={{flex:1}}>
                <Header/>
                <Auth/>
                <SummerSpecial/>
                <Popular/>
                <About/>
                <Navbar/>
            </View>
        );
    }
}

export default Homepage;