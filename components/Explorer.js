import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';

const Explorer = () => {
  return (
    <View style={styles.container} >
    <Text>This gonna be the Explorer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#470000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Explorer;

