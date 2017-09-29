/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
*/

import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, Platform, Dimensions,AppRegistry, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './src/components/SliderEntry';
import { ENTRIES1 } from './src/static/entries';
import styles from './src/styles/index.style';



const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const SLIDER_1_FIRST_ITEM = 2;
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 1;


export default class DataBankApp extends Component {


    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
    }

    _renderItem ({item, index}) {
        return (
            <View
              style={{flex: 1,
                backgroundColor:'#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              width: 200,
              height: 100}}
            >

            <Text style={sty.overlayText}>{item.title}</Text>
            </View>
        );
    }


    get example1 () {
        const { slider1ActiveSlide, slider1Ref } = this.state;

        return (
            <View>
                <Carousel
                  ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                  data={ENTRIES1}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={200}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.6}
                  enableMomentum={false}
                  scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                
            </View>
        );
    }


 

 render() {

    return (
       <View style={sty.container}>
              <LinearGradient colors={['#fb5260', '#fb747f']} style={styles.linearGradient}>
              
               
                  <Text style={sty.country}>
                      INDIA
                  </Text>

                  <Text style={sty.subtext}>
                      POPULATION
                  </Text>

                  <Text style={sty.subtextNumber}>
                      1.324B
                  </Text>

                  <Text style={sty.subtextSmallText}>
                     GDP: $1,709.39                 |                  GNI: $1,680        
                  </Text>
              </LinearGradient>

              <View style={{flex:1.4}}>

          
               <View style={styles.container}>
                <ScrollView
                  style={styles.scrollview}
                  indicatorStyle={'white'}
                  scrollEventThrottle={200}
                  directionalLockEnabled={true}
                >
                    { this.example1 }
       
                </ScrollView>
            </View>

           
              </View>
            </View>
    );
  }
}

const sty = StyleSheet.create({

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',

  },
  country: {
    marginTop:20,
    fontSize: 25,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Regular',
    letterSpacing: 2,

  },

  overlayText: {
    fontSize: 20,
    textAlign: 'center',
    color:'#666666',
    fontFamily:'Montserrat-Light',
    letterSpacing: 2,


  },
  subtext: {
    marginTop:40,
    marginBottom:10,
    fontSize: 14,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Light',
    letterSpacing: 2,
  },
  subtextNumber: {
    marginTop:-10,
    fontSize: 35,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Light',
    letterSpacing: 2,
  },
  subtextSmallText: {
    marginTop:25,
    marginBottom:10,
    fontSize: 12,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Light',
    letterSpacing: 2,

  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.6
  }  
});
 



AppRegistry.registerComponent('DataBankApp', () => DataBankApp);

