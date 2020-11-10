import { styles, samples } from '../shared/styles';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Presser from '../shared/presser';


export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Presser
          title="LOGIN"
          size="20"
          color="white"
          bgcolor="yellowgreen"
          onPress={() => navigation.navigate('Login')}
          width="25%"
        />

        <ScrollView horizontal={true} style={{ flex: 1, flexDirection: "row" }}>
          <FlatList
            data={samples}
            renderItem={({ item, index }) => (
              <TouchableOpacity>
                <Image style={styles.sample} source={item[index]} />
              </TouchableOpacity>
            )}
          />
          {/* <TouchableOpacity>
            <Image style={styles.sample} source={require('../assets/machu-picchu-moray.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.sample} source={require('../assets/crazy-2pt.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.sample} source={require('../assets/relativity.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.sample} source={require('../assets/hyper-family.png')} />
          </TouchableOpacity> */}
        </ScrollView>

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
