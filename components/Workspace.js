import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Explorer from './Explorer';
import SplitView from './SplitView';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import VerSplitView from './VerSplitView';
import Playground from './Playground';


const Workspace = () => {
  return ( 
  <View style={styles.container}>
    <Toolbar />
    <SplitView 
      /* rightView = {<TextEditor />}  */
      rightView = {<VerSplitView 
                  topView = {<TextEditor />} bottomView = {<Playground />}/>}
      leftView = {<Explorer />}/>
  </View>);
}
const styles = StyleSheet.create({
  container:{
    backgroundColor : '#470000',
  },
});

export default Workspace;

