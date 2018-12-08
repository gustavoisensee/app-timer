import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/components/pages/Login';
import Dashboard from './src/components/pages/Dashboard';
import CreateAccount from './src/components/pages/CreateAccount';
import ResetPassword from './src/components/pages/ResetPassword';

const App = createStackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
  CreateAccount: { screen: CreateAccount },
  ResetPassword: { screen: ResetPassword }
});

export default createAppContainer(App);