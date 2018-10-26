/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, NativeModules } from 'react-native';

const printCount = () => {
  NativeModules.Counter.getCount(value => {
    console.log("count is " + value);
  });
}

function increment() {
  NativeModules.Counter.increment();
  console.log("incremented");
}
function decrement() {
  NativeModules.Counter.decrement()
    .then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message, err.code);
      });
}

increment();
printCount();
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
