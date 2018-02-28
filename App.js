import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends React.Component {

  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if( this.state.placeName === "" ) {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Awesome Places</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler} />
          <Button title='Add' style={styles.placeButton} onPress={this.placeSubmitHandler} />
        </View>

        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  welcome: {
    color: 'black',
    fontSize: 17,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%',
  }
});
