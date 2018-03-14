import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class SideDrawerScreen extends Component {

  render() {
    return (
      <View
        style={[ styles.container, { width: Dimensions.get("window").width * 0.8 } ]}>
        <Text>Menu</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'white',
    flex: 1
  }
});

export default SideDrawerScreen;
