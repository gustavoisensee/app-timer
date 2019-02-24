import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';
import Settings from './components/pages/Settings';
import { useNavigationOptions } from './helpers/navigation';

const navigationOptions = {
  navigationOptions: useNavigationOptions()
};

const routes = {
  Dashboard: {
    screen: Dashboard,
    ...navigationOptions
  },
  Profile: {
    screen: Profile,
    ...navigationOptions
  },
  Settings: {
    screen: Settings,
    ...navigationOptions
  },
  Logout: {
    screen: Login
  }
};

const configs = {};

const MyDrawerNavigator = createDrawerNavigator(routes, configs);

const DashboardIndex = createAppContainer(MyDrawerNavigator);

export default DashboardIndex;