import React, { Component } from 'react';
import { View } from "react-native";
import Header from "./Header";
import Auth from "./Auth"
import SummerSpecial from './SummerSpecial'
import Popular from './Popular'


class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <View style={{flex:1}}>
                <Header/>
                <Auth/>
                <SummerSpecial/>
                <Popular/>
            </View>
        );
    }
}

export default Homepage;