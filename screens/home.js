import { styles } from '../components/styles';
import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Presser from '../components/presser';

export default function HomeScreen({ navigation }) {
  const [samples] = useState([
    { image: '../assets/machu-picchu-moray.jpg', key: '0' },
    { image: '../assets/crazy-2pt.jpg', key: '1' },
    { image: '../assets/relativity.jpg', key: '2' },
    { image: '../assets/hyper-family.png', key: '3' }
  ]);

  return (
    <View style={styles.screen}>
      <Presser
        title="LOGIN"
        size="20"
        color="white"
        bgcolor="yellowgreen"
        onPress={() => navigation.navigate('Login')}
        width="25%"
      />
      <ScrollView horizontal={true}>
        {/* <FlatList
          data={samples}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image style={{ height: 125, width: 200, margin: 10 }} source={item['image']} />
            </TouchableOpacity>
          )}
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
      <ScrollView>
        <Text style={styles.about}>
          Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor dummy text sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </Text>
      </ScrollView>
    </View>
  );

}


/*
try custom scroll view for image carousel similar to:
  <ScrollView>
      {
        this.state.samples.map((item, index) => (
          <Image key={item.id} style={{ height: 125, width: 200, margin: 10 }} source={require(item['image'])}>
        ))
      }
  </ScrollView>
*/
