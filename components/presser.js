import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Presser({ title, size, color, bgcolor, onPress, width }) {

  const styles = StyleSheet.create({
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: color,
      fontSize: Number(size),
      backgroundColor: bgcolor,
      paddingVertical: 5,
      paddingHorizontal: 10,
      fontWeight: '500',
      marginVertical: 10,
      borderRadius: 3,
    }
  });

  return (
    <View style={{ width: width }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

};
