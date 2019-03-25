import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>   Test </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  
});
