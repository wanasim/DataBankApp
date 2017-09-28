/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow


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
 */

import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, Platform, Dimensions,AppRegistry } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './src/components/SliderEntry';
import styles from './src/styles/index.style';
import { ENTRIES1 } from './src/static/entries';





const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const SLIDER_1_FIRST_ITEM = 0;
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

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
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
            />
        );
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    get example1 () {
        const { slider1ActiveSlide, slider1Ref } = this.state;

        return (
            <View>
                <Carousel
                  ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.6}
                  enableMomentum={false}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={'#1a1917'}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={slider1Ref}
                  tappableDots={!!slider1Ref}
                />
            </View>
        );
    }




    render () {
        return (
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
        );
    }
}






































AppRegistry.registerComponent('DataBankApp', () => DataBankApp);

