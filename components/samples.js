import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Samples() {
  const [samples] = useState([
    { key: '0', image: './assets/machu-picchu-moray.jpg' },
    { key: '1', image: '' },
    { key: '2', image: '' },
    { key: '3', image: '' }
  ]);

  return (
    <TouchableOpacity style={styles.samples}>
      {/* <FlatList
        data={samples}
        renderItem={({item}) => (
          <Image source={item.image} />
        )}
      /> */}
      <Text>This is the image list</Text>
    </TouchableOpacity>
  );
}
