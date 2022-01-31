import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Playground = () => {
  return ( 
  <Text style={styles.container}>Output:</Text>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor :'#1f1f1f',
    justifyContent: 'center',
  },
});


export default Playground;

