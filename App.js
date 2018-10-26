/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules,
  NativeEventEmitter
} from 'react-native';

// instantiate the event emitter
const CounterEvents = new NativeEventEmitter(NativeModules.Counter);

// subscribe to events
CounterEvents.addListener(
  "onIncrement",
  res => console.log("onIncrement event", res)
)

// subscribe to event
CounterEvents.addListener(
  "onDecrement",
  res => console.log("onDecrement event", res)
)

const printCount = () => {
  NativeModules.Counter.getCount(value => {
    console.log("count is " + value);
  });
}

function increment() {
  NativeModules.Counter.increment();
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
