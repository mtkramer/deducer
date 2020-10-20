import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from '../styles';
import About from "./about";
import Samples from "./samples";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Button title="Login" color="yellowgreen" onPress={() => navigation.navigate('Login')} />
      <ScrollView>
        <Samples />
        <About />
      </ScrollView>
    </View>
  );
};

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Button title="Home" color="yellowgreen" onPress={() => navigation.navigate('Home')} />
      <Text>Login Screen</Text>
    </View>
  );
};
