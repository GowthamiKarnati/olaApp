import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store/store';
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
const Stack = createStackNavigator();

const App = () => {
  const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Register', //Set Header Title
            headerStyle: {
              backgroundColor: '#D7DF23', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    );
  };
  

  return (
     <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {/* SplashScreen which will come once for 5 Seconds */}
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
          />
          {/* Auth Navigator: Include Login and Signup */}
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DrawerNavigationRoutes"
            component={DrawerNavigationRoutes}
            options={{headerShown: false}}
          />        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App

const styles = StyleSheet.create({})


