import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const ListItem = (props) => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    marginBottom: 4,
    padding: 10,
    backgroundColor: '#eee',
  }
});

export default ListItem;
