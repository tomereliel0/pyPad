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
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 3,borderColor:'grey',
    backgroundColor: '#1f1f1f',
  },
});


export default TextEditor;

