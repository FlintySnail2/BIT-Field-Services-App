import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation.js';
function App(){
   return(
    <Navigation/>
   )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
