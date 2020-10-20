import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.container}>
            <Text>Home  Login  About  Contact us</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellowgreen'
    }
});
