import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import { styles } from "./components/styles";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Welcome to Deducer',
            headerStyle: styles.header
          }} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login or Create Account',
            headerStyle: styles.header
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
