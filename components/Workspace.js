import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Explorer from './Explorer';
import SplitView from './SplitView';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import VerSplitView from './VerSplitView';
import Playground from './Playground';


const Workspace = () => {
  return ( 
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <View style={styles.container} >
    <Toolbar />
    <SplitView 
      /* rightView = {<TextEditor />}  */
      rightView = {<VerSplitView 
                  topView = {<TextEditor />} bottomView = {<Playground />}/>}
      leftView = {<Explorer />}/>
  </View>
  </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor : '#666666',
  },
});

export default Workspace;

