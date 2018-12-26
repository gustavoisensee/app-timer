import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/pages/Login';
import CreateAccount from './components/pages/CreateAccount';
import ResetPassword from './components/pages/ResetPassword';
import { useNavigationOptions } from './helpers/navigation';
import routesAuthenticated from './routesAuthenticated';

const navigationOptions = {
  navigationOptions: useNavigationOptions()
};

const routes = {
  Login: {
    screen: Login,
    ...navigationOptions  
  },
  CreateAccount: {
    screen: CreateAccount,
    ...navigationOptions
  },
  ResetPassword: {
    screen: ResetPassword,
    ...navigationOptions
  },
  Authenticated: {
    screen: routesAuthenticated,
    ...navigationOptions
  },
};

const configs = {};

const App = createStackNavigator(routes, configs);

export default createAppContainer(App);
