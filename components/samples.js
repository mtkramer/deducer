import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Samples() {
    return (
        <View style={styles.container}>
            <Text>This is the image component</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
