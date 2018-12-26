import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/pages/Login';
import Dashboard from './src/components/pages/Dashboard';
import CreateAccount from './src/components/pages/CreateAccount';
import ResetPassword from './src/components/pages/ResetPassword';
import { useNavigationOptions } from './src/helpers/navigation';

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
  Dashboard: {
    screen: Dashboard,
    ...navigationOptions
  },
};

const configs = {};

const App = createStackNavigator(routes, configs);

export default createAppContainer(App);
