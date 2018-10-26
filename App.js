/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';

// subscribe to events
Counter.addListener(
  "onIncrement",
  res => console.log("onIncrement event", res)
)

Counter.addListener(
  "onDecrement",
  res => console.log("onDecrement event", res)
)

function increment() {
  Counter.increment();
}
function decrement() {
  Counter.decrement()
}

increment();
increment();
decrement();
decrement();
decrement();

const message = Platform.select({
  ios: 'Running Swift from React Native!',
  android: 'Can\'t run Swift on Android yet!'
});

export default class App extends Component<> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{message}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  message: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
  },
});
