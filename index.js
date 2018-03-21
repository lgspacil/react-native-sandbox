// import { AppRegistry} from 'react-native';
// import App from './App'


// AppRegistry.registerComponent('shareplaces', () => App);


import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { DrawerNavigator} from 'react-navigation';
// import Icon from "react-native-vector-icons/FontAwesome";
import tabNav from './components/NavigationTest/tabnav';

const drawernav = DrawerNavigator({
    DrawerItem1: {
        screen: tabNav,
        navigationOptions: {
            drawerLabel: "Drawer Item 1"
        },
    }
});

AppRegistry.registerComponent('shareplaces', () => drawernav);