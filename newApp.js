// In App.js in a new project

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Feed from './components/navigation/Feed';
import HomeScreen from './components/HomeScreen';
import MapScreen from './App';


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
    }
  );
  
  export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }