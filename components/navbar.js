import React from 'react';
import { Text, View } from 'react-native';
import { styles } from "../styles";

export default function Navbar() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.navText}>Home  Login  About  Contact us</Text>
    </View>
  );
}
