// In App.js in a new project

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import MapScreen from './components/MapScreen';
import Tab1 from './components/tabs/tab1';
import Tab2 from './components/tabs/tab2';



const RootStack = StackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Map: {
        screen: MapScreen,
      },
    },
    {
      initialRouteName: 'Home',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#4d4c50',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
  );
  
  export default class routes extends React.Component {
    render() {
      return <RootStack />
    }
  }