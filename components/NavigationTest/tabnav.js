import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation'
// import Icon from "react-native-vector-icons/FontAwesome";
import stackNav from './stacknav';
import MapScreen from '../MapScreen';

const tabNav = TabNavigator({
    TabItem1: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel:"Tab 1"
        }
    },
    TabItem2 : {
        screen: MapScreen,
        navigationOptions: {
            tabBarLabel: "Map Screen"
        }
    }

    ///... add more tabs here

}, {
        tabBarOptions: {
            activeTintColor: '#222',
        }
});

export default tabNav;