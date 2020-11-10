import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {

  const styles = StyleSheet.create({
    card: {
      borderRadius: 3,
      elevation: 3,
      shadowOffset: { width: 10, height: 10 },
      // shadowColor: '#333',
      // shadowOpacity: .75,
    }
  });

  return (
    <View style={styles.card}>{props.children}</View>
  );
}
