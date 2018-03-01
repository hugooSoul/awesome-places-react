import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const ListItem = (props) => (
  <TouchableHighlight onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableHighlight>
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
