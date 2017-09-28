/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Image
} from 'react-native';

export default class DataBankApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
         style={{width: 411, height: 250}}
         source={require('./assets/header_background.png')} 
         >
            <Text style={styles.country}>
                INDIA
            </Text>

            <Text style={styles.subtext}>
                POPULATION
            </Text>

            <Text style={styles.subtextNumber}>
                1.324B
            </Text>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF7F8',
  },
  country: {
    marginTop:20,
    fontSize: 25,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Regular',
    letterSpacing: 2,

  },
  subtext: {
    marginTop:30,
    fontSize: 14,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Light',
    letterSpacing: 2,
  },
  subtextNumber: {
    fontSize: 40,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Bold',
    letterSpacing: 2,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DataBankApp', () => DataBankApp);
