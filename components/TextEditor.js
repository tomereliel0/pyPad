import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Keyboard,TextInput} from 'react-native';

const TextEditor = () => {
  return (
    <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        multiline={true}
        onScroll={Keyboard.dismiss}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    margin: 2,
    borderWidth: 1,
  },
});


export default TextEditor;

