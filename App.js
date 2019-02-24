import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RoutesNotAuthenticated from './src/routesNotAuthenticated';
import store from './src/store';

// TODO: logic to check logged in/out
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RoutesNotAuthenticated />
      </Provider>
    );
  }
}

export default App;
