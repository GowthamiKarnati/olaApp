import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './DrawerScreens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import LocationScreen from './DrawerScreens/LocationScreen';
import PickupScreen from './DrawerScreens/PickupScreen';
import PaymentScreen from './DrawerScreens/PaymentScreen';
import Menu from './Components/Menu';
import ElectricScreen from './Components/ElectricScreen';
import RidesScreen from './Components/RidesScreen';
import AboutScreen from './Components/AboutScreen';
const Stack = createStackNavigator();
const DrawerNavigationRoutes = () => {
  return (

    
        <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={({ route, navigation }) => ({ title: route.params?.selectedItem || 'Location' })}
      />

      <Stack.Screen
        name="PickupScreen"
        component={PickupScreen}
        options={{title: 'Pickup Point'}}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{title: 'Payment Here'}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{title: 'your Profile'}}
      />
      <Stack.Screen
        name="ElectricScreen"
        component={ElectricScreen}
        options={{title: 'Electric'}}
      />
      <Stack.Screen
        name="RidesScreen"
        component={RidesScreen}
        options={{title: 'Your Rides'}}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{title: 'About Us'}}
      />
</Stack.Navigator>
    

  )
}

export default DrawerNavigationRoutes

const styles = StyleSheet.create({})