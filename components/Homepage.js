import React, { Component } from 'react';
import { View} from "react-native";
import Headers from "./Header";
import Auth from "./Auth"
import SummerSpecial from './SummerSpecial'
import Popular from './Popular'
import About from './About'
import Navbar from './Navbar'

class Homepage extends Component {
    
    render() { 
        return ( 
            <View style={{flex:1}}>
                {/* Heder flex:0.2 */}
                <Headers/> 

                {/* Auth flex:0.2 */}
                <Auth navigation={this.props.navigation}/>

                {/* SummerSpecial flex:0.2 */}
                <SummerSpecial/>

                {/* Popular flex:0.2 */}
                <Popular/>

                {/* About flex:0.2 */}
                <About/>

                {/* Navbar flex:0.2 */}
                <Navbar/>
            </View>
        );
    }
}

export default Homepage;