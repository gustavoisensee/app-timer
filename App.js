import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import RoutesNotAuthenticated from './src/routesNotAuthenticated';
import store from './src/store';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

// TODO: logic to check logged in/out
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RoutesNotAuthenticated />
      </Provider>
    );
  }
}
