import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import UsersMap from './components/UsersMap';
import FetchLocation from './components/FetchLocation';



export default class App extends React.Component {
  // this is how you set the header bar to a parameter
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  state = {
    userLocation: null,
    usersPlaces: []
  }

  getUserLocationHandler = () =>{
    console.log('pressed the button!');
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      this.setState({userLocation: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0421
      }});
      fetch('https://react-native-2971f.firebaseio.com/places.json', {
        method: 'POST',
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }, err => {
      console.log(err)
    })
  };

  getUserPLacesHandler = () => {
    fetch('https://react-native-2971f.firebaseio.com/places.json')
      .then(res => res.json())
      .then(parsedRes => {
        const placesArray = [];
        for (const key in parsedRes) {
          placesArray.push({
            latitude: parsedRes[key].latitude,
            longitude: parsedRes[key].longitude,
            id: key
          })
        }
        this.setState({
          usersPlaces: placesArray
        })
      })
      .catch(err => console.log(err))

  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
         <Text>Hey LUCAS SPACIL</Text>
         <Button
    title="Update the title"
    onPress={() => this.props.navigation.setParams({otherParam: 'Lucas is worked!'})}
  />
         <View style={{marginBottom: 20}}>
         <Button title="Get User Places" onPress={this.getUserPLacesHandler}/>
         </View>
         <FetchLocation onGetLocation={this.getUserLocationHandler} />
         <UsersMap userLocation={this.state.userLocation} usersPlaces={this.state.usersPlaces}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
