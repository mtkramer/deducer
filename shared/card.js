import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {

  const styles = StyleSheet.create({
    card: {
      borderRadius: 3,
      shadowOffset: { width: 3, height: 3 },
      shadowColor: '#ccc',
      shadowOpacity: .75
    }
  });

  return (
    <View style={styles.card}>{props.children}</View>
  );
}
