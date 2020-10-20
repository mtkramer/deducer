import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import About from './components/about';
import Navbar from './components/navbar';
import Samples from './components/samples';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <ScrollView>
          <Navbar />
          <Samples />
          <About />
        </ScrollView>
      </View>
    </NavigationContainer>
  );
}
