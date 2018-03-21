import React from 'react';
import {Text, View, Button, Image } from 'react-native';

export default class Tab1 extends React.Component {
    static navigationOptions = {
        tabBarLabel : "Tab1"
    }
    render() {
        return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontSize: 30}}>Tab1</Text>
        </View>
         ) }
}