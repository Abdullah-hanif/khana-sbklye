import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from '../Screens/loginScreen/login'
import signup from '../Screens/signup/signup'
import form from '../Screens/form/form'

const Stack = createNativeStackNavigator();


export default function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="login" options={{headerShown:false }}  component={login} /> */}
          {/* <Stack.Screen name="signup" options={{headerShown:false }}  component={signup} /> */}
           <Stack.Screen name="form" options={{ headerShown:false }}  component={form} />
        {/* <Stack.Screen name="map" options={{ title: 'map' }}  component={map} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
           
           
           
  