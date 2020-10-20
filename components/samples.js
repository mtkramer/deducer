import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from './styles';

export default function Samples() {
  const [samples] = useState([
    { key: '0', image: '../assets/machu-picchu-moray.jpg' },
    { key: '1', image: '' },
    { key: '2', image: '' },
    { key: '3', image: '' }
  ]);

  return (
    <View style={styles.samples}>
      <ScrollView horizontal={true}>
        <TouchableOpacity>
          <Image style={{ height: 125, width: 200, margin: 10 }} source={require('../assets/machu-picchu-moray.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ height: 125, width: 200, margin: 10 }} source={require('../assets/crazy-2pt.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ height: 125, width: 200, margin: 10 }} source={require('../assets/relativity.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ height: 125, width: 200, margin: 10 }} source={require('../assets/hyper-family.png')} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
