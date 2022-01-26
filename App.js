import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextEditor from './components/TextEditor';
import Workspace from './components/Workspace';
import * as ScreenOrientation from 'expo-screen-orientation';


export default function App() {
  ScreenOrientation.unlockAsync()
  return (<Workspace></Workspace>);
}

