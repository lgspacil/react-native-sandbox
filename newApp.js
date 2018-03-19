// In App.js in a new project

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import MapScreen from './MapScreen';


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
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
    
  );
  
  export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }