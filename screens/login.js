import { styles } from '../shared/styles';
import React from 'react';
import { View } from 'react-native';
import Presser from '../shared/presser';


export default function LoginScreen({ navigation }) {

  return (
    <View style={styles.screen}>

      <View style={styles.buttonContainer}>
        <Presser
          title="SIGN IN"
          size="20"
          color="white"
          bgcolor="yellowgreen"
          onPress={() => alert("Under Construction")}
          width="50%"
        />
        <Presser
          title="CREATE ACCOUNT"
          size="20"
          color="white"
          bgcolor="yellowgreen"
          onPress={() => alert("Under Construction")}
          width="50%"
        />
      </View>

    </View>
  );

}
