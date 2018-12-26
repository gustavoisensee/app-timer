import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/pages/Login';
import Dashboard from './src/components/pages/Dashboard';
import CreateAccount from './src/components/pages/CreateAccount';
import ResetPassword from './src/components/pages/ResetPassword';

const routes = {
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  Dashboard: { screen: Dashboard },
  ResetPassword: { screen: ResetPassword }
};

const configs = {
  header: null
};

const App = createStackNavigator(routes, configs);

export default createAppContainer(App);