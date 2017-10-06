
import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, Platform, Dimensions,AppRegistry, Image, StyleSheet, WebView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './src/components/SliderEntry';
import { ENTRIES1 } from './src/static/entries';
import styles from './src/styles/index.style';
import LineChart from './src/linechart';
import DoghnutChart from './src/doughnut';
import BarChart from './src/barchart';
import PolarArea from './src/polararea';
import Icon from 'react-native-vector-icons/Ionicons';


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


    _renderLineChart(){
      


      switch(this.state.slider1ActiveSlide){
        case 0:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <LineChart  data= {[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]}/>
            </View>
          )
          break;

        case 1:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <LineChart  data= {[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]}/>
            </View>
          )
          break;

        case 3:
          return(
            <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <LineChart  data= {[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]}/>
            </View>
          )
          break;

        case 5:
          return(
            <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <LineChart  data= {[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]}/>
            </View>
          )
          break;

      }
    }

    _renderDoughnutChart(){
      switch(this.state.slider1ActiveSlide ){
         
        case 0:
           return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
                <DoghnutChart />
             </View>
          )
          break;


        case 2:
           return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
                <DoghnutChart />
             </View>
          )
          break;

          case 4:
           return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
                <DoghnutChart />
             </View>
          )
          break;

          case 6:
           return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
                <DoghnutChart />
             </View>
          )
          break;
      }
    }

    _renderBarChart(){
      switch(this.state.slider1ActiveSlide){
          
        
        case 0:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <BarChart />
            </View>
          )
          break;

        case 1:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <BarChart />
            </View>
          )
          break;

        case 3:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <BarChart />
            </View>
          )
          break;

        case 5:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
              <BarChart />
            </View>
          )
          break;
      }
    }


    _renderPolarArea(){
      switch(this.state.slider1ActiveSlide){
         
        case 0:
          return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
               <PolarArea />
              </View>
          )
          break;


         case 2:
          return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
               <PolarArea />
              </View>
          )
          break;
          
          case 4:
          return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
               <PolarArea />
              </View>
          )
          break;

          case 6:
          return(
              <View style={{flex:3}}>
              <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  Population Growth by Year</Text>
               <PolarArea />
              </View>
          )
          break;
      }
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
                  inactiveSlideScale={0.8}
                  inactiveSlideOpacity={0.5}
                  enableMomentum={false}
                  scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                
            </View>
        );
    }


 

 render() {

    return (
       <ScrollView style={sty.container}>
              <LinearGradient colors={['#ff512f', '#dd2476']} style={styles.linearGradient}>
            
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

              <View style={{flex:1}}>

          
               <View style={styles.container}>
                <ScrollView
                  style={styles.scrollview}
                  indicatorStyle={'white'}
                  scrollEventThrottle={200}
                  directionalLockEnabled={true}
                >

                    {this.example1}
                  
                </ScrollView>
            </View>        
          </View>


              {this._renderLineChart()}
            
              {this._renderDoughnutChart()}

              {this._renderBarChart()}
           
              {this._renderPolarArea()}


            </ScrollView>


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
  columnedItems:{
     flexDirection:'row',
     justifyContent: 'space-between',

  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',

  },
  country: {
    marginTop:20,
    fontSize: 25,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Regular',
    letterSpacing: 2,

  },

  chartTitle: {
    marginTop:20,
    marginBottom:10,
    marginLeft:10,
    fontSize: 15,
    color:'#292929',
    fontFamily:'Montserrat-Regular',
    letterSpacing: 2,

  },

  overlayText: {
    fontSize: 20,
    textAlign: 'center',
    color:'#FB5260',
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

});
 

AppRegistry.registerComponent('DataBankApp', () => DataBankApp);

