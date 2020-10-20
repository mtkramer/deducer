import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import About from "./about";
import Samples from "./samples";
import Presser from './presser';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Presser
        title="LOGIN"
        size="20"
        color="white"
        bgcolor="yellowgreen"
        onPress={() => navigation.navigate('Login')}
        width="25%"
      />
      <Samples />
      <About />
    </View>
  );
};

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Presser
          title="SIGN IN"
          size="15"
          color="white"
          bgcolor="yellowgreen"
          onPress={() => alert("Under Construction")}
          width="50%"
        />
        <Presser
          title="CREATE ACCOUNT"
          size="15"
          color="white"
          bgcolor="yellowgreen"
          onPress={() => alert("Under Construction")}
          width="50%"
        />
      </View>
    </View>
  );
};
