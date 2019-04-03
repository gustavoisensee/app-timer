import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RoutesNotAuthenticated from './src/routesNotAuthenticated';
import RoutesAuthenticated from './src/routesAuthenticated';
import store from './src/store';
import { retrieveData } from './src/storage';
import { USER } from './src/constants/storageKeys';
import { isUserLogged } from './src/helpers/account';

class App extends Component {
  state = {
    Component: null
  }

  async componentDidMount() {
    const user = await retrieveData(USER);
    const isLogged = await isUserLogged(user);
    
    const Routes = (isLogged
      ? RoutesAuthenticated
      : RoutesNotAuthenticated);

    this.setState({ Component: Routes });
  }

  render() {
    const { Component } = this.state;
    return ( 
      <Provider store={store}>
        {Component && <Component />}
      </Provider>
    );
  }
}

export default App;
