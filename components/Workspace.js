import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Explorer from './Explorer';
import SplitView from './SplitView';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';


const Workspace = () => {
  return ( 
  <View>
    <Toolbar />
    <SplitView 
      rightView = {<TextEditor />} 
      leftView = {<Explorer />}/>
  </View>);
}

export default Workspace;

