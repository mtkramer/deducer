import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { styles } from './styles';

export default function Samples() {
  const [samples] = useState([
    { image: '../assets/machu-picchu-moray.jpg', key: '0' },
    { image: '../assets/crazy-2pt.jpg', key: '1' },
    { image: '../assets/relativity.jpg', key: '2' },
    { image: '../assets/hyper-family.png', key: '3' }
  ]);

  return (
    <View style={styles.samples}>
      <ScrollView horizontal={true}>
        {/* <FlatList
          data={samples}
          renderItem={({ item }) =>
            <TouchableOpacity>
              <Image style={{ height: 125, width: 200, margin: 10 }} source={item.image} />
            </TouchableOpacity>
          }
        /> */}
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
