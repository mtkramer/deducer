import 'react-native-gesture-handler';  // must be at top or nav gets cranky
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import { styles } from "./shared/styles";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: 'white',
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'WELCOME TO DEDUCER' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Sign in or Create account' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
