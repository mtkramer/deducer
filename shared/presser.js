import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Presser({ title, size, color, bgcolor, onPress, width }) {

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      color: color,
      fontSize: Number(size),
      backgroundColor: bgcolor,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontWeight: '500'
    },
    shadow: {
      width: width,
      marginVertical: 10,
      borderRadius: 3,
      shadowOffset: { width: 3, height: 3 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 3
    }
  });

  return (
    <View style={styles.shadow}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

};
