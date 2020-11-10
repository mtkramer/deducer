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
      width: width,
      marginVertical: 10,
      fontWeight: '500',
      borderRadius: 3,
      shadowOffset: { width: 3, height: 3 },
      shadowColor: '#333',
      shadowRadius: 3,
      elevation: 5
    }
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );

};
