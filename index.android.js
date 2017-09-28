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
import Carousel from 'react-native-snap-carousel';

export default class DataBankApp extends Component {


  _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }




  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{flex: 1,
          alignSelf: 'stretch',
          width: undefined,
          height: undefined}}
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

            <Text style={styles.subtextSmallText}>
               GDP: $1,709.39                 |                  GNI: $1,680        
            </Text>
        </Image>

        <View style={{flex:1.7}}>
        </View>
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
    marginTop:40,
    fontSize: 14,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Medium',
    letterSpacing: 2,
  },
  subtextNumber: {
    marginTop:-10,
    fontSize: 45,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Bold',
    letterSpacing: 2,
  },
  subtextSmallText: {
    marginTop:25,
    fontSize: 12,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Medium',
    letterSpacing: 2,

  }
});

AppRegistry.registerComponent('DataBankApp', () => DataBankApp);
