import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import TextEditor from './components/TextEditor';
import Workspace from './components/Workspace';


export default function App() {
 /*  ScreenOrientation.unlockAsync() */
  return (<SafeAreaView><Workspace></Workspace></SafeAreaView>);
}

