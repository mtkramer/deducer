import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from "./styles";
import About from "./components/about";
import Navbar from "./components/navbar";
import Samples from "./components/samples";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Navbar />
        <Samples />
        <About />
      </ScrollView>
    </View>
  );
}
