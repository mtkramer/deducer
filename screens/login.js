import { styles } from '../components/styles';
import React from 'react';
import { View } from 'react-native';
import Presser from '../components/presser';


export default function LoginScreen({ navigation }) {

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

}
