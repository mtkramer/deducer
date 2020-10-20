import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2f4f4f',
        padding: 40
    }
});
