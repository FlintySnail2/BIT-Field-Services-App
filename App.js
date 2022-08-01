import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation.js';
import Login from './src/views/Login.js';
import AssignedJobs from './src/views/AssignedJobs.js';
import ContractorAvailability from './src/views/ContractorAvailability.js';

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
