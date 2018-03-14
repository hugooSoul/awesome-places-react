import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const DefaultButton = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.button}>
      <Text style={styles.textButton}>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
  },
  textButton: {
    color: '#2E294E',
    fontSize: 15
  }
});

export default DefaultButton;
