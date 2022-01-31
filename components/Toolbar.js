import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Button from 'react-bootstrap/Button';



const Toolbar = () => {
  return (
/*     <Text>Hello</Text> */
    <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../img/settings.png')}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'flex-end',
    backgroundColor : '#666666',
  },
  table: {
/*     flex: 1, */
/*     backgroundColor: 'green',
    alignItems: 'flex-start',
    height : 30 */
  },
  logo: {
    width: 30,
    height: 30,
  },
});


export default Toolbar;

