import React from 'react';
import {Text, View, Button, Image } from 'react-native';

export default class Tab2 extends React.Component {
    static navigationOptions = {
        tabBarLabel : "Tab2"
    }
    render() {
        return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontSize: 30}}>Tab2</Text>
        </View>
        )}
}