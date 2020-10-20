import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home  Login  About  Contact us</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellowgreen',
    opacity: .85
  },
  text: {
    fontSize: 30
  }
});
