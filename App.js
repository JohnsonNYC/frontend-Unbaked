import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from "./components/Homepage";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Welcome from './components/Welcome'

const Stack = createStackNavigator()

export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ gestureEnabled: false }}>
        {/* Screen has a buildin function called navigator passed down to components in element */}
        {/* the Auth Page is a child of Homepage, therefore the navigate props in Homepage had */}
        {/* to be passed down to Auth. Where the Button are that render login and signup */}
        <Stack.Screen name="Homepage" component={Homepage} options={{headerShown: false}}/> 
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="Welcome" component={Welcome} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
