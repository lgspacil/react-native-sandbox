import React from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Tab1 from './components/tabs/tab1'
import Tab2 from './components/tabs/tab2'
import MapScreen from './components/MapScreen';

var MainScreenNavigator = TabNavigator({
  Tab1: {screen: Tab1},
  Tab2: {screen: Tab2},
})

MainScreenNavigator.navigationOptions = {
  title: "Tab Example"
}

export default MainScreenNavigator;

