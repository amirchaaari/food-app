import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { NativeWindStyleSheet } from "nativewind";
import Dish from './screens/Dish';
import Details from './screens/Details';
import Cart from './screens/cart';
import Checkout from './screens/checkout';
import Login from './screens/login';
import Register from './screens/register';

NativeWindStyleSheet.setOutput({
  default: "native",
});
const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
  <Stack.Navigator 
  screenOptions={{
    // headerShown: false
  }}
  >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      

  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Dish" component={Dish} />
  <Stack.Screen name="Details" component={Details} />
  <Stack.Screen name="Cart" component={Cart} />
  <Stack.Screen name="Checkout" component={Checkout} />





  </Stack.Navigator>
    </NavigationContainer>
  );
}



